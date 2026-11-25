---
title: "Is fear of past mistakes killing progress?"
pubDate: "2024-01-11"
updatedDate: "2024-01-12"
draft: false
wpId: 312
---

Mature software projects often carry a lot of baggage.

Everything that we do to *keep bad things from ever happening again* starts to add up.

And unfortunately, we often don't fix the underlying issues in the domain model or the architecture that would immediately improve the stability of the application and prevent entire classes of mistakes from even being possible.

One of the worst offenders in terms of past bagged is end-to-end tests (e2e tests). I'm sure that there *are some cases where they're really and truly necessary*. But in every experience I've had, where I come to understand the software I'm writing well, I've found a simpler faster test could be better.

Why don't teams ditch e2e tests? What's the fear?

Ask this question, and you get vague notions of "Something Really Bad Could Happen," "We wouldn't feel comfortable shipping releases without them," and of course, "That would be irresponsible."

Nobody wants to be the one who let the Big Bad Thing in the door.

But let's look at it from the opposite angle for a minute.

**If I told you that I could avoid having 12 outages a year that could be resolved in under 30 minutes with minimal customer impact, but it would require you paying 5-10x as much to develop each feature, what would you say?**

If you're not insane, you would probably take the outages in exchange for delivering more features.

**Delivery speed and volume is a feature**. (As mentioned in the past, even if you don't know what to build, the faster feedback loops help you figure that out).

But most companies take the path of sacrificing speed and agility for the illusion of safety. They want to prevent mistakes from happening, rather than becoming resilient.

Because of that, they move at a glacial pace.

Why do companies take this Faustian bargain?

## Fear of Bad Things

Under the surface of most of the reasons people give is really just fear.

It's usually fear about who is going to get blamed. *What will happen to me, if I let something terrible happen in production? What will my reputation be if I introduce a bug?*

Who's going to be the one to argue against the big safe tests?

As the saying goes, nobody gets fired for choosing IBM (as in, making the seemingly safe choice, despite whatever hidden costs there may be, or if it's actually worth it).

**You can't serve someone else if you're mostly worried about your own skin.**

So what should you do?

## Avoid Disaster; Continuously Improve

In any domain there is some set of outcomes that would spell ***disaster***.

Avoid disasters.

Beyond that, figure out the costs and benefits. What tests give you the most bang for your buck? What changes could you make that would both remove defects (or possibilities of future defects) while improving lead times?

**Delivery Speed is a killer feature.** If I can get my code in production in 5 minutes, and it takes you a week, I have a massive advantage over your business.

(Also, **most difficulties in writing fast tests point to a poorly designed software architecture*.***)

Not all problems are worth the same level of prevention. You don't build Fort Knox to keep someone from stepping on your daisies.

Instead of preventing all problems, improve your response times by making your deployment pipeline faster. In other words, **make it cheaper when you make a mistake.**

## Don't let the past dictate your future

Modern life is full of regulations. All of them had some purpose in the past, to prevent some actual bad thing that likely happened.

When they pile up, they start to become baggage that prevents new possibilities from emerging.

Tests are like that too. They can both slow things down (when they're slow and flaky), as well as become another source of work preventing change (when they're buggy or at the wrong level of abstraction).

You want and you need automated testing, because unplanned work can kill your team's outputs.

But you also want and need velocity. Deal with the past so that it stops moving forward with you. Pay down some technical debt. Create space for a future.

Over time, you will find that you can both avoid most errors, ship fast, and also recover quickly when something gets through.

A certain level of courage will be required.

But I know that you can handle a few mistakes along the way.
