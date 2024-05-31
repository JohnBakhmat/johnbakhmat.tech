---
title: "Blazingly-fast MPA navigation is real now?"
description: "Investigating new Speculation Rules API"
pubDate: "June 2, 2024"
readingTime: "123"
draft: true
---

## Prelude

You are a speed freak aren't you? Every day you wake up and sprint to your
workstation, pull up that ergonomic keyboard of yours, boot Arch with tiling
window manager and run that juicy `nvim` command coz speed is running in your
veins. I bet when you opened this blog post, your eye caught a glimpse of page
loading coz you are so fast, its should be illegal for site to load slower then
instantly.

Welp I have good news, coz chrome now has a feature that can improve that
experience for you by rendering pages even before you try to load them.

## Wtf are you talking about?

So, two weeks ago (May 2024), Barry Pollard was talking on Google I/O conf
about this new feature that is called **"Speculation Rules API** that aims to
reduce page rendering time, by starting the render even before user actually
clicks the link. Developer can specify what pages can use this feature, what -
not; when does it actually starts to render: for example on link hover.
