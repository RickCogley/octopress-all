---           
layout: post
post_title: "Save Local Disk with Gmail \"Advanced IMAP Controls\""
date: 2008-10-12 12:04:15 UTC
updated: 2008-10-12 12:04:15 UTC
comments: true
categories: [Blog-Cogley, productivity, tutorials, tips, software, google labs, gmail, imap, google]
keywords: productivity,tutorials,tips,software,google labs,gmail,imap,google
tags: [productivity,tutorials,tips,software,google labs,gmail,imap,google]
posticon: default
cover: /images/Rick_Casual_01.jpg
description: xxxxxxx
published: true
---
 

[](http://www.flickr.com/photos/81796435@N00/2933421057 "View 'Google Labs GMail Advanced IMAP Controls' on Flickr.com")I outlined "[Setting up Leopard Mail.app with Google Gmail IMAP](http://rick.cogley.info/blog/index.php?id=4961479062255821102)" previously, and Google Labs has released a new feature for regular and Google Applications Premier Edition Gmail - [**Advanced IMAP Controls**](http://gmailblog.blogspot.com/2008/10/new-in-labs-advanced-imap-controls.html). This tip shows you how to avoid having to sync the GMail "All Mail" folder, thus saving a considerable amount of local hard disk space in many cases. Before enabling Google Labs features, note the caveat mentioned by Google on [this FAQ](http://mail.google.com/support/bin/answer.py?hl=en&ctx=mail&answer=29418). 


[![Google Labs - Configuring Gmail IMAP Folder Syncing](http://farm4.static.flickr.com/3015/2934286100_9ff0e98cf0_m.jpg)](http://www.flickr.com/photos/81796435@N00/2934286100 "View 'Google Labs - Configuring Gmail IMAP Folder Syncing' on Flickr.com")At any rate, here's how to enable Advanced IMAP Controls: 





Close Mail.app.


In Gmail settings, Labs tab, turn on "Advanced IMAP Controls" by enabling it.


Delete the locally sync'ed All Mail Folder.


Start Mail.app and confirm. You can press Cmd-0 to check activity in Mail.app.





You can easily delete your local copy of the All Mail folder from Terminal. Use the sudo command to run a bash shell within your shell, and feed the password prompt your administrator password. You can check the size of the various folders using du, and rm -rf to force-delete the folder. Exit will get you out of the sudo'ed bash prompt and back to your normal prompt. 

<pre>jrc $ cd ~/Library/Mail/IMAP-rick.cogley\@imap.gmail.com/[Gmail]jrc $ sudo bashPassword: *********bash-3.2 # lsAll Mail.imapmbox Drafts.imapmbox Reference.imapmbox Starred.imapmboxExpiring.imapmboxSent Mail.imapmboxTrash.imapmbox OmniFocus.imapmbox Spam.imapmboxbash-3.2 # du -h -d 1bash-3.2 # rm -rf All \Mail.imapmbox/bash-3.2 # exitjrc $ </pre>
When you restart Mail.app, the folders for which you had sync enabled which are now disabled, will take a moment to disappear. I saved myself 2 GB of disk space by enabling this. 

