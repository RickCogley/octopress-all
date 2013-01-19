---           
layout: post
post_title: "Fixing Slow Snow Leopard Mail"
date: 2010-02-05 03:56:23 UTC
updated: 2010-02-05 03:56:23 UTC
comments: true
categories: [Blog-Cogley, Snow Leopard, smtp, slow, mail, send]
keywords: Snow Leopard,10.6.2,smtp,slow,mail,send
tags: [Snow Leopard,10.6.2,smtp,slow,mail,send]
---
 

[](http://www.flickr.com/photos/81796435@N00/4331757548 "View 'OS X Snow Leopard Mail SMTP' on Flickr.com")Many upgrading Mac users have reported that Mail is "slow" in Snow Leopard 10.6. There are several things you can do to remedy the situation. Here's what you can try, but please make sure you have Time Machine backing up your system, or are running an alternative like [SuperDuper!](http://www.shirt-pocket.com/SuperDuper/SuperDuperDescription.html) or CarbonCopyCloner. 


### Reset SMTP Mail



One thing that sharp users observed on Apple's forums was that newly-created Mail accounts were not experiencing the slowness to send, that upgraders were commonly experiencing. You _can_ export your mail, recreate your accounts and re-import everything, but another way to mimic creating a new account is to re-set SMTP credentials. It's a bit voodoo, but it seems to work. 





In Mail app open Preferences, choose the Account you are having trouble with, and then choose "Edit SMTP Server List" from the "Outgoing Mail Server (SMTP)" drop down, in the Account Information panel. 


Select the SMTP server you are using, and re-enter its credentials.


Click OK to Save.





Do this for all your SMTP servers, and remember you can always use Keychain Access to confirm saved passwords. 


### Vacuum That Index



Mail keeps an index of your messages in a sqlite database, and you can "vacuum" that index regularly to compact and clean up. This is especially useful if you regularly delete mail, and is well-documented on various Mac-related web sites. _Quit mail_, then from Terminal, run these commands. 





yourhost:~ youruser$ ls -lah ~/Library/Mail/Envelope\ Index 


yourhost:~ youruser$ /usr/bin/sqlite3 ~/Library/Mail/Envelope\ Index vacuum;


yourhost:~ youruser$ ls -lah ~/Library/Mail/Envelope\ Index 





The bookend "ls" commands just show how large your Envelope Index is in megabytes, so you can see the before and after, when running the vacuum command. The middle sqlite3 command vacuums the index. For reference, recently vacuuming my mail envelope index required about 10 minutes, but reduced its size from about 70MB to about 40MB. 


### Run Cocktail



And finally for general performance, you should regularly run [Cocktail](http://www.maintain.se/cocktail/index.php). From Maintain's site: 


> 


Cocktail is an award winning general purpose utility for Mac OS X. It is a smooth and powerful digital toolset with a variety of practical features that simplifies the use of advanced UNIX functions and helps Mac users around the world to get the most out of their computers. Cocktail is installed at more than 200 000 computers world wide. The largest part being private individuals, but Cocktail can also be found at large international companies (Puma, Sony), educational institutions (Harvard University, University of Texas) or newspapers (The New York Times, Business Week). 


The application serves up a scrumptious mix of maintenance tools and interface tweaks, all accessible via a comprehensive graphical interface. Most of Cocktail's major features are arranged in five basic categories. In addition, a Pilot lets you clean, repair and optimize your system with one click of the button.





Cocktail's Pilot is where you can schedule commands to run. I do a weekly Cocktail run, to reset disk permissions and delete caches. It seems to keep things running smooth, but you should note that for certain system cache resets, you should restart the system afterwards. 


At any rate, I hope the above information helps someone out. **Enjoy**! 

