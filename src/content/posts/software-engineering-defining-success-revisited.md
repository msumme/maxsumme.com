---
title: "Software Engineering: Defining Success, Revisited"
pubDate: "2023-11-30"
updatedDate: "2023-12-05"
draft: false
wpId: 283
---

Success in Software Engineering means doing things that help increase sales or retention in the case where the product is being created, or help improve some part of the pipeline when software is meant to support business operations.

How then, do we measure success?

In the case of supporting the business, it would be by looking at the overall improvement in flow through the system (i.e. how much can the business create and sell?).

In the case of creating the product, the same is true, but it's more focused on sales increase or customer retention.

Flat sales or declining sales means that the value created by software engineering is not sufficient to compete in the marketplace. Something is not working.

These are trailing indicators, and we also discussed leading indicators broadly.

But the leading indicators can vary widely across industries and companies and business models. Facebook, for example, uses time and attention metrics (which explains why it seems to want to drain the life out of us). Netflix may use hours watched. A budgeting app may use a metric about how many transactions are uncategorized or ignored.

These metrics are business and model specific indicators. But are there also broad metrics that tell you something about the ability of the software engineering organization in itself?

What metrics would be widely useful to track, to properly diagnose problems or simply find opportunities for further enhancements in company effectiveness?<sup><a href="#2384941d-0875-4750-981b-8168a42e72a0" id="2384941d-0875-4750-981b-8168a42e72a0-link">1</a></sup>

## Widely Applicable Metrics

Previously we identified small quick iterations as useful for verifying hypotheses and delivering value quickly (to increase rates of return).

Learning quickly and responsively making course corrections will powerfully affect your outcomes.

This, it turns out, is well-trodden territory.

In *Accelerate*, the authors put forward four metrics. They also make a strong case that these metrics correlate strongly with high-performing organizations with leading bottom-line performance.

These metrics are:

1.  \\
2.  Deployment frequency

3.  Lead time for changes

4.  Mean time to restore

5.  Change failure rate

These metrics are borrowed, with slight modification, from LEAN principles of manufacturing (a major inspiration for agile philosophy and methodologies).

Deployment frequency is actually an approximation of batch size. It's very hard to know how big a batch is in software, as each commit can have any number of changes, and complexity of changes is hard to measure from lines changed and other surface level metrics.

Lead Time for changes is how long it takes to go from code committed to code deployed. This ignores the highly variable product development lead times, as those have indeterminate length and are hard to compare (and additionally are a different bottleneck in the process that can be separately diagnosed).

Mean time to restore is how long before service is back to normal after an incident. In our fast-moving world, problems will happen. Acknowledging that, the next question is "How fast can we make a problem a non-problem?" This metric measures the impact to team (unplanned work) and customers (time with degraded or no service).

Change failure rate is how many deployments lead to failures in production. "Failure" must be defined, and a further breakdown into major/minor/etc may be useful in focusing efforts to improve.

### Why are these metrics good metrics?

Frequent small iterations are good (as we've established). Stability is also essential, as instability leads to a lot of issues internally and with customers.

Learn fast, break less and less over time, change rapidly (when needed).

The first two metrics are about changing quickly. The second two metrics are about stability of function.

Given that a software engineering org has a responsibility that *it alone possesses*, to maintain the ability to continue delivering software, these metrics are especially important in gauging this core competency.<sup><a href="#1b1e9e27-4325-4746-be9c-983f11101f2a" id="1b1e9e27-4325-4746-be9c-983f11101f2a-link">2</a></sup>

## Measuring Performance

If these are good metrics for measuring the core competency of software delivery, then we have a common baseline for looking at the health of Software Engineering teams (and organizations).

This doesn't tell us if rapid delivery is being well-directed to maximize learning and market opportunity (i.e. getting better and selling more).

Software engineering is just one competency of a business, and if it's an organization in the business, it also has to be good at existing in that context. But if the business is healthy, then a great software engineering organization will help it blow past the competition.

If the parts aren't working well together, then very little good will come out of being exceptional at software engineering.

However, it tends to be the case that companies that engage in transformational efforts in one department often find the rest of the culture begins to move in the same direction, and even better things start to happen.
