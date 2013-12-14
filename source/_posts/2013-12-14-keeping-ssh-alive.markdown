---
layout: post
post_title: "Mac OS X Terminal ssh Connection Keepalive"
posticon: default
cover: /images/Rick_Casual_01.jpg
date: 2013-12-14 19:01
comments: true
description: A post on how to keep ssh sessions alive in OS X Terminal, by Rick Cogley.
keywords: sysadmin,ssh,session,keepalive,openssh
categories: [Blog-Cogley, Troubleshooting, Software, Sysadmin, Tips]
tags: [sysadmin,ssh,session,keepalive,openssh]
googleplus_post: https://plus.google.com/106441590644824941284/posts/9S37ZgmY9C7
published: true
lettering: Keep those OSX terminal ssh sessions alive
---

_I was getting unceremoniously booted off ssh connections to Webfaction. Here's what I did to fix it._

<!--more--> 

If you do any system admin work at all, you'll know this problem: the host you connected to via ssh has disconnected you with a "broken pipe" message. It could be that you left the session open, or that you moved from one network to another, messing with the NAT connection, restarted your system, or various other reasons. 

###So How Do You Fix It?###

The fix is simple. You just add some keepalive packet settings to your _local_ ssh's config file, located in ``~/.ssh/config``. 

{% codeblock %}
Host *
    ServerAliveInterval 30
    ServerAliveCountMax 2
{% endcodeblock %}

After I added this and reconnected, problem solved. Hope this helps someone. 

