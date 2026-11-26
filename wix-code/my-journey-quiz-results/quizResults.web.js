// Backend file (NEW). In the Wix Editor with Velo on: Code ({ } icon) > Backend > + > Add web module (.web.js)
// Name it: quizResults.web.js and paste all of this in. Written 27 Nov 2026.
// Gives the My Journey page the signed-in member's OWN quiz results (all courses), as a short summary.
//
// Privacy design:
// - Results are looked up by the signed-in member's own login email, read on the server. Nothing the page sends is used to choose whose results to read.
// - Only a summary leaves the server (quiz code, title, best and latest percent, number of attempts, date). The answers are never sent.
// - The page shows them to that member only. No ranking, no comparison with others.
import { Permissions, webMethod } from 'wix-web-module';
import { currentMember } from 'wix-members-backend';
import wixData from 'wix-data';

const DB = { suppressAuth: true };

// "Well grasped" threshold by course: Advanced 75 percent, every other quiz 70 percent.
function threshold(code) {
  return String(code || '').toUpperCase().indexOf('ADV') === 0 ? 75 : 70;
}

export const getMyQuizResults = webMethod(Permissions.Anyone, async () => {
  let member = null;
  try { member = await currentMember.getMember({ fieldsets: ['FULL'] }); } catch (e) { member = null; }
  const email = member && member.loginEmail ? String(member.loginEmail) : '';
  if (!member || !member._id || !email) throw new Error('Please sign in to see your quiz results.');

  // Newest first. 500 attempts is far more than any member will have.
  const found = await wixData.query('QuizResults').eq('memberEmail', email).descending('completedAt').limit(500).find(DB);
  const byCode = {};
  (found.items || []).forEach((r) => {
    const code = String(r.title || '');
    if (!code) return;
    const pct = Number.isFinite(Number(r.percent)) ? Math.round(Number(r.percent)) : null;
    if (!byCode[code]) {
      // The first row seen for a code is its latest attempt.
      byCode[code] = { code: code, title: r.quizTitle || code, programme: r.programme || '', latest: pct, best: pct, attempts: 0, lastAt: r.completedAt || null };
    }
    const q = byCode[code];
    q.attempts += 1;
    if (pct !== null && (q.best === null || pct > q.best)) q.best = pct;
  });
  const quizzes = Object.keys(byCode).map((k) => {
    const q = byCode[k];
    q.grasped = q.best !== null && q.best >= threshold(q.code);
    return q;
  }).sort((a, b) => String(b.lastAt || '').localeCompare(String(a.lastAt || '')));
  return {
    total: quizzes.length,
    grasped: quizzes.filter((q) => q.grasped).length,
    quizzes: quizzes.slice(0, 40),
  };
});
