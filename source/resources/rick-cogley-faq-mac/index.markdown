---
layout: page
title: "Mac FAQ"
date: 2013-01-13 20:59
comments: false
sharing: true
sidebar: false
footer: true
categories: [Resources, Tips, Efficiency, Productivity]
description: This is Rick Cogley's Mac FAQ.
keywords: Rick Cogley,mac,faq,configuration,questions,answers,apple,macintosh
tags: [Rick Cogley,mac,faq,configuration,questions,answers,apple,macintosh]
published: true
---
I believe the Mac platform is the best available, since switching in 2005. Although corporations use Windows mostly, still, I personally want to use an interface that I love and _want_ to use. It can be confusing at first for a user switching from Microsoft Windows, so I put together this FAQ. _I hope it helps someone._ 

###How do I run an application at logon?

Press and hold the icon in the Dock, and select "Open at Login" or, click on the account icon next to the spotlight icon in the toolbar, and choose Account Preferences, and then Login Items in the window that appears. 

###How do I stop or "kill" a running application?

For applications you can see in the Dock, press and hold the icon while holding down the option key, and select "Force Quit." 

For background applications, use Activity Monitor, which is an application similar to Task Manager in Windows. 

Or if you are Terminally minded, use the `ps` and `kill` commands in Terminal, going to OS X's Unix roots. 

###Is regular maintenance necessary with a Mac?

Yes, you should at least repair permissions regularly, there are several tasks that OS X just runs for you daily, weekly and monthly, but to do some of the more esoteric cache-cleaning and the like, I use the excellent [Cocktail](http://www.maintain.se/cocktail) from Maintain. [OnyX](http://www.titanium.free.fr/downloadonyx.php) from Titanium software is also available. 

###What printer should I use with a mac?

This is probably a question for Apple themselves, but I have had good luck with Epson and Canon inkjets and lasers, and a friend uses Brother laser in his all-Mac office. 

###How do I uninstall applications?

On a Mac, installing applications is easy: just drag the .app file to the trash. However, this leaves some files behind, so if you really want to uninstall thoroughly, I recommend using [AppZapper](http://www.appzapper.com/) to do it. AppZapper lets you drag the .app to its window, then it finds all the associated files. It has a satisfying lazer-zap sound as well, which improves well-being. 

###How do I install an application?

Most Mac applications you install are downloaded in a "disk image" format, with a file extension of .dmg. These download to your Desktop by default, or wherever you have your downloads being saved, and you can double-click to mount the .dmg file in Finder. Then, access the contents of the file, and drag the .app file inside it, to your /Applications folder. 

There might be a shortcut to the /Applications folder within the .dmg file itself, in which case you can simply drag the .app within the .dmg, onto the shortcut. Additionally, there are often "Extras" folders in .dmg files. I copy these to /Applications, and rename them to include the name of the app. For instance, "Boinx TV Extras". 

To clean up, just drag the .dmg file to the trash. Don't run the application directly from the .dmg disk image; rather, run it from /Applications. 

A quick way to run your app in Leopard, is to use Spotlight. Just spotlight the name, and press Enter. 

###How can I sleep my Mac from the keyboard?

You can press option+cmd+eject (or F12 if there is no eject key). Remember to press and hold the eject key to make this work. Try also: 

{% codeblock Keyboard Shortcuts for Sleeping the Mac %}
control+eject - bring up restart / shutdown / sleep dialog 
option+cmd+control+eject - shutdown 
option+cmd+power - force restart 
{% endcodeblock %} 

See also my [Mac Keyboard Shortcuts](/resources/rick-cogley-keyboard-shortcuts) guide. 

###What's the deal with Apple Licensing?

For the most part Apple and other Mac developers do two flavors of licensing: Single User and Family Pack. You can pay a little more (usually about 30% +) for a Family Pack and get the ability to use it on multiple Macs (usually 5) or for multiple people as the case might be (say, with the Apple .mac / MobileMe service). 

On upgrades, Apple does not usually offer upgrade pricing, though other vendors such as Adobe do. Apple's prices are usually fairly reasonable form the beginning, so for example, when the Leopard flavor of OS X was released, Tiger owners did not get a discount just for having a license of that flavor. Instead, they have less complex pricing compared to Microsoft - one flavor for USD 150.00, for example. 

Also, one can always check if there is an academic version of whatever you are buying. MS Office 2008 has an inexpensive "Academic and Family" bundle which is perfect for home use if you are not connecting to an Exchange server at work. 

###I hate the aluminum keyboard that came with my iMac. What can I do?

It seems like it is a love-hate relationship with those new keyboards that Apple started supplying recently. If you do a search on Amazon.com in the US, an Amazon Retailer called Toyzz sells the older more typical model, and you can get nice keyboards from Logitech (the DiNovo Edge Mac version is particularly nice), Macally or Kensington. 

###Can I run my mac in both English and Japanese?

Yes, absolutely. Apple OS X has multilingual capability on a per-account basis, and you use System Preferences to set the language for your account. Much of the software for Apple is multilingual, except for Microsoft Office and other products like Expression Media. 

There are purportedly issues installing two copies of Office, one for each language, in the same Mac. They would both get installed in the Applications folder and get in each other's hair, so to speak. Other apps such as Apple iWork, or Open Office do not have this limitation. 

###Why doesn't the mouse "right click"?

Macs have traditionally had no right mouse button, and so to "right click" as you would in Windows, you press Control and click (ctrl-click). Although the traditional Mac mouse was a single-button model, modern mice like the "Mighty Mouse" or any Logitech or Microsoft model have a second subordinate button (the right one if you are a right hander). Even with a mouse with a second button, you need to tell the system to recognize it. 

To do so, click the Apple Menu, then select System Preferences. When System Preferences appears, click Hardware, then Keyboard and Mouse, then the Mouse tab. Here, you can assign your buttons, and even assign a hot key for zooming the display. Pretty cool. 

###In Mail.app, how do I switch email addresses of an Address Book card with many?

Assuming you have picked the address from the "Address Panel" in Mail, you can click on the white "disclosure arrow" on the blue lozenge indicating the address in the To: box, and choose a different address from the Address Book Card. 

###How should I backup my Mac?

As for backups, there are several aspects. OS X Leopard comes with Time Machine, which takes an archive of changed files and stores them on an external drive such as Apple's TimeCapsule or a direct-connected FireWire drive like a LaCie Quadra. 

There is an excellent application from ShirtPocket Software called "[SuperDuper!](http://www.shirt-pocket.com/SuperDuper/)" which makes a drive image of your disk to an external drive, and allows you to boot directly from that drive when there is a failure on your main drive. 

Finally, if you use Amazon S3 for inexpensive storage, you can use Haystack Software's [Arq](http://www.haystacksoftware.com/arq/) to incrementally archive to S3 or Glacier on a schedule. 

###Do I need to have Adobe Acrobat to make PDFs?

No, PDF creation is built into OS X. When you print, just click on the disclosure triangle next to the PDF button in the print dialog, and various options will come up.

{% render_time Page generated at: %}