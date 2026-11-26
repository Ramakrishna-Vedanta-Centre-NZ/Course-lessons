# Beginners (Conversational) Mind course: quizzes and handbooks, progress log

Last updated 27 Nov 2026.

| Module | Quizzes written and pushed | QuizRegistry rows | Handbook PDF built | Handbook on Wix Media | Lessons wired on Wix |
| --- | --- | --- | --- | --- | --- |
| 5 | CON-5-1 to CON-5-8 | yes | yes (31 pages, con-m5.pdf) | yes | 5.1 to 5.8 (quiz box, end block, handbook buttons) |
| 3 | CON-3-3 only | CON-3-3 | not yet (3.3 pilot handbook exists, 5 pages) | no | 3.3 wired for the quiz; no handbook button yet |
| 1, 2, 4 | not started | | | | |

Handbook Module 5 PDF on Wix Media: af2af0_352017327368422fb8fd1698e3b07fd3.pdf (https://8902ede3-28da-4abb-829e-7338609acebf.usrfiles.com/ugd/af2af0_352017327368422fb8fd1698e3b07fd3.pdf). Page ranges: cover 1, terms 2 to 7, then 3 pages per conversation from page 8.

Notes
- Module 5 lessons have no figures (images) on the live Wix lessons, although the handbook frames are titled after the figures in the Drive masters. Flag to Swamiji.
- Module colours bm1, bm2, bm4, bm5 added to hb.css as proposals (bm3 violet from the pilot). Awaiting review.
- Do not put an apostrophe or curly quote in ExecuteWixAPI code text without checking: one curly apostrophe was corrupted to "w" in 3.3 (fixed, rev 7).
- Staging a PDF for Wix import: push to Course-lessons under a folder not starting with underscore, import by URL with UploadImageToWixSite, then remove the folder.

## TO DO: upload the figures (added 27 Nov 2026 at Swamiji's request)
- Module 5 lessons (5.1 to 5.8) on Wix have NO figures, although the Drive masters contain them. The handbook figure frames refer to those figures.
- Audit every Beginners lesson on Wix (1.1 to 5.8) against its Drive master: list figures in the master, list IMAGE nodes on Wix, upload and place any that are missing (with alt text and captions as done for 3.3).
- Cause not yet established: the Module 5 Wix lessons appear to have been published from text only. To be checked, not assumed.
- Only 3.3 has had a figure audit so far. Inserting images must not disturb the "Along with this lesson" box or the end quiz block.

## TO DO: upload missing figures (noted 27 Nov 2026, at Swamiji's request)
- Course-wide audit needed: compare every Beginners lesson on Wix (all 36) with its Drive master and list lessons whose figures (images) are missing on Wix.
- Known so far: the Module 5 lessons (5.1 to 5.8) have NO figures on live Wix, though the Drive masters have them. Module 3.3 figures were checked and are fine. Modules 1 to 4 not yet audited (some of Module 1 are known to carry images).
- The Module handbooks have figure frames that refer to these figures, so the lessons and handbooks should match.
- Method: upload each figure to Wix Media, then insert an IMAGE node at the right place in the lesson (Ricos), with alt text and caption as done for 3.3. Check each lesson afterwards. Republishing a lesson from Markdown wipes the quiz and handbook boxes, so insert images by PATCH and not by republishing.
- Advanced and Parents courses: also check for missing figures.

## Module 4 (27 Nov 2026): DONE on Wix
- Quizzes CON-4-1 to CON-4-7 pushed, registry rows added, click-tested (900 and 390 px).
- Module 4 handbook: 28 pages (cover 1, terms 2 to 7, then 3 pages per conversation: 4.1 pp. 8-10, 4.2 11-13, 4.3 14-16, 4.4 17-19, 4.5 20-22, 4.6 23-25, 4.7 26-28). Wix media ID af2af0_0d7128cbdba843ddb569d024a664017e.pdf. Palette bm4 (rust) is a proposal awaiting review. Specs in hbkit/lessons/m4_specs.py.
- Lessons 4.1 to 4.7 wired (4 buttons each, read back). Beginners step IDs: 4.2 is f94eaec1-8304-41bd-a08f-f8cdfddbcddf (an earlier note had a typo). Always GET before PATCH.
- Quizzes for Modules 1 to 4 were written from key ideas, practical situations and part headings, not the full lesson text: the reviewer must check against the full text.
- Figures: 4.1, 4.6 and 4.7 have no images on Wix (4.2 to 4.5 have 3 each); check against the Drive masters (see the figures to-do).

## Module 3 (27 Nov 2026): DONE on Wix
- Quizzes CON-3-1, 3-2, 3-4 to 3-8 added (3.3 was the pilot); pushed, click-tested, registry rows added.
- Module 3 handbook rebuilt with all 8 lessons (31 pages: cover 1, terms 2 to 7, then 3 pages each: 3.1 pp. 8-10 ... 3.8 pp. 29-31; 3.3 on pp. 14-16). Wix media ID af2af0_0fbee8be35684465a93cbf115a9fc83e.pdf. Specs in hbkit/lessons/m3_specs.py (3.3 spec is C3_3.py). Cover palette is the module 3 one used by the builder; the review items on the 3.3 pilot (byline, fictional scene, palette) still stand and now apply to every handbook.
- Lessons 3.1 to 3.8 wired (4 buttons each, read back). 3.3 kept its quiz box and gained the handbook button and paragraph.
- Figures on Wix: 3.1 has 4 images, 3.2 3, 3.3 3, 3.4 3, 3.5 4, 3.6 4, 3.7 3, 3.8 3.

## Layout change to the handbooks (27 Nov 2026, after Swamiji's phone check)
- Terms pages were half empty and split a conversation across pages. Now each conversation's terms stay together and two conversations fill a page: 4 terms pages (pp. 2 to 5), lessons start on p. 6, three pages each.
- Rebuilt and re-uploaded Modules 2 to 5; lesson page ranges and download links updated in all 30 lessons (M2 2.1 pp. 6-8 ... 2.7 pp. 24-26; M3 3.1 pp. 6-8 ... 3.8 pp. 27-29; M4 4.1 pp. 6-8 ... 4.7 pp. 24-26; M5 5.1 pp. 6-8 ... 5.8 pp. 27-29).
- Current Wix media IDs: M2 af2af0_fe374364bd8447b4808a340db30c9e06.pdf, M3 af2af0_8003eae9e05a4c4f9c0213c7b8e12a46.pdf, M4 af2af0_53b12e844b404c31939f58c714eda2c2.pdf, M5 af2af0_db71e64e0eb3404098c527da837e3efe.pdf. Older uploads of the same handbooks remain in the Media Manager and can be deleted by hand.
- Box display fixes on the phone: handbook button label shortened to "Download the handbook (PDF)" (it was cut off), and box text set to black like the rest of the lesson.
- Modules 1 and 2 lessons have no "For the curious" section: the end block is appended after the Key ideas list; the top box goes before the first non-empty heading.
- Figures: 2.1 3, 2.2 2, 2.3 3, 2.4 3, 2.5 3, 2.6 0, 2.7 0 images on Wix (check masters).
