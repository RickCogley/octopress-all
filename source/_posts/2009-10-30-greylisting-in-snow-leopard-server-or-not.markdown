---           
layout: post
post_title: "Greylisting in Snow Leopard Server, or not"
date: 2009-10-30 04:19:13 UTC
updated: 2009-10-30 04:19:13 UTC
comments: true
categories: [Blog-Cogley, productivity, tip, Postfix, Greylisting, software, mail, Snow Leopard Server]
keywords: productivity,10.6,tip,Postfix,Greylisting,software,mail,Snow Leopard Server
tags: [productivity,10.6,tip,Postfix,Greylisting,software,mail,Snow Leopard Server]
posticon: default
cover: /images/Rick_Casual_01.jpg
description: xxxxxxx
published: true
---
 

Apple's OS X **Snow Leopard Server 10.6** implements [_Greylisting_](http://www.greylisting.org), an anti-spam technique based on forcing sending SMTP servers to "slow down" before they can deliver. This is great for reducing spam, but it also has the perhaps undesired effect of causing delivery delays. Sometimes really, really loooong delivery delays. 


In SLS, when you enable anti-spam in your Mail server (which is postfix), greylisting is automatically enabled. Because there are no readily available manuals on how to use this feature, from Apple, you may want to turn it off. Note that I'm skittish about changing config files like in a normal Unix server in an Apple server, because Apple is known to simply change vast portions of their server products without much notice. It's possible that you'd spend time implementing, and they change the way it has to be done so you have to redo it. Anyway, here's how to disable:


### How to Disable Greylisting in Snow Leopard Server



Of course, as implied above, you can stop Greylisting by turning off spam filtering altogether. However, to be more specific and just disable Greylisting, do the following: 





From Terminal on the server (ssh'ed in or direct), do "sudo bash" to login as root. Then use nano to edit /etc/postfix/main.cf


Remove the "check_policy_service unix:private/policy" string from the line that starts with "smtpd_recipient_restrictions" near the bottom of the file. Save, and exit nano.


Issue a "postfix reload" to reload the configuration.


Use the "exit" command to quit the sudo bash root shell.





I'm a little miffed that Apple would enable this by default and not implement any easy way to edit the greylists or whitelists. At any rate, you can read a [couple](http://www.greylisting.org/implementations/postfix.shtml) [articles](http://www.postfix.org/SMTPD_POLICY_README.html#greylist) on [greylisting](http://www.greylisting.org/), or just wait for Apple. Time however, waits for no man. :-)

