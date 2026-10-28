# Practice page template (all lessons)

Each Practice page is a branded header followed by one framed block per part. Every part has its own colour so that parts read as separate activities.

| Part | Colour | Band | Use |
|---|---|---|---|
| I | Teal #0E7A8A | white text | Explore or strike (not scored) |
| II | Navy #12285A, gold text | gold tag | Scored questions (first pick counts) |
| III | Green #2F6B3A | white text | Third activity |
| IV | Plum #7A2A5E | white text | Fourth activity |

Skeleton (CSS classes `.part`, `.part-1` to `.part-4`, `.part-band`, `.part-num`, `.part-body` are in practice-3-3.html):

```html
<section id="s3" class="part part-3">
  <div class="part-band"><span class="part-num">Part III</span><h2>Title of the part</h2><span class="tag">Practice: not scored</span></div>
  <div class="part-body"> ...panel(s)... </div>
</section>
```

Rules: tag reads "Practice: not scored" or "Scored: first pick counts"; at most one scored part per page unless the lesson needs more (each scored part then sends its own result); the header note names which parts are scored; the nav under the header lists the parts in order.
