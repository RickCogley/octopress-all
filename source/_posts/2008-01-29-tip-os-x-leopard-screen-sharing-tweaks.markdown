---           
layout: post
post_title: "Tip - OS X Leopard Screen Sharing Tweaks"
date: 2008-01-29 08:07:10 UTC
updated: 2008-01-29 08:07:10 UTC
comments: true
categories: [Blog-Cogley, Software, Tips, SysAdmin]
keywords: screen sharing,tip,software,leopard,apple
tags: [screen sharing,tip,software,leopard,apple]
posticon: default
cover: /images/Rick_Casual_01.jpg
description: Post on OS X Screen Sharing Tweaks, by Rick Cogley.
published: true
---
 
_The default Leopard screen sharing app can be made a little more ARD-like, if you add some parameters via the "defaults write" command in Terminal. Check out the default style by sharing the screen of a neighboring computer in Finder, then read on to learn more._ 

<!--more--> 

You can enable Screen Sharing on a machine in System Preferences, Sharing. To add the extra settings, first, open Terminal from your Applications, Utilities folder, then issue the following three commands (each is a single line):

{% codeblock Defaults Write for Screen Sharing Extensions lang:terminal %}
defaults write com.apple.ScreenSharing ShowBonjourBrowser_Debug 1
defaults write com.apple.ScreenSharing 'NSToolbar Configuration ControlToolbar' -dict-add 'TB Item Identifiers' '(Scale,Control,Share,Curtain,Capture,FullScreen,GetClipboard,SendClipboard,Quality)'
defaults write com.apple.ScreenSharing 'TB Is Shown' 1
{% endcodeblock %}

You will now be able to open Screen Sharing and see local computers on your network that can be controlled, and, there are some additional buttons to use related to scaling, curtaining (display blackout), clipboard, quality (set to low quality for faster response) and screen capture.