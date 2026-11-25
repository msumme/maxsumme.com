---
title: "Pair-Programming and Code Review Bottlenecks"
pubDate: "2023-12-29"
updatedDate: "2023-12-29"
draft: false
wpId: 304
---

I recently realized why pair programming is so effective at shipping code quickly.

It seems odd that having two programmers write the same code at the same time would result in increased output versus having them both work on their own code.

There are several different lenses to look at this through, and all add something to the story, but the one I want to focus on is: **Code Review as Bottleneck.**

Almost everywhere past very small organizations, code review is mandatory before shipping to production. In many cases, this review happens after the code is written, causing code reviews to be an occasion for queues to form.

Every back and forth in this process of review / asking for changes / re-review adds additional queue time. The review is not seen immediately, and the programmer is usually finishing another task. The re-review sits around for a few hours. And so on and so on.

Pair programming takes this queue time and completely eliminates it. All code that was written was reviewed. So as soon as it is considered written, and both programmers agree to ship it, it is shippable as soon as it passes CI/CD. There is zero queuing.

If you can imagine the time it takes for two programmers, working independently, and reviewing each other's code, it would look something like this:

## A Comparison

<div class="wp-block-columns">

<div class="wp-block-column">

### Normal Coding

Day 1:

Programmer A starts PR 1. It takes him until lunch, when he requests a review from Programmer B.

Programmer B is still heads down on his own difficult thing, and doesn't see the request until 2pm. He makes a quick review, and then gets back to his work.

Programmer A quickly turns around the changes, and requests another review. Programmer B is still heads down and doesn't see it.

Day 2:

Programmer B starts the day trying to finish his PR. When Programmer A brings it up in standup, he says okay. He now notices a major design flaw and asks for changes.

Around lunch, he finishes his own PR and asks for review. Programmer A is now heads down on reworking his whole MR and misses the request until mid-day.

Programmer A, around 4pm, finally reviews part of it, but says it's too hard to understand and he needs fresh eyes. He'll finish in the morning. Meanwhile, he needs a review of his own PR.

Day 3:

Programmer B approves Programmer A's PR, but Programmer A is now onto another story. Programmer B needs a review, and starts bugging Programmer A, who finally gets around to it at 10am.

Programmer A is still quite confused by everything, and makes some more comments, then comes back at noon and tries again.

Programmer B is responding to everything, but not getting approval. He's getting frustrated, but waits. Programmer A is back to his own work for the time being because he can't quite make up his mind.

Around 3pm, Programmer B bugs programmer A again and they make a plan to zoom. They zoom, and after a few hours, Programmer B has real feedback, and needs to make some changes.

Day 4:

Programmer B made the changes, and Programmer A also needs another review. Programmer B gets his review, and it's approved.

They decide they need to bring up slow review times in their next retro.

</div>

<div class="wp-block-column">

## Pairing

Day 1:

Both programmers start PR 1 together. The work until lunch. They re-review after lunch, and finish a few more small refactors.

They pick up the second ticket, and get to work. This one is a doozy. They discuss all the tricky parts, and they realize it would be easier if they did some refactoring first to the model.

They do that refactoring, and push it up.

Day 2:

They resume, having gotten the design more or less right, and by lunch, they have agreed on the rest of the approach, and are almost done.

They resume after lunch, and merge it.

They pick up the next story. It turns out, it's not that hard, but they decide to talk through it before beginning, and they agree on the plan.

They push up a few refactors.

Day 3: They wrap up their work on the third ticket, and they continue with the next thing, as usual.

There's no real angst between them, because they're not waiting around on each other, or feeling distracted from their work by the need to review. They're just reviewing as they go, so it's all just part of the work.

</div>

</div>

### Is this just a fantasy?

If you've never paired, you may think I'm making this up. And of course, it's an oversimplification.

But in reality, I have had pairing work so well that we cleared what seemed like it was going to take a week or two of work in a few days because working together created new insights that cut through the work like a hot knife through butter.

It's really because all of the discussions about design are happening before you waste the time coding, and all the review is happening right away. You aren't waiting around for your conversational partner. The decisions get made and implemented with almost no delay, so the thinking is fresh. There's very little time spend reacquiring context.

Pairing helps reduce the queue time, and thus increases the number of items that are put through the system.
