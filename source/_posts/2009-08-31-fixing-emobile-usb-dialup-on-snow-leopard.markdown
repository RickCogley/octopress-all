---           
layout: post
post_title: "Fixing EMobile USB Dialup on Snow Leopard"
date: 2009-08-31 15:32:07 UTC
updated: 2009-08-31 15:32:07 UTC
comments: true
categories: [Blog-Cogley, Snow Leopard, productivity, D02HW, os x, EMobile, software, apple]
keywords: Snow Leopard,productivity,D02HW,os x,EMobile,software,apple
tags: [Snow Leopard,productivity,D02HW,os x,EMobile,software,apple]
---
 

I just installed Snow Leopard OS X 10.6 with no problems after getting a replacement for a bad Family Pack install disk (the Shibuya Apple Store said that many people reported the same), and found that my **EMobile Huawei D02HW** USB Wireless Dialup card, which was fine in Leopard, _died when Snow Leopard was installed_. 


### Reinstalling the EMobile Huawei D02HW on Snow Leopard



Here's how I fixed it: 





Deleted /Applications/EMobile D02HW Utility.app.


Deleted /System/Library/Extensions/HuaweiDataCardDriver.kext


Deleted Huawei folders and files in /System/Library/Modem Scripts and in /Library/Modem Scripts


Emptied the Finder trash.


Rebooted the system.


On plugging in the USB Modem, the system mounts it in Finder as a USB memory. Ran the installer EMobile D02HW Utility.app and got an error regarding AutoOpen. Bypassed this by opening the installer package via "Show Package Contents" in Finder, and ran the Contents/Resources/EMOBILE_D02HW_Drv_App.pkg, which is the actual installer. Now it runs with no errors. AutoOpen be damned.


After the install, rebooted again.


After the reboot, I can add the Huawei Mobile modem in Network Preferences. Phone number for these devices is "*99***1#", user name em, password em.





I read a report that you can simply change tone to pulse dialing in the existing Huawei Mobile settings (from Leopard, for instance), so maybe the failure just has something to do with a plist not working somewhere and changing that setting refreshes it, but removing and reinstalling works fine too. 


Give it a try if you have trouble, and I hope this short tip is helpful for someone. 

