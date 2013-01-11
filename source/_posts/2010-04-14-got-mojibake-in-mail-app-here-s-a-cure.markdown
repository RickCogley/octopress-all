---           
layout: post
post_title: "Got Mojibake in Mail.app? Here's a Cure."
date: 2010-04-14 07:09:15 UTC
updated: 2010-04-14 07:09:15 UTC
comments: true
categories: [Blog-Cogley, Software, Technology, Troubleshooting, Productivity, Tips]
keywords: mojibake,tip,10.6.3,garbled japanese,terminal,mail.app,apple
tags: [mojibake,tip,10.6.3,garbled japanese,terminal,mail.app,apple]
---
 


If you use OS X Mail to send Japanese email, you may find that some recipients complain that your Japanese is "mojibake" or garbled. If you are getting this feedback you can set your default Character Set encoding in the terminal. 




### How to Set Mail.app's Default Charset






Here's how to change it. Shut down mail, then in Terminal: 




$ defaults write com.apple.mail NSPreferredMailCharset "ISO-2022-JP"




That will set Mail's default character set to ISO-2022-JP instead of UTF-8, and after you restart Mail.app, you will be golden. I tested this in Mail.app 4.2 in OS X 10.6.3 and it works for me (at least according to my Outlook-saddled colleagues). 




**Enjoy!**


