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

_Have you been using Apple's Mail.app for a while, and the size of the stored mail is simply increasing with no end in sight? You can tell Mail.app to not store attachments locally, delete the mail, and re-download just the text content. Assuming you can use the Terminal a bit, here's how:_

If you set up Mail.app in OS X to download attachments for an IMAP account, and then later decide you do not want to store a copy of each attachment locally, you can change the account settings so that only the headers are downloaded. You can make the setting in Mail.app Preferences, but, it takes a while to synchronize. Sometimes a good looong while. 

Assuming OS X 10.5.5 and that all your mail is already up on the server, first, set "Keep copies of messages for offline viewing" to "All Messages, but omit attachments" in Preferences, Accounts, Advanced. 

Next, shut down Mail.app, to get it to release the folder we'll now work on. Then bring up a Terminal, and switch to your IMAP folder and delete the contents (again, this assumes you have the mail up on the server already): 

{% codeblock Delete Inbox in Preparation for Re-Download lang:bash %}
cd ~/Library/Mail/
cd IMAP-myaccount@mailhost.mydomain.com
rm -rf INBOX.imapmbox
rm -rf etc
{% endcodeblock %} 

Use the `rm` command to delete the contents. You may have to check what is in there using the `ls` command first. Next time you restart Mail.app, it will rebuild the folders under your IMAP folder. You can check the size before and after by running the du command: `du -h -d 1`

{% raw %}<div class="alert alert-error"><strong>Warning</strong>: Don't bone-headedly delete your email without a backup!</div>{% endraw %} 

__Enjoy__!