---           
layout: post
post_title: "Migrating OS X Leopard to a New \"Unibody\" Macbook Pro (Late 2008 Model)"
date: 2008-12-18 09:17:10 UTC
updated: 2008-12-18 09:17:10 UTC
comments: true
categories: [Blog-Cogley, Upgrades, Software, SysAdmin, Tips]
keywords: MA,defaults,migration assistant,migrate,os x,new hardware,leopard,move,terminal
tags: [MA,defaults,migration assistant,migrate,os x,new hardware,leopard,move,terminal]
posticon: default
cover: /images/Rick_Casual_01.jpg
description: Post on migrating OS X Leopard to a new Unibody Macbook Pro in 2008.
published: true
---
 

I got a new "unibody" MacBook Pro, since my 1st generation MBP was on its last legs with breaking display, SuperDrive, fans, after 24x7 service for nearly three years. I'll have to get Apple to look at the old one since there is still warranty left. It was quite a process to migrate from the old MBP to the new MBP, so I thought I would write a log of what I did and how I got it working. 


### Migrating OS X Leopard to New Hardware



I managed to **unbox the new MBP** without taking a lot of pictures of its unboxing. Sorry. In and out of the box it is absolutely gorgeous. The glossy display is going to be a bit of a problem outside, though. Anyway, it's one of the nicest-designed devices I have seen in a long time. 


Next **I plugged the new MBP in and started it up**. The multilingual "Welcome" video is always cool, and after that I made some of the basic settings. Remember, the first account you make should be something generic like Administrator. You can always make another account to use for yourself, later.  


### Migration Assistant (Mis)Adventures



The new MBP asked if I have a Mac, and so I said yes and **tried using Migration Assistant**. If you have done a little research on migrating OS X from machine to machine, you'll probably know about Apple's "Migration Assistant". Migration Assistant assumes: 





Your old machine has a working CD/DVD SuperDrive, because you have to install software for Migration Assistant to use to connect. 


You can connect to the other machine over your Wireless or Wired network. 





Well, unfortunately my old MBP's SuperDrive was not working, and I _could not get Migration Assistant to work_. After a few tries with MA over wired and wireless networks, I gave up and _decided to go manual_. The short story is, yes, you need to do the "CD/DVD Sharing" install it is requesting!


In the end I backed out of MA, set up the basics and set up my own rcogley account. I took care to make sure the hard drive was named the same thing as my old hard drive (Macintosh HD), and that my account's shortname was the same as the old one (rcogley). This way, the paths are the same from old to new, and applications that are sensitive to path, will not choke when you migrate them. 


### MobileMe Saves the Day



Luckily I was using MobileMe on my old MBP, so everything was backed up there. I **set up MobileMe in System Preferences**, entering my name rick.cogley@me.com and password. MobileMe proceeded to sync everything down to the new MBP, which worked quite well. That said, there was a lot of touch and go with MobileMe after some time, because I also had it syncing on the old MBP at the same time. 


I observed:





Dock items which are there by default were moved to my old MBP.


There was a question mark icon in place of my "Reveal in Path Finder" button, in Finder, since I had not yet installed Path Finder.  


After the MobileMe sync, Mail accounts, iCal accounts, Safari bookmarks, Keychain logins etc "just worked", which was nice, but, some detailed settings like whether to store Sent Mail on the IMAP server, or not, got changed.





Next time, I think the best practice would be to turn off MobileMe sync on the old MBP, then sync the new MBP with the data up on the MobileMe service. 


### Software Update



Before getting on with moving files, I **used Software Update to update to the latest Leopard OS X and other support software**. Notably, the install was very smooth and fast, unlike what often happens on a well-used OS X system. I was having to use the combo updaters from Apple, because Software Update was simply not working well on my old MBP. It was nice to see it "just work". 


### Migrate Simple Files



Once the basics were done I concentrated on **moving simple files and folders**. I copied my old account's Documents, Pictures and Movies folders. This was many gigs of files, so I just let it go over night. When it was finished, I checked to see if everything was accessible, and it was. No problems so far. 


### Migrate Mail



