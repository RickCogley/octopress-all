---           
layout: post
title: "Efficient Gmail with OS X Mail.app"
date: 2012-01-08 13:03:11 UTC
updated: 2012-01-08 13:03:11 UTC
comments: true
categories: [Blog-Cogley, Software, Technology, Troubleshooting, Productivity, Tips]
keywords: productivity,os x,Archive,gmail,Google Apps,Lion,apple
tags: [productivity,os x,Archive,gmail,Google Apps,Lion,apple]
---
 


[{% img right http://farm8.staticflickr.com/7003/6530579107_ff553c075c_m.jpg '' '1000 Cranes - one by one effort' %}](http://www.flickr.com/photos/81796435@N00/6530579107 "View '1000 Cranes - one by one effort' on Flickr.com")Greetings and Happy New Year. I am using Mail.app on OS X Lion, to retrieve mail in my Google Apps for Business Gmail account, and I wanted to blog about my setup, because I think it is relatively efficient and might help others. My goals are:


- To keep my inbox small, to allow Mail.app to perform well. This goes for any mailer, really. The larger the mail store, the slower it will get. 

- To keep minimize network traffic and keep round trip copying up and down to Gmail, to a minimum. 

- To be able to have a backup of mail just in case, outside the mail client. 

### My Formula for Mail.app Gmail Efficiency



Here is what I am doing:




**To minimize network traffic**, in GMail settings, I uncheck the "_Show in IMAP_" setting for the All Mail label, so that it does _not_ copy down to Mail.app. If a message comes into Gmail, and this is turned on, it will download twice - to the Inbox folder and to the All Mail folder. Gmail does not store in folders, but rather works with labels, so there is some strangeness in interaction with typical IMAP clients as a result.




**To keep the size of the local Inbox small**, I am Archiving mail. Archiving mail in Gmail means to remove its Inbox label. It is important to note that when you Archive mail in Gmail, it just makes it disappear from the Inbox, but it is still present in All Mail.




To Archive inside the Gmail web GUI, select or open the mail, then -


- … press "e" on the keyboard (see [other keyboard shortcuts](http://support.google.com/mail/bin/answer.py?hl=en&answer=6594) for Gmail). Or, 

- … click the Archive button on the toolbar (looks like a box with a downward-facing arrow).



There is an Archive button in Mail.app, and what this does is to move the selected mail into an Archive IMAP folder, which will be synced up to Gmail. To Archive mail using Mail.app, select or open the mail in Mail.app, then -


1. … press Ctrl-⌘-A to Archive it. 

2. Confirm the email is present in the local "Archive" IMAP folder, which should be present in your Gmail folder list (in Mail.app, scroll down, in the left-hand folder list to find it). 

3. In Gmail, once the email is copied up and synced, select the mail or mails and click the "Remove Label" button, or, press "y" on the keyboard. Use Mail.app menu Window, Activity to confirm the sync, and, observe the labels in Gmail. At first, you will still see all the mails in the Archive label marked with an Inbox label as well, but, as they are synced up, these will be removed. Once it settles down, you can Remove the Label. 



Why do it this way, taking more steps? I do this because it is easier to search and select in Mail.app, than it is in Gmail. You can search on a date range in Gmail, but it is a bit fiddly.




**To keep a backup of mail**, just in case, I use the excellent [MailSteward](http://www.mailsteward.com/) utility. This lets me automatically keep a database of all my mail, which I can then periodically offload to DVD, Amazon S3 or Dropbox.


### Bonus Tip



If you are happy deleting unneeded mail in Gmail and _not_ Mail.app, then you can uncheck "Move deleted messages to the Trash Mailbox" in preferences (Mail.app, Preferences, Select Account, "Mailbox Behaviors"). This way, when you delete on Mail.app, the mail is removed from the Inbox on your local system, but, only the Inbox label is removed from the message up in Gmail. You would then have to go to Gmail and delete what you want to delete.




I hope these tips help someone.


