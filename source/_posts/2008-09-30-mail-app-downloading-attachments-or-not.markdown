---           
layout: post
post_title: "Mail.app - Downloading Attachments or Not"
date: 2008-09-30 12:34:46 UTC
updated: 2008-09-30 12:34:46 UTC
comments: true
categories: [Blog-Cogley, rm, du, productivity, headers, attachments, software, imap, mail.app]
keywords: rm,du,productivity,headers,attachments,software,imap,mail.app
tags: [rm,du,productivity,headers,attachments,software,imap,mail.app]
posticon: default
cover: /images/Rick_Casual_01.jpg
description: xxxxxxx
published: true
---
 
If you set up Mail.app in OS X to download attachments for an IMAP account, and then later decide you do not want to store a copy of each attachment locally, you can change the account settings so that only the headers are downloaded. You can make the setting in Mail.app Preferences, but, it takes a while to synchronize. Sometimes a good looong while. Assuming OS X 10.5.5 and that all your mail is up on the server, you can expedite by setting "Keep copies of messages for offline viewing" to "All Messages, but omit attachments" in Preferences, Accounts, Advanced. Shut down Mail.app, to get it to release the folder we'll now work on. Bring up a Terminal, and switch to your IMAP folder and delete the contents (again, this assumes you have the mail up on the server already): <pre>cd ~/Library/Mail/cd IMAP-myaccount@mailhost.mydomain.comrm -rf INBOX.imapmboxrm -rf etc</pre>Use the rm command to delete the contents. You may have to check what is in there using the ls command first. Next time you restart Mail.app, it will rebuild the folders under your IMAP folder. You can check the size before and after by running the du command: <pre>du -h -d 1</pre>Enjoy!