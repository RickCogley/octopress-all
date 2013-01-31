---           
layout: post
post_title: "Save Local Disk with Gmail \"Advanced IMAP Controls\""
date: 2008-10-12 12:04:15 UTC
updated: 2008-10-12 12:04:15 UTC
comments: true
categories: [Blog-Cogley, Productivity, Tips, Software]
keywords: productivity,tutorials,tips,software,google labs,gmail,imap,google,space,all-mail
tags: [productivity,tutorials,tips,software,google labs,gmail,imap,google,space,all-mail]
posticon: default
cover: /images/Rick_Casual_01.jpg
description: Post on avoiding synching the All-Mail folder in Gmail, to save space, by Rick Cogley.
published: true
---

_I outlined "[Setting up Leopard Mail.app with Google Gmail IMAP](/articles/2008/01/20/tutorial-setting-up-leopard-mail-app-with-google-gmail-imap-the-basics/)" previously, and Google Labs has released a new feature for regular and Google Applications Premier Edition Gmail - [**Advanced IMAP Controls**](http://gmailblog.blogspot.com/2008/10/new-in-labs-advanced-imap-controls.html). How can you use this to save space?_

<!--more--> 

[{% img right http://farm4.staticflickr.com/3056/2933421057_cb9cdb2b73_d.jpg 300 'Click to view on Flickr: Google Labs GMail Advanced I.M.A.P. Controls' 'Screenshot showing Google Labs GMail Advanced I.M.A.P. Controls.' %}](http://www.flickr.com/photos/81796435@N00/2933421057)This tip shows you how to avoid having to sync the GMail "All Mail" folder, thus saving a considerable amount of local hard disk space in many cases. Before enabling Google Labs features, note the caveat mentioned by Google on [this FAQ](http://mail.google.com/support/bin/answer.py?hl=en&ctx=mail&answer=29418). 

At any rate, here's how to enable Advanced IMAP Controls: 

1. Close Mail.app.
1. In Gmail settings, Labs tab, turn on "Advanced IMAP Controls" by enabling it.
1. Delete the locally sync'ed All Mail Folder.
1. Start Mail.app and confirm. You can press Cmd-0 to check activity in Mail.app.

[{% img right http://farm4.static.flickr.com/3015/2934286100_9ff0e98cf0_m.jpg 300 'Click to view on Flickr: Google Labs - Configuring Gmail I.M.A.P. Folder Syncing' 'Screenshot showing Google Labs - Configuring Gmail I.M.A.P. Folder Syncing.' %}](http://www.flickr.com/photos/81796435@N00/2934286100)
You can easily delete your local copy of the All Mail folder from Terminal. Use the sudo command to run a bash shell within your shell, and feed the password prompt your administrator password. You can check the size of the various folders using du, and rm -rf to force-delete the folder. Exit will get you out of the sudo'ed bash prompt and back to your normal prompt. 

{% codeblock Cleaning up IMAP lang:bash %}
jrc $ cd ~/Library/Mail/IMAP-rick.cogley\@imap.gmail.com/[Gmail]
jrc $ sudo bash
Password: *********
bash-3.2 # ls
All Mail.imapmbox Drafts.imapmbox Reference.imapmbox Starred.imapmboxExpiring.imapmboxSent Mail.imapmboxTrash.imapmbox OmniFocus.imapmbox Spam.imapmbox
bash-3.2 # du -h -d 1
bash-3.2 # rm -rf All \Mail.imapmbox/
bash-3.2 # exit
jrc $ 
{% endcodeblock %}

When you restart Mail.app, the folders for which you had sync enabled which are now disabled, will take a moment to disappear. I saved myself 2 GB of disk space by enabling this. 