Mail.app got its basic setup information via MobileMe, but there was one thing I had locally and not up on the server - Sent Mail. My **"Sent Mail" was present only on the local hard drive**, so I had to find it and migrate it. Mail.app stores local mail as a numbered file with ".EMLX" extension. Previously, you could not import .EMLX files into Mail.app, so you had to use a utility to convert them to mbox and import them. However, Mail.app in Leopard has a setting in File, Import Mailboxes, to import "Mail for Mac OS X" files, which is what you need to import .EMLX files. 


My local sent mail was located in: 


``/Users/rcogley/Library/Mail/Mailboxes/Sent Messages (Gmail IMAP).mbox/Messages``


I copied the Messages folder over to my new MBP, and then used File, Import Mailboxes, Mail for Mac OS X to import the folder into Mail.app on the new MBP. It imports into a folder under "Imports" in Mail.app, and you can then copy the messages where you like. 


The rest of the mail was being downloaded from my IMAP accounts, and since I had my accounts set to not download attachments, this did not take so long. 


### Migrate Flock



I installed Flock by **downloading and installing its dmg file** in the usual way. To migrate settings from the old MBP to the new, I shut Flock down on both sides, and then copied: 


``~/Library/Application Support/Flock/Profiles``


``~/Library/Application Support/Flock/Profiles.ini``


... to the same place on the new MBP, _where the ~ of course indicates your user folder_ (mine is /Users/rcogley). Restarting Flock on the new MBP, I noticed Flock works fine and even picks up my last-used tabs and bookmarks. 


### Show Hidden Files in Finder, Too



I had forgot about hidden files in my user folder, so I ran the "defaults" Terminal command to show them: 


``defaults write com.apple.finder AppleShowAllFiles TRUE``


### Migrate Settings Files



Now that hidden files were visible in Finder, I started migrating various settings files, carefully, by hand. 


Apps I will migrate or use, here:


``~/Library/Application Support``


Selected preference files: 


``/Library/Preferences``


``~/Library/Preferences``


Fonts: 


``/Library/Fonts``


PDF Services I had customized in Automator, and various other folders in my Library folder:


````


~/Library/Scripts


~/Library/Widgets


~/Library/FontCollections


~/Library/Favorites


~/Library/Saved Searches


~/Library/Dictionaries


~/Library/Internet Plug-Ins


~/Library/Input Methods


~/Library/iMovie


~/Library/Fonts


~/Library/Compositions


~/Library/iTunes


~/Library/Lockdown


~/Library/PDF Services


~/Library/Recent Servers


~/Library/ImageWell3


~/Library/Snapz Pro X


~/Library/Workflows





Be conservative on this step, and go one by one. This took the longest, because I did not want to make a mistake, but at the same time did not want to reconfigure every app I use, either. 


### Reinstall or Migrate Applications



Next, I**started migrating applications** and reinstalling in some cases. You can migrate many, if not a majority, of Mac applications from one machine to the other by copying their .app file. As long as you have their "plist" preference files and support files, you are good to go. 


As for reinstalling, I made these decisions to reinstall the following: 





EMobile wireless dialup modem, and update the software to the latest one.


Any needed printer drivers, to avoid the detritus that they often install, and to get rid of a lot of unneeded printers from 3 years of heavy, chaotic use. 


Apple professional applications like Aperture and Final Cut.


Microsoft Office 2008.


Adobe CS3.


Preference pane software such as Growl, Flip4Mac or Plaxo. (After I downloaded these, I found that they are located in /Library/Preference Panes, and you just double click to reinstall. 





Everything else, I migrated. Most apps were well-behaved on the new system, and picked up their settings and preferences without a problem. I had to reinstall Nikon software because it would not start after having been dragged and dropped across. 


### In Conclusion



There are probably many ways to do this, and, it might be quite a bit easier to just have Migration Assistant do the work for you, but again that assumes you have a working SuperDrive on the old machine. The benefit to doing things selectively like I did here is that you have a fresh OS underneath, and can get rid of a lot of baggage from years of upgrading. 


As always, I hope someone benefits from this experience. Please [contact me directly](http://rick.cogley.info/contact/rick-cogley-contact-form.php), make a comment, but most of all **Enjoy**!.  

