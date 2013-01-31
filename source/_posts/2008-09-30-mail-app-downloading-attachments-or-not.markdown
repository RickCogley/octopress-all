---           
layout: post
post_title: "Mail.app - Downloading Attachments or Not"
date: 2008-09-30 12:34:46 UTC
updated: 2008-09-30 12:34:46 UTC
comments: true
categories: [Blog-Cogley, Productivity, Software, Tips, SysAdmin]
keywords: rm,du,productivity,headers,attachments,software,imap,mail.app
tags: [rm,du,productivity,headers,attachments,software,imap,mail.app]
posticon: default
cover: /images/Rick_Casual_01.jpg
description: Post explaining how to disable attachment downloading in Apple Mail.app, by Rick Cogley.
published: true
---

_Have you been using Apple's Mail.app for a while, and the size of the stored mail is simply increasing with no end in sight? You can tell Mail.app to not store attachments locally, delete the mail, and re-download just the text content. Assuming you can use the Terminal a bit, here's how:_

[{% img right http://farm9.staticflickr.com/8079/8410141443_63feffd167_d.jpg 300 'Click to view on Flickr: Disable Attachment Downloading in Mail.app' 'Screenshot showing Mail.app settings for disabling attachment downloading.' %}](http://www.flickr.com/photos/rickcogley/8410141443/)If you set up Mail.app in OS X to download attachments for an IMAP account, and then later decide you do not want to store a copy of each attachment locally, you can change the account settings so that only the headers are downloaded. You can make the setting in Mail.app Preferences, but, it takes a while to synchronize. Sometimes a good looong while. 

Assuming OS X 10.5.5 and that all your mail is already up on the server, first, set "Keep copies of messages for offline viewing" to "All Messages, but omit attachments" in Preferences, Accounts, Advanced. 

Next, shut down Mail.app, to get it to release the folder we'll now work on. Then bring up a Terminal, `cd` into the appropriate IMAP folder and confirm and delete the contents using the `rm` command (again, this assumes you have the mail up on the server already): 

{% codeblock Delete Inbox in Preparation for Re-Download lang:bash %}
[user@system]$ cd ~/Library/Mail/
[user@system]$ ls -la
[user@system]$ cd IMAP-myaccount@mailhost.mydomain.com
[user@system]$ ls -la
[user@system]$ rm -rf INBOX.imapmbox
[user@system]$ rm -rf etc
{% endcodeblock %} 

Before you delete, check what is in there using the `ls` command, and the size of the folders using the `du` command:

{% codeblock Use du to get folder sizes lang:bash %}
rcogley@RickMBP ~/Library/Mail/V2 % du -hsc *
2.2G	IMAP-rcogley_work@mail.webfaction.com
 15G	IMAP-rick.cogley@imap.gmail.com
4.0K	Mac-rick.cogley
162M	MailData
235M	Mailboxes
460K	RSS
 17G	total
{% endcodeblock %} 

Next time you restart Mail.app, it will rebuild the folders it needs, under your IMAP folder. 

{% raw %}<div class="alert alert-error"><strong>Warning</strong>: Don't bone-headedly delete your email without a backup!</div>{% endraw %} 

__Enjoy__!

{% raw %}<div class="alert alert-info"><strong>Update 20130124</strong>: Still works in OS X Mountain Lion but the mail folders are in a V2 subdirectory, which you need to CD into.</div>{% endraw %}



