# My Journey page code: two additions (27 Nov 2026)

Page code = the code tab of the My Journey page (the file LIVE-2026-11-08-page-code-o93cs.js). Make exactly two additions. Nothing else changes.

## 1. Add one import line, directly under the line `import { sendReply, ... } from 'backend/swamijiReplies.web';`

```js
import { getMyQuizResults } from 'backend/quizResults.web';
```

## 2. Inside `html.onMessage(async (event) => { ... })`, add this branch directly before the branch `} else if (data.type === 'scrollTop') {`

```js
 } else if (data.type === 'quiz-results-load') {
 // The signed-in member's own quiz summary. The backend looks it up by the login, never by anything sent from the page.
 try {
 const results = await getMyQuizResults();
 html.postMessage({ type: 'quiz-results', results: results });
 } catch (error) {
 console.error('My Journey: could not read the quiz results', error);
 html.postMessage({ type: 'quiz-results', failed: true });
 }
```
