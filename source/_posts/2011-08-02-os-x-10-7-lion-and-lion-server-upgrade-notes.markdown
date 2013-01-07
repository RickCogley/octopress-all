---           
layout: post
title: "OS X 10.7 Lion and Lion Server Upgrade Notes"
date: 2011-08-02 23:50:19 UTC
updated: 2011-08-02 23:50:19 UTC
comments: true
categories: [Blog-Cogley, Technology, Software, Upgrades]
keywords: Snow Leopard,10.7,os x,software,upgrade,Lion,apple
tags: [Snow Leopard,10.7,os x,software,upgrade,Lion,apple]
---
 


In this post I will share my notes on the upgrade from OS X 10.6 "Snow Leopard" to 10.7 "Lion". This is not meant to be a comprehensive review but I hope someone can find some benefit in this information. I am an early adopter in most cases and a software lover (fanatic or addict might be a more appropriate adjective!), so I bit the bullet for this upgrade as soon as I could get it, knowing that I would be in for some trouble here or there. As for my background, I am a technologist mostly on the management side these days but do have a clue, and since I am not doing OS X or iOS development nor did I have time to read too much about Lion before the release, these notes represent fairly fresh eyes on the product.




Generally, my upgrade from 10.6.8 to 10.7.0 went smoothly and without trouble. Developers of the software I use were on the ball, and had apps ready for Lion either off their sites or in the Apple App Store. Kudos to them and to Apple for all the hard work. Make no mistake, software is truly hard work, and to make things appear easy and to "just work", like Apple often does, requires massive effort. If it looks easy, the guts of it are hard, in the world of software. There are no magic wands, although it might appear that way.


## OS X 10.7 Lion



I thought the download would take forever, but it was relatively quick after making the payment in the App Store. I feel the low price is more than fair; generous even, given the value provided. I did two systems: my home system and my work system, paying for those separately. The morning download at about 7AM JST was fast, while the late afternoon download at the office was slower. Either way, it is a 4GB download.




I retrieved the file that had downloaded to the /Applications folder, before I clicked "Install", for safekeeping, and copied it to a USB stick. There is a way to convert a USB to a bootable disk to use for reinstallation, so I will revisit and do that later.




After clicking Install, the time to install was similar to past experiences with OS X upgrades. Breakfast eaten and paper read, I went back to look, and the system had rebooted into a login screen with a nice-looking "textile" background; very attractive. I used my usual account to log in, and after some grinding of gears (caches and such being created I imagine), everything pretty much came up as expected.




After the install and logging in, my first impression was that this release is a definite paradigm shift towards a more iOS like experience on OS X, given features like Launchpad and Mission Control. These take over a bit of the market share for small development houses making utilities to do a similar thing albeit in a more advanced manner. QuickSilver, LaunchBar and Spaces come to mind.




Some apps do conversions the first time you start them, like Mail and maybe Calendar. This takes a while especially if you have a massive amount of data stored.




Spotlight re-indexed after the first reboot, causing a temporary loss of Spotlight search and, full text search within Mail, for example, while the index process grinds away. Spotlight has been glitchy in the past for me, but this time "it just worked."




Lion has a monochrome palette, looking at the mostly-grey icons in Mail, Finder and Safari. Colorful icons are still present in the Launchpad and Mission Control apps. Then there are the iCal and Address Book apps which look out of character, looking like the objects they represent: iCal like a physical calendar complete with a torn paper edge and Address Book looking like an old-fashioned scheduler portfolio. They look good, but a bit out of place when compared with Mail, Finder or Safari.




Mail.app has really matured well with the Lion release, and has sharp-looking grey-on-grey icons. The problem for me is, I like to rely on color as a visual clue for speed while I work. I suppose one way of looking at it is, there are few distractions from the task at hand, and the monochromality of certain apps make it easy to concentrate on the work being done rather than on colorful icons.




Two of the key new-to-Lion features, LaunchPad and Mission Control, are very iOS-like and easy to use. For instance, to get into Mission Control, which lets you administer and move between spaces, you swipe four fingers upward on the trackpad. This is assuming you have one either on a Laptop like a MacBook Pro, or a Magic Trackpad, but I think we are in the middle of a bootstrap to make OS X very much a touch-centric OS.




An example of a really large "who moved my cheese" moment, and whopping big paradigm shift, is the scroll bars or lack thereof. Lion has the ability to allow any app that is programmed to take advantage of it, to run full screen. This looks fantastic, in apps like Mail, Safari, and even the Mars Edit edtor I am using to write this post. Further, the scroll bars do not appear by default a la iPhone and iPad (i.e., iOS), giving a very clean look to Lion apps, in general. Despite the relative hysteria over this predictable Apple shift (I mean, how many times have they done it in the past?), I am not finding it to be a problem at all. You just swipe two fingers on the trackpad to scroll, or for the trackpad-deficient, you can nudge your scroll button on your mouse. If you jiggle the trackpad with two fingers for instance, the scrollbars appear, and you can then drag-scroll as before and always.




