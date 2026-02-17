---
title: Giga VIP
description: Introduction to Giga VIP
---

Giga VIP is a custom currency used for various stream features.
It is often shortened as `gv`.

When you chat in stream for the first time, you are given 5 Giga VIP to get you started.

You can obtain Giga VIP through various means.
The simplest passive way being clocking-in every stream.

## Mega VIP

A keen observer might notice that you can possess a fractional amount of Giga VIP.
This is because the real currency used is actually Mega VIP, which does not have fractional components.
Mega VIP is often shortened as `mv`.

**1000 Mega VIP is equal to 1 Giga VIP**

## Obtaining Giga VIP

### Clock-ins

Clocking in using the clock-in redeem will give you `floor(log2(<clock-ins>))` Giga VIP.
In simpler terms, you get Giga VIP in the amount of the largest power of two, smaller or equal than your number of clock-ins.

#### Example table

| Clock-ins | Giga VIP |
|-----------|----------|
| 1         | 0        |
| 2 -> 3    | 1        |
| 4 -> 7    | 2        |
| 8 -> 15   | 3        |
| 16 -> 31  | 4        |
| 32 -> 63  | 5        |
| 64 -> 127 | 6        |
| ...       | ...      |

### Pyramid Scheme

The [pyramid scheme redeem](/redeems) gives out Giga VIP to its redeemers.
Conditions apply, more information on [the redeem page](/redeems).

### Slot Machine

The [slot machine](/bahms/slot-machine) includes Giga VIP as a reward.
Conditions apply, more information on [the slot machine page](/redeems).

### Duels

The winner of a [duel](/bahms/duels) get 1 Giga VIP.
Conditions apply, more information on [the duels page](/bahms/duels).

### Thighs

Sending `lilbun1Thigh` as [a gigantified emote](https://help.twitch.tv/s/article/power-ups) will give you 1 Giga VIP.

Please go subscribe and support [LilBunnny](https://www.twitch.tv/lilbunnny), she is a great streamer.

![lilbun1Thigh](https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_70fb3859afe54f58b7021d0fe305f609/default/dark/3.0)

### First-time chat

Chatting for the first time gives you 5 Giga VIP.

### Whims

[Jane](https://www.twitch.tv/just__jane) can give out Giga VIP based on her whims as a reward or any other incentive.

## Commands

| command                      | description                                      |
|------------------------------|--------------------------------------------------|
| `!giga-vip`                  | Check your own Giga VIP balance.                 |
| `!giga-vip <user>`           | Check `<user>`'s Giga VIP balance.               |
| `!mega-vip`                  | Check your own Mega VIP balance.                 |
| `!mega-vip <user>`           | Check `<user>`'s Mega VIP balance.               |
| `!gifta-vip <user> <amount>` | Gift `<user>` some Giga VIP. Supports fractions. |

