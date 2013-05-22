---
layout: post
post_title: "Resetting a Crashed OS X Menubar, Finder or Dock"
posticon: default
cover: /images/Rick_Casual_01.jpg
date: 2013-05-22 14:34
comments: true
description: OS X Menubar, Dock or Finder crashed? Read this post by Rick Cogley on how to reset it.
keywords: OS X, tip, tips, menubar, killall, dock, finder, apple
categories: [Blog-Cogley, Software, Tips, Sysadmin]
tags: [OS X, tip, tips, menubar, killall, dock, finder, apple]
published: true
lettering: How to killall frozen UI in OSX.
googleplus_post: https://plus.google.com/106441590644824941284/posts/gt84GQtzYRC
---

_Has your OS X menubar, Dock or Finder crashed? These very simple Terminal commands should do the trick._

<!--more--> 

If you find yourself in those situations, just start up Terminal (hint: just type it in Spotlight and press Enter), and issue the appropriate command. 

{% codeblock Kill the Menubar. lang:Console %}
>killall -KILL SystemUIServer
{% endcodeblock %}

{% codeblock Kill the Dock or Spaces. lang:Console %}
>killall -KILL Dock
{% endcodeblock %}

{% codeblock Kill the Finder. lang:Console %}
>killall -KILL Finder
{% endcodeblock %}

... or, _Ctrl-Option-Click_ the Finder icon in the Dock. 

I hope this helps someone with a crashed Finder, Dock or Menubar in Apple OS X. 