The concept of scrolling itself has changed too, and this takes a bit of getting used to. On a tablet or phone, the touch paradigm means you push or pull the objects in the direction of the movement of your fingers, swiping and pinching. However, this is the opposite of what you might be used to, where pulling down on a scroll bar moves content up. With a touch device, this is the opposite, and so it is with OS X Lion. You pull or push the object (document, list, etc) with your fingers on the trackpad.




Safari has a neat visual indicator of download progress, to the right of the address bar.




Suspending with Option-Command-Eject is faster than ever. Where Snow Leopard was taking ages to go silent, Lion goes to sleep immediately. Perhaps this is due to all the various improvements in automatic file saving and caching?




After restarting a program, Lion remembers the exact state of it, and reopens the program how you left it. If you had 10 text files open, it will open them all back up the next time. I can see this might be annoying, but, it is really nice in many cases.




So far, I really like Lion. As I observe more, I will update this post.


### Updates 24 July 2011



When you cmd-click a link in Safari, it now does the right thing and opens the tab next to what you were looking at, instead of way, way over in right field. I like it.




If you use Path Finder, note that it messes with Mission Control. I am not sure what I need to do yet, but I had to keep searching for the open Path Finder window in its Windows menu.




The upper-right hand "lozenge" icon is gone, having been replaced by the full screen icon. It was useful to quickly cycle between different views of the icon bar in any given application, if you option-click it. RIP.




The stop light icons in the upper left of any window seem to function the same, but they are smaller and daintier.




Pressing option while clicking a menu still works to bring up hidden options.




A lot of text-to-speech voices were added and are available as optional downloads. Check out the Speech preferences panel.


### Updates 3 Aug 2011



Finally, a security basic has been improved, in that you can easily set your mac to lock after screen inactivity or screensaver activity. System Preferences, Security and Privacy, General.




An irritation is, Lion spell-checks everything everywhere automatically, making it a bit difficult to type, sometimes. It is the iOS paradigm for sure. You can toggle this in System Preferences, Language and Text, Text, Correct Spelling Automatically. It requires a restart.




 


## OS X 10.7 Lion Server



Luckily, my firm was not making use of too many of the features of Snow Leopard Server, or this upgrade would have been really painful. When I upgraded to Lion Server, a lot of stuff just broke, unfortunately, but more on that below.




When you go to buy Lion Server from the App Store, you are told that both programs need to be purchased, and it is just as easy as the client to install. XCode and the Lion Server Administration tools are available as separate downloads. When you download XCode, despite the fact that it is put into /Applications, you still need fo find and run the XCode install program.




You can still use Workgroup Manager and the Server Admin app, but Lion presents the Server app as the primary admin tool. The problem with this is, the Server app is overly simplistic. Where as Server Admin had many settings, Server.app has only 1 or 2 per service, and not all services came through the upgrade unscathed.




My firm was primarily using Open Directory, Apache, Wiki, Mail, MySQL, and some development tools on our Snow Leopard server. Some problems occurred with each:




**Open Directory **- some user IDs broke and I had to recreate them.




**Mail Server **- Lion is still using postfix, but, the upgrade broke our aliases in /etc/aliases. When I told postfix how to find the aliases file, in main.cf, mail started to flow again. That being said, there is nowhere to add virtual domains and so on and so forth, like you could do with Snow Leopard Server.




**Apache** - the virual hosts settings do not work, and I lost a whole range of websites in this. Virtual Hosting is the most basic thing, so it was a shame that Apple could not get this one right.




**Wiki** - the wiki is now being served out of the postgresql database (user collab, db collab), instead of out of the Collaboration folder. Further, the looks have been generified so you no longer have the ability to customize each wiki. However, I would say the usability of the wiki went up considerably from an editor standpoint. We still cannot edit the Wiki pages using an iPad.




**MySQL** - is no more, though I imagine you can install it some how. Lion server comes with PostGreSQL rather than MySQL but there is no GUI for it at all. You are stuck with psql or perhaps Tuples.app.




My feeling is, Apple are aiming Lion Server at the SMB market, and shutting out businesses that really want to push the envelope on Lion Server.




If that is the case, is it not strange to have so many troubles upgrading, or to have no easy way to back up the wiki, without hiring a tech to assist.


### Updates 3 Aug 2011



Setting up notifications on the wiki was difficult, because apparently the wiki recognizes only its own hostname. Perhaps I misunderstood something, but for me, entering preferred addresses for each user did not work. I had to use username@my.host.name.com and set up a .forward file in each home folder. Definitely not something for the uninitiated.




 


## In Conclusion

### <span style="font-weight: normal; font-size: medium;">I will add more as I discover. Hope this was helpful.</span>



 


