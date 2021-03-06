---           
layout: post
post_title: "Fixing an Unexpected Prompt Hostname in OS X"
date: 2010-02-23 06:07:27 UTC
updated: 2010-02-23 06:07:27 UTC
comments: true
categories: [Blog-Cogley, Software, Troubleshooting, SysAdmin, Tips]
keywords: scutil,10.6,hostname,automatic,prompt,apple
tags: [scutil,10.6,hostname,automatic,prompt,apple]
posticon: default
cover: /images/Rick_Casual_01.jpg
description: Post on fixing the hostname in the prompt, on OS X, by Rick Cogley. 
published: true
googleplus_post: https://plus.google.com/106441590644824941284/posts/TRAC1gz6Zmn
---

_In Mac OS X, you may have noticed if you use the Terminal that OS X automatically picks up what it thinks your hostname should be and sets it. This is nice, but the problem with it is if any utility uses your hostname to set config files, you'll have a different config file every time._ 

<!--more--> 

### How to fix a "Strange Hostname" in an OS X Prompt


If you are getting varied prompts that look like this...: 


`rcogley@em60-123-194-6 ~>`


...where what you're expecting is something like this: 


`rcogley@rickmac ~>`


To fix this, you can use scutil. Here's how I did it: 


`scutil --set HostName "rickmac.esolia.net"`


Substitute the rickmac bit with your own hostname and domain and you'll be good to go with a static prompt. Try these also: 


`scutil --get HostName`


`scutil --get LocalHostName`


`scutil --get ComputerName`


`man scutil`


I hope this helps someone. **Enjoy**! 


