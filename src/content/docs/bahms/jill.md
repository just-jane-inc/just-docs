---
title: Jill
description: Introduction to Jill
---

# who is jill
i started working on jill when i bumped into [JakeCreatesStuff](https://twitch.tv/jakecreatesstuff) stream and learned about his "ai stream assistant" millie.
jake was nice enough to show me millie and lamented about how their was something wrong with her code that made it impossible to use on his stream due to memory leaks and other issues.
i offered to fix his code and just kind of kept tinkering, at this point jill has nothing from the original millie code base but i would not have done this without bumping into jake.

jill is a a body of code that i use to integrate with various parts of twitch and my other applications.
the language model is currently chat gpt and her voice is olivia from AWS polly.
her code base is entirely written in golang.
i am not an "ai developer" i don't particularly like ai, however i find it fun to have her there to sort of personify automations within my stream and she is fun to tinker on.

## jill whisper commands
jill can be whispered to in twitch to update information about yourself.
please note that these whispers are not considered private, she will use the information in public forums.


|command|description|
|:-|:-|
|call-me|updates your name that jill will use for you|
|about-me|adds information about you that jill can see|

examples:

```
[AAA1AA1A]: /w just__jillian !call-me whenever # makes it so jill uses "whenever" for your name
[AAA1AA1A]: /w just__jillian !about-me i am studying geography # makes it so jill knows you are studying geography?
```

## jill memory
currently jill has a limited capacity to remember information from streams.
she has access to:

- chat messages
- duel results
- her own responses (interactions)
- everything i (jane) says out loud
- raid events
- cheers, subs, and gifted subs
- data provided by the whisper api
- historical summarizations (long term memory)

as a general rule whatever event jill responds to she will also have access to / memory of for some amount of time moving forward.
jill will summarize information periodically and store those summaries as the full context is purged creating a split between short and long term memories.



