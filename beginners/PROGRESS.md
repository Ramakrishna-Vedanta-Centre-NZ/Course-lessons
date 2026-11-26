# Beginners (Conversational) Mind course: quizzes and handbooks, progress log

Last updated 27 Nov 2026 (afternoon).

## Status
- Quizzes CON-N-K: written for all 36 lessons (10 questions each, "well grasped" at 70 percent), pushed to the repo (tools/src/cN_K.py). Module 5 quizzes 5.1 to 5.8 and 3.3 checked against full lesson text (see below). Quiz Hub phone test passed (Swamiji, 27 Nov).
- Handbooks: one per module, Standard Handbook Guidelines v1.2, uploaded as PDF to Wix Media and linked from every lesson button.
- Lesson titles: all 36 aligned to the advanced form. Figures: missing figures uploaded, every figure has alt text and a caption. New figure Diagram_1_6_2_Five_Modules.png in 1.6.
- Old handbook uploads moved to the Media Manager trash (recoverable).

## Current handbook files on Wix Media (https://8902ede3-28da-4abb-829e-7338609acebf.usrfiles.com/ugd/<id>.pdf)
- M1 af2af0_27fcc9e541de4f039298d9d603e9c716 (v4, 21 pp, after the 1.1/1.6 revision)
- M2 af2af0_aea4b2bfe2744f55a76a22d445b0b7cc
- M3 af2af0_c16cbe8d4c394c62b966d4984882d451
- M4 af2af0_c53a6c22aa274c54a1b62be5d2eb7e1d
- M5 af2af0_073fe1fa302c463cbe3f135406827af6
Trashed: af2af0_bf88, 8003, fe37, db71, 53b1, fcb5, 0fbe, 0d71, 3520, old M1 2ab0f81c, and the earlier M5 3520173...

## Body and mind comparison (27 Nov)
One purpose only: modern education makes us literate about the physical body, but not about the mind that we use from birth to death; that is the reason for the course. Not extended to illness, prevention or a health model. Revised in lessons 1.1, 1.6, 2.1, 2.7, quizzes c1_1 and c1_6, and the M1 handbook. Dr Watson's clinical wording in Modules 3 and 4 left unchanged (flag to Swamiji).

## Module 5 quiz full-text check (27 Nov)
Compared against the live Beginners lessons (program e40d25ac). 5.1, 5.3, 5.4 read in full against the quiz questions: scenes, pictures and terms match (e.g. 5.4 spoonful and bucket, riverbed, reins, sole doer; 5.3 seedling, two notes, screen, mauna, obstacles). 5.5 and 5.8 checked by vocabulary: no quiz term missing from the lesson except common English words. 5.2, 5.5, 5.6, 5.7, 5.8 then checked line by line against the live lessons the same afternoon: every scene, picture and claim in the quiz questions and explanations is in the lesson. One change: CON-5-8 judge item on the cave softened to what the lesson says (commit 6a5e169). Other quizzes unchanged. Lesson 3.3 quiz written from full text earlier; no rework.

## My Journey (Wix editor)
Backend quizResults.web.js, page code (o93cs) and embed changes PUBLISHED LIVE by Swamiji's instruction on 27 Nov 2026 (about 12:10 NZ). Still needs a member test (Test Site, with a CON result), a second-member privacy check, and Swamiji's decision to publish. Files: wix-code/my-journey-quiz-results/. Drive backups: folder "Wix code - My Journey".

## Open items
- Mobile lesson title spacing: FIXED 27 Nov 2026 (about 12:35 NZ) by Swamiji's instruction. Cause: the Wix participant page set the lesson title (H3, mobile) to a fixed 40px line height. Fix: site-wide Custom Code snippet "Mobile lesson title line height" (Wix dashboard, Settings, Custom Code; head, all pages, essential): <style>@media (max-width: 750px){[class*="--mobile"][class*="type-7-article"] h3{line-height:1.35 !important;}}</style>. Tested live at phone width: title line height 24.3px (was 40px). Applies to all programmes. To undo: delete or switch off that snippet. Selector relies on Wix class name parts "--mobile" and "type-7-article"; recheck if Wix changes the participant page.
- Confirmed by Swamiji 27 Nov: the 4.2 to 4.4 title wording and Dr Watson's clinical wording stand as they are.
- Flag to Swamiji (earlier): 4.3 and 4.4 "RWF" title wording; 4.2 "Guṇas" wording; handbook scenes are fictional; module palettes bm1 to bm5 and the 3.3 handbook review items apply to all handbooks; module quizzes and capstone deferred; Desktop file m1to4_digest.txt moved to Desktop/_to_delete (Swamiji can delete the folder); propose_skills card awaiting him.
- Optional later: audit Advanced and Parents lessons' figures; check the Drive master and Advanced 1.1 for the same body-comparison stretch.

## Method notes
- Always GET the step before PATCH and read back after. Text in a paragraph is split in several TEXT nodes, so edit per node and verify; marker-range replacement fails when the end marker is in another node.
- Do not put a curly apostrophe in ExecuteWixAPI code text without checking.
- Staging a PDF for Wix import: push to the repo under a folder not starting with underscore, import by URL, then git rm.
- Republishing a lesson from Markdown wipes the quiz and handbook boxes; always PATCH.
- Rules: word is "quiz"; no em or en dashes in prose; quote only the three Centre books; "contemplative tradition(s)"; never invent sources.
