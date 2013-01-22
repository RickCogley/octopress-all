---           
layout: post
post_title: "Restoring Mail, but not via MobileMe Account Backups"
date: 2009-05-30 16:59:19 UTC
updated: 2009-05-30 16:59:19 UTC
comments: true
categories: [Blog-Cogley, productivity, os x, plist, software, Time Machine, mail, 10.5.7, mail.app, apple]
keywords: productivity,os x,plist,software,Time Machine,mail,10.5.7,mail.app,apple
tags: [productivity,os x,plist,software,Time Machine,mail,10.5.7,mail.app,apple]
posticon: default
cover: /images/Rick_Casual_01.jpg
description: xxxxxxx
published: true
---
 

[](http://www.flickr.com/photos/81796435@N00/3578316465 "View 'Time Machine Mail Plist' on Flickr.com")**So much for MobileMe backing up** my Mail account data! I had a another weird crash, which has been plaguing me since I upgraded OS X Leopard to 10.5.7. The crash happens when I wake the computer from sleep, and plug in my firewire then USB hard drives. When the USB hits the socket, sometimes I get the _grey screen of death_, in which the only way to recover is a hard reset. This happened again today, but this time, the hard reset broke Mail. After booting up, I started Mail and the only account I had was my MobileMe account. My Google accounts were gone. 


I thought, ah hah!, I'll recover from MobileMe's copies of my Mail Accounts. No dice. It must have quickly pushed _to_ MobileMe, the change that happened when the system crashed, so syncing MobileMe did nothing to recover. Searching the web a little, I found various information about restoring the entire mail folder and so on, but it turned out that my mail data, in _~/Library/Mail_, seemed intact. So, I decided to try to restore my Mail plist file first, from Time Machine backup, and see if that would fix the problem. 


### How to Restore Mail.app



Here's how I restored it: 





Close Mail.


Plug in the Time Machine drive.


Press option while clicking the Time Machine icon in the menu bar, select "Browse Other Time Machine Disks" and choose your Time Machine disk. You can display this icon in Time Machine preferences. **Note**, if you use Path Finder, a Finder replacement, like I do, start Finder before you do any Time Machine work.


Enter Time Machine, and find your last Mail plist backup. In Time Machine, just click a folder or two "back", and see what the date on the file is. The file is _~/Library/Preferences/com.apple.mail.plist_ where ~ is your home folder.


Affirm the overwrite, when the restore process asks if you want to replace the file with an older version.


Start Mail.





This worked. All my mail was present and accounted for. If my mail _had_ been damaged, I could do the same procedure, but after stopping Mail, just rename the Mail folder _~/Library/Mail_ to something else like _~/Library/Mail-Backup_, and restore both the Mail folder and the plist file from your Time Machine backup. It will take quite a bit longer to achieve, but it should work. 


I hope this helps someone. **Enjoy**, and good luck recovering. 

