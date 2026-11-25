---
title: "Effectiveness: What can you measure?"
pubDate: "2024-02-28"
updatedDate: "2024-02-28"
draft: false
wpId: 350
---

It is sometimes difficult to directly measure, in the context of a single business, if something you are doing is working well or not working. The impact often is downstream, and hard to isolate from all the other changes and activities going on.

Fortunately, there is research that supports **predictive correlations** between upstream changes *that are hard to measure* and downstream effects that *are directly measurable*.

*[Accelerate](https://www.amazon.com/Accelerate-Software-Performing-Technology-Organizations-ebook/dp/B07B9F83WM)* lays out these relationships, which are based on multiple years of experience.

This [excellent summary chart](https://medium.com/@steve.alves2/accelerate-book-cheatsheet-d065e482f8a0) (shown again here) lays out the predictive relationships that were uncovered by the research.

<figure class="wp-block-image size-large is-resized">
<img src="/images/uploads/2024/02/1_HMTqNGQVKNxV9iTk3OKmCA-810x1024.webp" class="wp-image-351" style="width:789px;height:auto" />
</figure>

### Understanding The Diagram

Each **box** in this diagram is a **construct**, which means a phenomenon that is hard to measure directly. However, constructs can be measured by measuring parts that we believe make up the construct. (Here's a [relatively simple primer on constructs](https://gradcoach.com/research-constructs/).)

The constructs were shown to be reliable and valid, in that survey respondents understood survey items similarly, and that the survey items correlated with one another in cluster analysis, and that they were not unintentionally related to some other construct. (Interestingly, Change Failure Rate did not cluster with Lead Time, Deployment Frequency, or Mean Time To Restore, so it was left out of the construct `Software Delivery Performance`).

**Arrows** in this diagram indicate a **predictive correlative relationship.** For example, `Westrum Organizational Performance` is predictively correlated with both `Software Delivery Performance` and `Organizational Performance`.

## Okay, so what does this tell us?

There is a **clear predictive relationship** between `Continuous Delivery` -\> `Culture` -\> `Software Delivery Performance` -\> `Organizational Performance`.

Therefore, if we **do not have good software delivery performance**, our culture is likely not optimal for organizational performance.

**`Software Delivery Performance`, which is easy to measure, can be a proxy to see what is working upstream** in our diagram of relationships.

**By focusing on improving `Software Delivery Performance` we can impact the entire organization.**

And also, *even if we do not affect anything upstream*, `Software Delivery Performance` still predicts `Organizational Performance`.

That means that we know what to measure that has an extremely high likelihood of impact, and everything else can be monitored as lagging indicators to ensure that we are having the impact we think we are having.
