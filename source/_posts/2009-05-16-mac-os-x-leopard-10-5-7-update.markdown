---           
layout: post
post_title: "Mac OS X Leopard 10.5.7 Update"
date: 2009-05-16 00:40:13 UTC
updated: 2009-05-16 00:40:13 UTC
comments: true
categories: [Blog-Cogley, tip, os x, tips, software, 10.5.7, apple]
keywords: tip,os x,tips,software,10.5.7,apple
tags: [tip,os x,tips,software,10.5.7,apple]
---
 

I updated my MacBook Pro's OS X from 10.5.6 to 10.5.7 today, and there was a little hiccup. Here's what happened, but see UPDATES below: 





I noticed there was an update available, so I shut down all the user applications and things like ExpanDrive and Plaxo, then tried Software Update from the Apple menu. Software update started to work, then stalled at around 150 MB of 450 MB downloaded, claiming to take another 8 hours to download. It's not my ISP because everything else is fine. Everyone must be hitting the server at once. Stopped the update during the download.


Intending to use the "combo updater", which is just the full update download, I found the update on Apple's download site. There are two updaters: the [Delta](http://support.apple.com/downloads/Mac_OS_X_10_5_7_Update) Updater, and the [Combo](http://support.apple.com/downloads/Mac_OS_X_10_5_7_Combo_Update) Updater. The 450+ MB Delta is just labeled as "Update" and is for updating from 10.5.6 to 10.5.7. The 700+ MB Combo is for any 10.5, to 10.5.7. Decided to try the Delta. 


Apple Installer offers to run the updater when it downloads, so I chose to do that. It seemed to work, then offered to Restart so I did that. 


After the restart, the process froze on a blue screen with a mouse pointer.


I force restarted, then after the restart, the system auto-rebooted.


After the second restart, the expected normal grey Apple Logo screen with the progress spinner appeared. It took a long time, but it finally came to the login screen, and login was normal.


I confirmed that the system did indeed it had been upgraded, by checking Apple menu, About this Mac. It's indeed updated to 10.5.7.





When I started Mail and iCal after the upgrade, there were no "please wait while we update your database" type of messages, as there have been in the past when Apple has made database changes to these applications. 


I'm going to do an OnyX run, to clean things up and reset permissions and so on as a matter of maintenance, and I'll report back here if there are any other problems related to the update. 


### UPDATES



**13 May 2009, 23:55** - the system worked snappily all day, but this evening I got the grey kernel crash screen. The "You need to restart" in multiple languages one. Ugh. Apparently, Apple recognizes the problem and will issue a fix. Recommend waiting.  


**14 May 2009, 11:41**


The 10.5.7 update is definitely much snappier. A lot of things are running very fast. This is nice. Now, just don't crash on me again, please! 


**15 May 2009, 10:30**


Crashed after waking from sleep. Had to force reset. System worked well after that. 


**16 May 2009, 9:30**


Flock crashed and could not be force-quit. Activity Monitor would not start. Terminal kill command would not kill. 


### What's in the 10.5.7 Update



FYI, here's what Apple says is in the update: 


> 


**Address Book**


* Improves reliability of Address Book syncing with iPhone and other devices and applications.


**AirPort**


* Improves the reliability of AirPort connections, including improvements when roaming in large wireless networks with an Intel-based Mac.


**Client management**


* Improves reliability of synchronizing files on a portable home directory.


* Fixes an issue in Mac OS X 10.5.4 and 10.5.5 in which managed users may not see printers that use the Generic PPD.


* Client computers that use UUID-based ByHost preferences now respect managed Screen Saver settings.


**iChat**


* Addresses an issue that could cause an encryption alert to appear in the chat window.


* Setting your iChat status to "invisible" via AppleScript no longer logs you out of iChat.


* Resolves an issue in which pasting text from a Microsoft Office document could insert an image rather than text.


**Graphics**


* Includes general improvements to gaming performance.


* Includes graphics improvements for iChat, Cover Flow, Aperture, and iTunes.


* Includes fixes for possible graphics distortion issues with certain ATI graphics cards.


**Mail**


* Includes overall performance and reliability fixes.


* Improves Connection Doctor accuracy.


* Fixes an issue that could cause messages identified as junk to remain in the inbox.


* Fixes an issue that could cause Mail to append a character to the file extension of an attachment.


* Addresses an issue that could prevent Mail from quitting.


* Improves reliability when printing PDF attachments.


**MobileMe**


* Contacts, calendars, and bookmarks on a Mac automatically sync within a minute of the change being made on the computer, another device, or the web at me.com.


**Networking**


* Improves Apple File Service performance, especially when using a home directory hosted on an AFP server. Important: If you are using Mac OS X 10.5.6 (client) to connect to a * * Mac OS X Server 10.4-based server, it is strongly recommended that you update the server to Mac OS X Server version 10.4.11.


* Improves the performance and reliability of TCP connections.


* Improves reliability and performance for AT&T 3G cards.


* Updates the ssh Terminal command for compatibility with more ssh servers.


**Printing**


* Improves printing for the Adobe CS3 application suite.


* Improves printing for USB-based Brother and Canon printers.


**Parental Controls**


* Addresses an issue in which a parentally-controlled account could be unable to access the iTunes Store.


* Includes general fixes for time limits.


* Resolves an issue that prevented adding allowed websites from Safari via drag and drop.


**Time Machine**


* Fixes issues that could cause Time Machine to state the backup volume could not be found.


* Improves Time Machine reliability with Time Capsule.


**Safari**


* Improves compatibility with web proxy servers.


**General**


* Includes Mac OS X security improvements. See this website for more information.


* Addresses inaccuracies with Calculator when the Mac OS X language is set to German or Swiss German.


* Improves the performance and reliability of Chess.


* Improves DVD Player performance and reliability.


* Performance improvements for iCal are included.


* Fixes an issue when running the New iCal Events Automator action as an applet.


* Adds a Trackpad System Preference pane for portable Macs.


* Improves compatibility with smart cards such as the U.S. Department of Defense Common Access Card.


* Updates time zone data and Daylight Saving Time rules for several countries.


Mac OS X 10.5.7 is available via Software Update and also via standalone installers.




