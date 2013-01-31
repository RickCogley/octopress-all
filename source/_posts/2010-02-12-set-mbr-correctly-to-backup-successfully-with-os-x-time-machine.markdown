---           
layout: post
post_title: "Set MBR Correctly to Backup Successfully with OS X Time Machine"
date: 2010-02-12 00:47:28 UTC
updated: 2010-02-12 00:47:28 UTC
comments: true
categories: [Blog-Cogley, SysAdmin, Troubleshooting, Tips]
keywords: 10.6,backup,software,Time Machine,osx,mbr,partition map,apple
tags: [10.6,backup,software,Time Machine,osx,mbr,partition map,apple]
posticon: default
cover: /images/Rick_Casual_01.jpg
description: Post on setting the master boot record of a disk so it works correctly with Time Machine, by Rick Cogley. 
published: true
---

_If you use **Time Machine** on OS X, you need to ensure your target drive is formatted with the correct _Master Boot Record_ type._ 

<!--more--> 

[{% img right http://farm3.staticflickr.com/2730/4349434337_8fcfab8bc6_d.jpg 400 'Click to view on Flickr: OS X Disk Utility Partition Map' 'Screenshot showing OS X Disk Utility Partition Map.' %}](http://www.flickr.com/photos/81796435@N00/4349434337)[Time Machine requires](http://support.apple.com/kb/TS1550) either "Apple Partition Map" (works with PowerPC or Intel but is best for PowerPC) or "GUID Partition Table" (works with Intel). There are a couple of problems which lead to this requirement biting people on the you-know-where. 


* Pre-formatted drives that will work with a Mac are not often formatted with "Apple Partition Map", but will be recognized by your Mac, lulling you into a false sense of success and security.
* Time Machine rudely does not warn you that your drive has a problem. It will happily back up for a while, then fail with some not-so-useful error.
* Re-formatting a drive in the normal way using "Erase" in Disk Utility will just erase the content and not re-do the partition map. 

So, when prepping a drive for Time Machine use, you need to use the "Options" button to set the Partition Map. 


### Formatting a Drive for Time Machine Use

Here's how to set it up. 

1. In Disk Utility, select your new hard drive (the _drive_, not the partitions below it in the selection tree).
1. Select the Parition tab, which you can see in the accompanying graphic, and choose the number of volumes from the "Volume Scheme" pop-up menu. 
1. Click "Options", then choose "GUID Partition Table" for an Intel-based Mac or "Apple Partition Map" for PowerPC- or Intel-based Macs. Then click "OK" and "Apply". 


I hope this helps someone avoid the trouble I had getting Time Machine working smoothly. **Enjoy!**

