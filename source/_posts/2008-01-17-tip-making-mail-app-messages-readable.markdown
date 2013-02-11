---           
layout: post
post_title: "Tip - Making Mail.app Messages Readable"
date: 2008-01-17 23:22:09 UTC
updated: 2008-01-17 23:22:09 UTC
comments: true
categories: [Blog-Cogley, Productivity, Tips, Software]
keywords: productivity,tutorials,software,mail.app,tips
tags: [productivity,tutorials,software,mail.app,tips]
posticon: default
cover: /images/Rick_Casual_01.jpg
description: Post on making font size readable in Mail.app in OS X Leopard, by Rick Cogley.
published: true
googleplus_post: https://plus.google.com/106441590644824941284/posts/fyV7L5uA4dM
---

_I have a Macbook Pro, and I noticed upon upgrading to OS X Leopard, that the default message size for Mail.app messages was too small to read. Sure, you can add a button to your toolbar to increase font size on a per-message basis, but this gets old after the 1000th time. What to do about it?_

<!--more--> 

Some Terminal magic will fix the problem. To increase the minimum font size for HTML messages, do the following:

1. Open Terminal.app. One way - Spotlight search on "Terminal", press Enter after selecting it from the Spotlight list.
1. Type the following at the Terminal prompt and press Enter:

`defaults write com.apple.mail MinimumHTMLFontSize 13`

Now after a system restart your HTML messages will have a base font size of 13 points, which is much easier to read, and you can set the font size to a point size you are comfortable with.

