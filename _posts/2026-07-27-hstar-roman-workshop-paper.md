---
layout: post
title: "New workshop paper: What Are We Measuring? Bonding, Trust, and Human–Robot Relationships"
date: 2026-07-27 12:00:00 +0000
description: An accepted paper at the H-STAR workshop (RO-MAN 2026) arguing that trust and social bonding are distinct constructs, and what that means for human-state-aware robotics.
tags: papers workshops hri
categories:
related_posts: false
---

I'm pleased to share that I've had a workshop paper accepted at the **Human State-Aware Robotics (H-STAR): From Multimodal Data to Human-Adaptive Behavior in HRI** workshop at **RO-MAN 2026** in Kitakyushu, Japan.

The paper, *What Are We Measuring? Bonding, Trust, and the Evaluation of Human–Robot Relationships*, takes aim at a habit that has quietly become standard in HRI: using **trust** — usually captured with a self-report questionnaire — as a stand-in for the quality of a human–robot relationship as a whole. I argue this is a category error. Trust is a cognitive appraisal of whether a robot will perform reliably: forward-looking, quick to update, and fragile, such that a single salient failure can undo it. **Social bonding** is something else entirely — an affiliative, attachment-based tie that accumulates slowly through repeated interaction and shows up in largely involuntary, bodily signals: lowered physiological arousal in the robot's presence, narrowing interpersonal distance, behavioural synchrony. The two routinely come apart. We trust a robot vacuum without being attached to it, and people stay attached to companions (human or robotic) they have long stopped relying on.

Once we treat bond and trust as two independent axes rather than one, we get a simple map of relationship states — a *bond × trust* space with four regions: **avoidance** (low bond, low trust), **functional** (low bond, high trust), **dependence** (high bond, low trust), and **symbiosis** (high bond, high trust). The **dependence** quadrant is the one I find most important, and most troubling, because a trust-only account cannot even represent it: a user who stays attached to, and keeps relying on, a robot that no longer merits that reliance — a real risk for vulnerable users in long-term deployments.

For human-state-aware robotics, this reframes a few things. Whether someone is *bonded* becomes an estimation target in its own right, read from different (multimodal, largely involuntary) channels than trust. A robot's online adaptation should be conditioned on both axes rather than a single trust estimate — since, for example, the signals that usually mean "this is going well" (proximity, low arousal, positive affect) can, in the dependence region, simply be the bond masking declining performance. What counts as a "failure" becomes relational rather than a fixed decrement. And it surfaces genuine ethical questions about the dependence these systems can quietly create.

This is part of a larger paper I'm currently developing, so I'd love to talk to anyone thinking about similar problems — measurement, attachment, long-term deployments, or the ethics of robots people bond to. Whether or not you'll be at RO-MAN, please do [get in touch](mailto:imy@imytk.co.uk).
