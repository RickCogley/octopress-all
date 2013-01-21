---           
layout: post
post_title: "Tip - Get the OS X Version from CLI"
date: 2008-02-07 07:45:09 UTC
updated: 2008-02-07 07:45:09 UTC
comments: true
categories: [Blog-Cogley, productivity, cli, tip, os x, command line, terminal, apple]
keywords: productivity,cli,tip,os x,command line,terminal,apple
tags: [productivity,cli,tip,os x,command line,terminal,apple]
---
 

If you are logged into OS X as usual, you can get your system version from "About This Mac" in the Apple menu. This is not helpful when you are remotely connected to a server via SSH, however. So how do you do it? You can get OS X's version from the command line, like this:

<pre>jrclt2007:~ rcogley$ sw_vers</pre><pre>ProductName:    Mac OS X</pre><pre>ProductVersion:      10.5.1</pre><pre>BuildVersion:  9B18</pre>