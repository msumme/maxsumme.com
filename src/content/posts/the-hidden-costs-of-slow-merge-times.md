---
title: "The Hidden Costs of Slow Merge Pipelines"
pubDate: "2024-02-21"
updatedDate: "2024-02-23"
draft: false
wpId: 342
---

The obvious costs of adding a lot of slow processes before merging to prevent Bad Things are generally known to everyone (typically it's e2e or system tests, but your flavor may be different):

1.  \\
2.  Slow merge times

3.  Developer frustration

4.  Large PRs + slow reviews

But there are some other costs that don't always get noticed.

1.  \\
2.  Fear of Mistakes

3.  Less Resilient Systems

4.  Longer Outages

5.  Lost Focus

6.  More Tech Debt

7.  Slowing Feature Delivery

Let's look into the way these happen.

### Fear of Mistakes

If your team believes that spending all this extra time to prevent Bad Things is valued by the company, what does that mean that we think the cost of Bad Things is? How should we position production problems in our minds?

As an organization **you are signaling that it is worth a lot of effort to prevent mistakes.**

So culturally, your people learn that the way to succeed there is to avoid mistakes. Prevention becomes the focus.

### Less Resilient Systems

If we focus on something, we are by definition not focusing on something else.

If we are focused on preventing mistakes, we are paying less attention to our story for dealing with mistakes.

And because we think mistakes are very bad, nobody wants to look like they're not taking this mistake very seriously, so you often end up with All Hands On Deck as an emergency response, which means your disruption disrupts more people.

By magnifying the avoidance, we have also somehow made the occurrence worse when it does happen. That reinforces the idea that mistakes need to be more strenuously avoided.

### Longer Outages

Because our slow pipelines are slow and we want to now be **extra sure not to break things further**, our response is often cumbersome.

Because we made the first mistake, we now don't trust ourselves not to make another.

So we test even more, and do extra manual steps to make extra sure we have not broken something in addition to what was originally broken.

Notice that we still haven't talked about building a resilient system where mistakes and outages are easily recoverable.

We are trying to fix problems and prevent problems, but never build something that allows for problems.

### Lost Focus

Because of the impact of incidents, the team is frequently pulled away from planned work.

This stressful situation as a regular occurrence has a refractory period, during which motivation for non-stress situations starts to wain. Non-emergency work is not nearly as interesting to our brains, so our focus naturally slows down.

And remember, it's slow to merge, so now we add multi-tasking so that we avoid the downtime that happens when waiting for our pipelines to tell us if we are good to go (and these pipelines run multiple times during a single pull request when changes are requested during reviews).

This means that every story will have to be re-contextualized. There's no way to quickly burn through a single thread of work except for making massive pull requests that take even longer to review and have more rounds of requested changes (and more possibility of merge conflicts and rework).

### More Tech Debt

Because merging is slow, we won't do single-line refactors or fix typos, except in the course of other changes.

Small changes cost too much to merge by themselves, especially if they'd be in an area we are about to work on more. So we make our MRs larger rather than pay this price.

We now get the experience that refactoring makes reviews slower. But we want to be productive, so we do fewer refactors. (Merge conflicts also happen more with long-lived refactor branches).

Additionally, since our focus is fractured by incidents and refractory periods after incidents, it's unlikely we are engaging deeply enough with our domain as often as we might, so that we often miss opportunities to improve our code.

So we don't do the little refactors or the big refactors. Small problems become entangled with more of the system, until its entanglements make it a big problem. Things are hard at this point to unstick.

### Slowing Feature Delivery

A team that never fixes its model in code to match the understanding of the domain that develops will have to constantly translate from what you discuss in conversations to what exists in the codebase. Features that are easy to describe seem hard to implement.

When the refactors don't happen, this doesn't get a lot better.

Eventually, these problems bubble up and become "Cleanup Tech Debt" initiatives, which either seem too expensive, or get partial traction until the team or management loses appetite for all this work which "adds no value".

It is very hard to justify 6 months "cleaning up tech debt" from a business point of view. The costs of the tech debt are usually hidden, and the cleanup benefits are usually hidden, but all the other costs are not.

Now cleaning up tech debt starts to occur to the team as impossible, and they don't really make an regular effort to do it in the course of their work.

## Building A Different Future

What changes all of this?

Simply speaking, it is to shift our focus.

If our problem was that we focus on preventing mistakes, what could we focus on instead?

Resilient systems allow for the reality of mistakes. We stop fighting mistakes, but instead start to tolerate their existence and *deal with them effectively.*

If you admit your system will have to handle a hurricane, you'll have data center redundancy.

If you admit your system is built by people (or worse, AI) you'll have to accept that bugs will get into production eventually, and work out ways to limit impact and recover quickly.

Our desire to prevent all danger usually has undesired secondary effects, that often lead to more danger but of a different sort.

Would you rather avoid all pathogens, or strengthen your immune system? If you keep your immune system weak, the eventual pathogen is devastating.

The same is true in our systems. Avoidance can only do so much.

Netflix's Chaos Monkey is a great re-envisioning of how to think about your systems design.

By embracing chaos, they create systems that are strengthened by adversity. When they can't handle something that happens from their automated chaos, they know what problem they need to address.

Adversity makes those systems stronger.

### Train for harder circumstances than you face

Increase the difficulty of your operations so that you are training to handle harder and harder situations.

Your merge pipeline does not need to prevent every bad thing. The bad things can happen, and then you can deal with them effectively with minimal impact to your customers and your business.

This change of focus from prevention to resiliency allows you to focus on speed and agility rather than creating a system that is fragile and leads to further fragility, which is slow and leads to further slowness.

### Fear or Power? What is your team's experience of their work?

What could change for your team if you weren't operating out of fear of mistakes, but rather building power to handle them?

What if the team knows it has everything it needs to deal with whatever happens, and focuses on building what's needed to avoid disasters and handle unplanned issues?

What would that look like?
