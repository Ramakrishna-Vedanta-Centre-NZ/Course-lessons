# My Journey embed (HTML): four additions (27 Nov 2026)

File: LIVE-2026-11-08-journey-embed.html (the HTML inside the journeyFrame element). Make these four additions.

## A. Add this function directly above the line `function renderMemberHolding(){`

```js
/* ---- my quiz results (all courses; only this member sees them) ---- */
function quizCard(){
  var q = state.quiz, inner;
  if (!q) inner = loadingNote();
  else if (q.failed) inner = '<p style="'+P+'">Your quiz results could not be loaded just now. Please try again later.</p>';
  else if (!q.quizzes || !q.quizzes.length) inner = '<p style="'+P+'">You have not taken a quiz yet. Each lesson ends with a short quiz, and every answer comes with an explanation. You can take it as often as you like.</p>';
  else {
    inner = '<p style="'+P+'">'+esc(String(q.total))+(q.total === 1 ? ' quiz' : ' quizzes')+' taken, '+esc(String(q.grasped))+' well grasped.</p>'+
      q.quizzes.slice(0, 8).map(function(z){
        var url = /^CON-/.test(z.code) ? SETTINGS.SITE+'/quiz-hub?q='+encodeURIComponent(z.code) : '';
        var title = url ? '<a href="'+esc(url)+'" target="_top" style="font-weight:600;font-size:14.5px">'+esc(z.title)+'</a>' : '<span style="font-weight:600;font-size:14.5px">'+esc(z.title)+'</span>';
        var best = z.best === null ? '' : 'Best '+esc(String(z.best))+' percent';
        var tries = z.attempts+(z.attempts === 1 ? ' attempt' : ' attempts');
        var when = z.lastAt ? ', last on '+esc(fmtDate(z.lastAt)) : '';
        return '<div style="padding:12px 0;border-bottom:1px solid #EFE5CF">'+title+
          '<p style="font-size:13.5px;line-height:1.6;color:#4A4438;margin-top:2px">'+best+(best ? ', ' : '')+tries+when+'. '+
          '<span class="pill" style="margin-left:4px">'+(z.grasped ? 'WELL GRASPED' : 'REVISIT THESE IDEAS')+'</span></p></div>';
      }).join('')+
      (q.total > 8 ? '<p style="font-size:13.5px;color:#5C5444">Showing your 8 most recent of '+esc(String(q.total))+'.</p>' : '');
  }
  inner += '<p style="font-size:12.5px;line-height:1.5;color:#7A7058;margin-top:6px">Only you can see these results. They are not shared or ranked.</p>';
  return cardShell('Quizzes', 'My quiz results', inner, 'flex:1 1 100%;');
}
```

## B. In `renderMemberHolding()`, add the card after the membership and circles row. Change

```js
    '<section style="padding-top:18px"><div class="row">'+membershipCard()+myCirclesCard()+'</div></section>'+
```
to
```js
    '<section style="padding-top:18px"><div class="row">'+membershipCard()+myCirclesCard()+'</div></section>'+
    '<section style="padding-top:18px"><div class="row">'+quizCard()+'</div></section>'+
```

## C. In the message listener (`window.addEventListener('message', ...)`), change the dashboard line

```js
  if (d && d.type === 'dashboard' && d.dashboard && typeof d.dashboard === 'object') { state.dash = d.dashboard; render(); return; }
```
to
```js
  if (d && d.type === 'dashboard' && d.dashboard && typeof d.dashboard === 'object') {
    state.dash = d.dashboard; render();
    if (!state.quizAsked) { state.quizAsked = true; parentPost({ type: 'quiz-results-load' }); }
    return;
  }
  if (d && d.type === 'quiz-results') {
    state.quiz = d.failed ? { failed: true } : (d.results && typeof d.results === 'object' ? d.results : { failed: true });
    render(); return;
  }
```

## D. Nothing else. SHOW_MEMBER_LAYOUT stays false: the card belongs to renderMemberHolding, which members already see.
