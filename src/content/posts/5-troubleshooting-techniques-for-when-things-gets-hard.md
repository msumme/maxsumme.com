---
title: "5 TroubleShooting Techniques (For When Things Gets Hard)"
pubDate: "2016-10-28"
updatedDate: "2023-11-25"
draft: true
wpId: 140
---

Programmers typically spend more time debugging code than writing it.  And since we can't always practice Test-Driven Development, especially on legacy software projects, there are often some complicated tangles of spaghetti code to work through.\\ \\ Normally, you can use a debugger and find information about the state and flow of the code.  Occasionally even with a debugger, things are still quite difficult.\\ \\ But what do we do when our normal tools aren't available, and we're left with incomplete information and not a lot of leads?\\

## \#1 Stop Doing What You're Doing

\\ When it's not working and you're getting frustrated, you need to stop.  Take a break.\\ \\ Take a 10 minute walk, talk to someone, get a coffee or a snack or a drink.\\ \\ Walk away.  Just getting away from the problem for a few minutes will frequently be enough to give you a new idea.\\ \\ This is often the most difficult step when you're really intensely focused in a debugging session.\\

## \#2 Question Basic Assumptions

\\ Do you have a mental model for what is happening in the code?  How confident in that model are you?\\ \\ Have you checked for typos?  (This is a problem in bash scripts more than you'd like to believe.)\\ \\ Are you sure the inputs and outputs are what you think they are? Can you verify them?\\ \\ Do you think you know where the problem is happening?  How have you verified this?\\ \\ Have you read the error message correctly?  Do you know which stack trace (if there's more than 1) is the relevant one?\\ \\ Is there possibly a silent upstream failure?  (This happens with front-end javascript frameworks a LOT)\\ \\ What other tools are at your disposal?  What other programmers are at your disposal?\\ \\ Can you list your assumptions?  Test them?\\ \\ Can you solve a simpler problem?\\

## \#3 Talk To Someone

\\ If there's someone technical who knows your space, that would be your best option.\\ \\ But anyone will do as long as they're willing to listen.\\ \\ Try to explain the problem clearly.  Frequently, if you can't explain it and what you are stuck on, you are simply lacking sufficient clarity in your problem definition to move forward.\\ \\ Frequently, vocalizing it to someone else helps us to move forward or get better ideas.\\

## \#4 Expand Your Search

\\ Google is usually the first step when we see a new kind of error and don't know what to try.\\ \\ However, sometimes you can't find much of anything.\\ \\ When that happens, try broadening your search.  Look for general information.  Expand your understanding of the technology, looking for concepts that might help you, or people with similar-sounding issues that don't quite match what's happening to you.\\ \\ Think of a new way to describe your situation.\\ \\ Read whatever comes up.\\ \\ Remember that you're not trying to find a problem-solution pair, but rather are giving your mind additional material to let it do its work.\\

## \#5 Change Your Problem Description

\\ It is often the case that we are describing the problem by looking at the symptom that immediately presents.\\ \\ Instead of thinking in terms of what is wrong, think in terms of what you are trying to accomplish originally.\\ \\ Sometimes you can simply not solve a problem and move forward by a different route.\\ \\ In short, make sure you are solving a problem you need to solve.\\

## If None of That Works...

\\ Give up.\\ \\ Seriously.  Go to sleep.  Take a nap.  Go do something fun.\\ \\ Let your subconscious attack the issue while you recharge and relax.\\ \\ Come back to it later with fresh energy.  If you've done all you can do, let that be enough.  Life is about more than this one issue.
