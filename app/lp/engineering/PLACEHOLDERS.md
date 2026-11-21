# /lp/engineering: placeholders and items to verify

Every unverified item on the page is wrapped in `<Placeholder>` (`[PLACEHOLDER: …]`)
or `<Verify>` (`[VERIFY: …]`) from `Placeholder.tsx`. They show as yellow tags in
development (`npm run dev`) and render nothing, or the neutral fallback listed
below, in production.

To resolve an item, put the real value in `campaign.ts` (or the page copy), then
remove the tag and its row here.

## Placeholders (`[PLACEHOLDER: …]`)

| # | Where | What is needed | Shown in production |
|---|-------|----------------|---------------------|
| P1 | Hero trust line; footer | PEI registration period (EduTrust/PEI validity dates) | Hidden. Name and reg no still show. |
| P2 | Hero image caption | Real student in site PPE (helmet and vest) in class, smiling, with notes. WebP, under 150 KB, with written consent. Alt: "Edusphere engineering student studying on a weekend class at Beach Road campus". The current image is a stock-style photo of engineers in suits. | Hidden. Current photo shows, with honest alt text. |
| P3 | "Small time. Big step." | Photo of a real weekend class in session. Alt: "Weekend part-time class at Edusphere College". | Block hidden. |
| P4 | Course cards: "Max time to finish"; course facts | Maximum candidature per course, and what happens if a student needs longer (recourse) | Card row hidden. Facts row says "Ask a counsellor". |
| P5 | Course facts: "Min. class size" | Minimum class size per course | "Ask a counsellor" |
| P6 | Course facts: "If the class does not start"; FAQ 8 | Backup plan, waiting period and refund if a class does not start | "Ask a counsellor" / "Please ask a counsellor on WhatsApp." |
| P7 | Course facts; FAQ 9; footer | Course developer and country. The awarding body is already confirmed from the course pages (see Resolved). | Hidden |
| P8 | Course fee card; Fees section | Registration fee (S$109) refunded if the class does not start? The course pages currently say "Non-Refundable". | Hidden. "S$109" still shows. |
| P9 | "What can this diploma do": path step 3 | Next level after an Advanced Diploma | Hidden. The path shows Diploma → Advanced Diploma. |
| P10 | "What can this diploma do": stats | Number of graduates; % now in a higher role (real data and consent only) | Block hidden |
| P11 | Proof: testimonials ×3 | Name, job before → after, 1:1 headshot under 40 KB, quote, written consent | Block hidden |
| P12 | Proof: lecturer row | Lecturer names, photos, qualifications, years in industry | Block hidden |
| P13 | FAQ 5 | Make-up class policy (what if I miss a class?) | "Please ask a counsellor on WhatsApp." |
| P14 | FAQ 6 | English support answer. Could mention the DCE module "Engineering English & Communication". | "Please ask a counsellor on WhatsApp." |
| P15 | `campaign.ts` → `REGISTRATION_OFFER.endsOn` | If the S$109 waiver continues: a fixed end date and intake. It is `null` now, so no offer shows. | Hidden while `null`. It hides itself after the date. |

## To verify (`[VERIFY: …]`)

| # | Where | Question | Current source |
|---|-------|----------|----------------|
| V1 | Hero callout; "Is this for you?" card 3; entry block option 2; course entry lists; FAQ 1 | **Mature-entry rule per course.** The brief says "30+ with 8 years of work, no certificate" for all courses. The live course pages say otherwise (see the table below). The page follows the course pages. | Course pages |
| V2 | Entry block option 1 | The brief says "…or any secondary school certificate". The DCE/DME pages say "3 GCE 'O' levels or International Secondary, including English and any 2 science subjects". The page says "…or a similar school certificate. It should include English and 2 science subjects." | Course pages + `campaign.ts` |
| V3 | Entry note | "Minimum age: 16 to 21, depends on the course. Advanced Diplomas need a diploma first." | Ages from `campaign.ts` |
| V4 | "Small time" block 1; course facts "Each week"; FAQ 4 | Lesson length per course. 8-month courses say "4 hours a week, one day only". ADPC says "about 4 hours a week" (186 h over 12 months). | Course pages say "Weekend: (4 Hours per week)" |
| V5 | "Is this for you?" card 2; FAQ 2 and 3 | FDW / Work Permit wording reviewed (no promise of a job, sector or pass change; agree the rest day with the employer) | Brief |
| V6 | Course details title | Course titles match the CPE-permitted titles | `campaign.ts` |

### Mature entry as published on the course pages

| Course | Academic route | Mature route | No certificate? |
|--------|----------------|--------------|-----------------|
| DCE | 3 'O' levels incl. English + 2 sciences | 30+ with 8 yrs work **and another relevant certificate** | No |
| DME | 3 'O' levels incl. English + 2 sciences | 30+ with 8 yrs work **and another relevant certificate** | No |
| ADME | Local diploma / 3 'A' levels / equivalent | Relevant certificate + 3 yrs relevant work | No |
| ADPC | Local diploma / 3 'A' levels / equivalent | 30+ with 8 yrs work, **or** 30+ with 3 yrs + relevant qualifications (case by case) | Yes |

If admissions approve "no certificate" for more courses, set
`entry.matureNoCertificate: true` (and update `entry.mature`) for those courses
in `campaign.ts`. The hero callout, entry block, FAQ and meta description then
update on their own. The meta description only adds "SSC/SPM or 30+ with 8 years'
work can apply" once all four courses allow it.

## Not shown until verified

- "Most popular" badge on DCE: not added (no data).
- Course images: the BIM screen (DCE), M&E panel (DME), supervisor on site (ADME) and planning board (ADPC) shots are still to come. The existing course images are used as WebP.

## Resolved from existing sources

- **Awarding body:** each course page states "'<course>' will be awarded by Edusphere College of Management and Technology Pte Ltd" (Singapore). The page shows this.
- **Delivery mode:** "Classroom – Face to Face & Practical classes" (course pages), shown as "In class at Beach Road".
- **Intake dates:** read from `app/data/batchschedule.ts`, not copied.

## Outside the codebase

- **GTM (GTM-MFXJHXRD):** add triggers for the new events `lp_form_open`, `lp_form_step`, `generate_lead` and `whatsapp_click`. The old ones (`lp_modal_open`, `lp_form_step_complete`, `lp_lead_submit`, `lp_whatsapp_click`, `lp_cta_click`, `lp_course_select`) are no longer sent. Exclude `generate_lead` events with `test_lead: true` from Meta/TikTok conversion tags.
- **TikTok and Meta pixels** are loaded by GTM, not by the codebase. To stop them blocking the main thread, change their triggers to "Window Loaded" (or a first-interaction trigger) in GTM.
- **http → https:** `curl -I http://edusphere.edu.sg/lp/engineering/` returned `308 → https://edusphere.edu.sg/lp/engineering/` on 21 Nov 2026 (Vercel). No 500 was seen.
