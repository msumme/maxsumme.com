---
title: "Software Engineering: Developing Products"
pubDate: "2023-11-25"
updatedDate: "2023-11-29"
draft: false
wpId: 261
---

In the last article, we looked briefly at software engineering that support business functions but does not create products.

We noted that they need to be experimental, work in small batches (short iterations) and are ultimately learning enterprises. We noted that the software engineers must be able to measure and observe that their work is having an intended effect.

And we noted that the businesses the software organizations are in must be similar in order for it to all work well together.

What then, is the difference between a supporting software organization and one that creates products?

## The Value Stream for Product Development

Where does the software engineering fit in the value pipeline?

There is an obvious application of the principles of the Goal to the software engineering process itself, considered as its own system. This is considering throughput as the release of features, work in progress (unreleased features) as inventory, and the costs as the costs of engineering.

While there is great value in that kind of thinking, it does not properly contextualize software engineering in a business which needs to make money, and so it is not complete.

This is where things get difficult. Software, the product, is not produced in the same way as other kinds of goods are manufactured.

The manufacturing process for a copy of a software program is copying bits and sending them over a wire, or putting them onto some medium. This process is generally not very interesting. Frequently the next copy costs very little, and the next customer acquired (other than the acquisition costs) costs little to add to a running system.

So if the sale of the software does not require any real manufacturing, since the software does not need to be rewritten by software engineers every time it is sold (whereas each custom hubcap is its own product, and if it is not manufactured, it cannot be sold), what exactly do software engineers do?

## Supporting the Value Stream

It turns out that software engineers, even in the context of a company that makes a software product, do not sit directly in the middle of the value stream that produces the money. They are orthogonal to it. They have a large impact on it but usually the result of their efforts are not immediately tied to dollars in (with the exception of companies that charge *for the software development itself* as consultants).

It turns out that software as product, compared to software as business support, is very similar.

The main difference is who the end user of the software is, and how the effect on the rest of the value pipeline is measured (i.e. the one in which dollars are flowing).

## Measuring Impact

What exactly needs to be measured?

Since the customers of the software company are also the users of the software, and they are ultimately the exit points of the money-in to become money-out, it would be logical to assume that what needs to be measured is the increase in sales, year over year, and the retention rates of existing customers.

While these are primary goals, they are also trailing indicators. By the time customers have moved on or sales have declined, it is too late to retain those customers or make those sales.

What would be leading indicators? Every software company has its own, but they all center around what customers need the product for, and how the company can continue improving the product and attracting new customers. (At least, they ought to, but in practice a lot of activity in software engineering organizations seems to *just be for the sake of change*. See Slack, for example, which I hear constant complaints about on every new release).

## Not that different yet very different

It turns out that these things are not that different than working with internal customers (i.e. other business units) except for the scale and remoteness. More programmatic data collection methods are used to get usage data and collect errors, and building relationships with customers is not always straightforward or easy.

There are slews of 3rd party applications to collect this kind of data, and many businesses whose business is helping other businesses learn about their customers.

All of this data can be useful, but ultimately misses the point if nobody actually talks to actual customers and finds out what they really need.

As this becomes extremely complex, and guessing what would make the most impact becomes harder, it lends itself to specialization.

This is where we find the role of "Product Management" - people whose job it is to figure out what to build next that might make the difference to our value pipeline.

## What Product Does

Product Management focuses on determining what the engineers should be building.

This role exists already in software engineering if it's being done right. As mentioned in a <a href="/2023/11/22/exploring-successful-software-organizations-supporting-business-functions/" data-type="post" data-id="256">previous post</a>, engineers need to thoroughly understand the business and the users of their software to do their job right. They must have some ideas of what requirements are there and what could help.

Having dedicated "Product Managers" in most companies is a two-edged sword.

On the one hand, the additional engagement with customers and analysis can truly helpful in making a real impact.

On the other hand a separate hierarchy is usually set up that reports parallel to, but separate from, the software engineering organization. Different incentives emerge, and success is not measured in the same way across both organizations.

### Where the breakdown happens

Career advancement for product often means getting ambitious projects shipped.

Where the breakdown happens is when Product has a different set of incentives than Engineering. Engineering is responsible for *the ongoing ability to deliver and stability* as well as the features being delivered.

Product is not responsible for stability. They are responsible for initiatives. After all the fanfare happens, engineers are held responsible for outages, and slow velocity moving forward.

As the classic agile fable goes, when the chicken and the pig start a breakfast restaurant, the chicken is only involved, while the pig is committed.

Software engineering teams are committed to the code they produce, while product is only involved.

Because the product department is not accountable to the same metrics, technical debt that results in immediate delivery is translated to career advancement for them, and a slow down for the engineers in the form of bad code and more production incidents (i.e. unplanned work).

This does begin affecting the product owner eventually, if they are around long enough, and then product and engineering start discussing "paying off tech debt". There is usually a limited appetite, and business as usual happens shortly after, and the next feature becomes the number one priority.

### What could work...

What could work, long-term, is engineering committed to delivering on time and at a high quality. That does not accept the supposed conflict between quality and velocity. (There really is none, if your horizon is even a month or two).

But what about an organizational structure that correctly aligns incentives of people with what makes sense for the business?

This kind of radical change is unlikely to happen in already established companies because most leaders are fearful of making the changes needed, because so many key people would not like it.

If that is impossible, what would be second best?

Engineering leaders need to provide a better menu of options. Instead of irresponsible short-cuts, provide ways to solve problems creatively, or deliver the most essential parts of the solution quickly.

Instead of "It will take 2 months, but if we do this quick workaround, we could ship in 2 weeks, but we would need to then spend 8 weeks following up", it could be "We can ship this sub-feature in 2 weeks, and follow up with the subsequent deliverables in each of the following 6 weeks"

In an organization that could actually follow through on its commitments to cleaning up (this is rarer than you think) short-cuts and tech debt could actually make sense. But frequently the interest is paid 10x over before the principal is touched, and sometimes it becomes so expensive that projects start acquiring the label of "legacy code", which is product-engineering-speak for "We give up on it".

Engineering has to own quality, stability, and the continued ability to deliver further features. Nobody else can do that.
