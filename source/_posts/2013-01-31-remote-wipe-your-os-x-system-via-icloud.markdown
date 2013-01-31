---
layout: post
post_title: "Remote-wipe your OS X System via iCloud"
posticon: default
cover: /images/Rick_Casual_01.jpg
date: 2013-01-31 09:41
comments: true
description: Post on remote wiping your OS X system using iCloud, by Rick Cogley.
keywords: osx, remote, wipe, icloud, backup, arq, superduper, dropbox
categories: [Blog-Cogley, Tips, Troubleshooting]
tags: [osx, remote, wipe, icloud, arq, superduper, dropbox]
published: true
related_posts:
  - {title: "Happy SuperDuper!, Happy", url: "2011/01/08/happy-superduper-happy/"}
  - {title: "Set MBR Correctly for Successful Time Machine Backup", url: "2010/02/12/set-mbr-correctly-to-backup-successfully-with-os-x-time-machine/"}
  - {title: "Turbulence during iCloud Restoration", url: "2011/10/20/turbulence-during-icloud-restoration-to-replacement-iphone-4/"}
---

_Concerned about losing your Macbook Pro or Air at the airport or at a bar? You can enable remote-wiping, via iCloud. Read on to find out how._

<!--more--> 

[{% img right http://farm9.staticflickr.com/8051/8431560460_63f417c9b5_d.jpg 300 'Click to view on Flickr: Prep for remote wipe of OS X System.' 'Screenshot of OS X iCloud remote wipe setup.' %}](http://www.flickr.com/photos/rickcogley/8431560460/)Apple has made it relatively simple to remotely wipe your Mac, in the same way that you can remote-wipe an iPhone or iPod. There are enterprise suites like Casper that give an advantage in a large environment, but for small business, using the included tools makes good sense. 

To prepare for remote OS X wiping via iCloud: 

* Be ready with your iCloud account, and link your Mac to it, in System Preferences, iCloud, if you have not done so already. 
* Turn on wifi, because this is how the Mac will send its location to iCloud. 
* In System Preferences, iCloud, enable "Find My Mac" by toggling the checkbox on.
* Close System Preferences.
* In Safari, log into the [iCloud website](http://www.icloud.com), then in "Find my iPhone", confirm you can see your Mac on the map. Click the "Devices" button to see a list. 

[{% img right http://farm9.staticflickr.com/8232/8430490733_837ab27325_d.jpg 300 'Click to view on Flickr: Remote wipe an OS X System via iCloud.' 'Screenshot of remote wiping a system via Apple iCloud.' %}](http://www.flickr.com/photos/rickcogley/8430490733/)Then if the unspeakable happened, and you lost your Mac and need to perform a remote wipe, here's how to do that: 

* In Safari, log into the [iCloud website](http://www.icloud.com), then click "Find my iPhone". 
* Click the "Devices" button, and then click your Mac.
* A popup will appear with a button to wipe the system, and you can click that to initiate the wipe. 

I did not try this yet (luckily I have not had to), and it goes without saying that you must have good backups in case you need to perform a drastic step such as remote-wiping your system. For your reference, I use these systems for my backups: 

* [SuperDuper!](http://www.shirt-pocket.com/SuperDuper/SuperDuperDescription.html) - I use the [Godsend SuperDuper!](/articles/2011/01/08/happy-superduper-happy/) to take a nightly backup to a direct-connected Thunderbolt drive. 
* [Arq](http://www.haystacksoftware.com/arq/) - Arq backs up certain folders on my system incrementally to Amazon S3 and Glacier. Both of these options are inexpensive, but backups to S3 are immediately accessible, whereas backups to Glacier require you to wait a few yours for restoration. 
* iCloud - I back up my iPhone and certain OS files, like bookmarks, to iCloud. 
* DropBox - I use DropBox for backup of certain file types, that I feel comfortable putting on a cloud system. 

I hope you find this useful. Please let me any feedback in the comments or in your own blog post. 

