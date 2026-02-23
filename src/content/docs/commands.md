---
title: Commands
description: Introduction to commands
---

commands are prefixed with either `!` or `bang `.
the `--help` flag can be used to get additional information about commands.

examples:

```
[asrael_io]: !docs # use the docs command
[just__jillian]: bang duel # use the duel command
[Captain_Onosa]: !ermily --help # gets help docs for the ermily command
```

some commands accept arguments:

- `[optional]` arguments surrounded by `[]` square brackets are optional
- `<required>` arguments surrounded by `<>` angle brackets are required

## titles
single time purchase of a title that is used to unlock other commands or features.

| command            | cost ([gv](/giga-vip/)) | description                                         |
|:-------------------|:-----------------------:|:----------------------------------------------------|
| `!my-titles`       |            0            | print titles you have unlocked                      |
| `!rain-maker`      |           25            | use rain [sounds](/bahms/sounds/#paid-sounds)       |
| `!thunder-god`     |           50            | use thunder [sounds](/bahms/sounds/#paid-sounds)    |
| `!silver-slurper`  |           50            | use slurp [sounds](/bahms/sounds/#paid-sounds)      |
| `!ara-ara-mommy`   |           50            | use ara-ara [sounds](/bahms/sounds/#paid-sounds)    |
| `!uwu-people`      |           50            | use uwu [sounds](/bahms/sounds/#paid-sounds)        |
| `!ermily`          |           50            | use erm [sounds](/bahms/sounds/#paid-sounds)        |
| `!heckler`         |           75            | use boo/heckle [sounds](/bahms/sounds/#paid-sounds) |
| `!dominatrix`      |           100           | use [`!whip`](/bahms/sounds/#paid-sounds) command   |
| `!doggirl-trainer` |           250           | probably does nothing                               |

## info
commands that may be informative to you. who knows?

| command     | cost ([gv](/giga-vip/)) | description                                                      |
|:------------|:-----------------------:|:-----------------------------------------------------------------|
| `!frick`    |            0            | prints the number of times jane has said frick                   |
| `!gaslight` |      market value       | self documenting (obvious)                                       |
| `!ping`     |            0            | command used for testing latency, gets a pong response           |
| `!github`   |            0            | get github information                                           |
| `!discord`  |            0            | get discord invite link                                          |
| `!raid`     |            0            | get raid messages                                                |
| `!seiso`    |            0            | prints "so sei we all"                                           |
| `!bahms`    |            0            | bespoke. artisinal. hardcrafted. meme. software.                 |
| `!barknote` |            0            | prints link to barknote lore video                               |
| `!schedule` |            0            | prints a general schedule. weekly schedules posted on `!discord` |
| `!docs`     |            0            | gets a link to these docs                                        |
| `!commands` |            0            | gets a link to this page                                         |

## giga-vip
what are [giga-vip](/giga-vip/) levels? great question

| command                       | cost ([gv](/giga-vip/)) | description                                         |
|:------------------------------|:-----------------------:|:----------------------------------------------------|
| `!giga-vip [@user]`           |            0            | gets your, or another users, current giga-vip level |
| `!mega-vip [@user]`           |            0            | gets your, or another users, current mega-vip level |
| `!gifta-vip <@user> <amount>` |            0            | transfer your giga-vip to another user              |

## jill
our lovely [AI co-star, Jill](/bahms/jill/)

| command       | cost ([gv](/giga-vip/)) | description                                     |
|:--------------|:-----------------------:|:------------------------------------------------|
| `!jill <msg>` |            2            | send a message to Jill, she will always respond |

Jill loves to learn about you by [whispering](/bahms/jill/#whispering) commands.

## tts
join the voices in my head

| command             | cost ([gv](/giga-vip/)) | description                                  |
|:--------------------|:-----------------------:|:---------------------------------------------|
| `!tts <msg>`        |      market value       | use [tts](/bahms/tts/)                       |
| `!tts-price`        |            0            | prints the current market-value price of tts |
| `!my-voice <voice>` |            0            | sets your default tts voice                  |

## bounce house
chat has fun in the [bounce house](/bahms/bounce-house/) while I ignore them

| command              | cost ([gv](/giga-vip/)) | description                                   |
|:---------------------|:-----------------------:|:----------------------------------------------|
| `!vroom`             |            1            | gives you more speed, persists between deaths |
| `!gigantify-me`      |            1            | drastically grows your orb                    |
| `!vanish`            |            0            | remove yourself from the bounce house         |
| `!spin`              |            0            | spins your orb around                         |
| `!whatever <msg>`    |            1            | adds your message to the bounce house         |
| `!my-color`          |            0            | gets your configured color                    |
| `!set-color <#hex6>` |            0            | attempts to set your unique user color        |

## friends
no eye contact required

| command | cost ([gv](/giga-vip/)) | description                                                                          |
|:--------|:-----------------------:|:-------------------------------------------------------------------------------------|
| `!joel` |            0            | just__streambot sends Joel to [JakeCreatesStuff](https://twitch.tv/jakecreatesstuff) |

## bang
let there be justice

| command   | cost ([gv](/giga-vip/)) | description                                                                   |
|:----------|:-----------------------:|:------------------------------------------------------------------------------|
| `!duel`   |            0            | starts a [duel](/bahms/duels/) with another user (must be as a reply)         |
| `!bang`   |            0            | shoots one round during your ongoing [duel](/bahms/duels/) with another user. |
| `!delete` |          1.984          | deletes another message (reply to the message you want to delete)             |

## random
the spice of life

| command                           | cost ([gv](/giga-vip/)) | description                                     |
|:----------------------------------|:-----------------------:|:------------------------------------------------|
| `!d20`                            |            0            | get the result of a fair d20 roll               |
| `!roll`                           |            0            | roll dice using standard notation (6d9)         |
| `!choose <option>[, <option>...]` |            0            | randomly select from a list of provided options |
| `!coin`                           |            0            | flips a fair coin                               |

## reminder
[thighs](/giga-vip/#thighs) 😍 … I mean, what was I doing?

| command                       | cost ([gv](/giga-vip/)) | description                                |
|:------------------------------|:-----------------------:|:-------------------------------------------|
| `!remind-me <duration> [msg]` |            0            | reminds after duration (e.g.: `1h20m32s`). |

Valid time units are:

|       Unit | Time multiplier |
|-----------:|:----------------|
|        `d` | n days          |
|        `h` | n hours         |
|        `m` | n minutes       |
|        `s` | n seconds       |
|       `ms` | n milliseconds  |
| `us`, `µs` | n microseconds  |
|       `ns` | n nanoseconds   |

```
[Red_Epicness]: !remind-me 15m Pizza time
[MotaanVT]: !remind-me 2m12s Jane is cute mhm pass it on
```

## secret squirrel
this line marks the end of this page

> "It's all very Super Secret Squirrel."

| command        | cost ([gv](/giga-vip/)) | description                                         |
|:---------------|:-----------------------:|:----------------------------------------------------|
| `!shame-token` |           250           | probably does nothing, definitely dont look into it |
| `!jane`        |  don't worry about it   | just don't worry about it                           |