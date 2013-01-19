---
layout: post
post_title: "Bulk Delete Safari Bookmarks"
posticon: default
cover: /images/Rick_Casual_01.jpg
date: 2013-01-19 12:27
comments: true
description: Post explaining how to bulk delete bookmarks in Apple OS X Safari.
keywords: Safari Bookmarks Bulk Mass Delete OSX
categories: [Blog-Cogley, Tips]
tags: [Safari Bookmarks Bulk-Delete Mass-Delete OSX]
published: true
---

_OS X Safari Bookmarks can "build up" in your system for various reasons, perhaps because of iCloud sync problems, or because you imported a lot of old ones from another browser. If you are moving to a service like {% raw %}<span class="label label-success">Pinboard.in</span>{% endraw %} and want to bulk-delete bookmarks in OS X Safari, it is not immediately apparent how to do it. Find out how after the jump._

<!--more-->

###How to Bulk-Delete Safari Bookmarks###

{% img right http://farm9.staticflickr.com/8366/8393079609_1a58d9b5a6_o_d.png 400 'Bulk Delete Safari Bookmarks by Searching for a Period 2013-01-19' 'Screenshot of how to search Safari bookmarks with a period to get them all then bulk delete.' %} I recently started using the excellent high-performance Delicious-v1-compatible [Pinboard](http://pinboard.in), after quite a long stint of problems with Delicious and Diigo. I had imported a ton of bookmarks to Safari a few years ago (in *Tiger*, was it!?), thinking that bookmark management in a major browser would be smooth sailing. However, the Safari bookmark interface leaves something to be desired, to say the least. I ignored the massive list of tags that I had inadvertently created. 

Since I really like my [Pinboard](https://pinboard.in/u:rickcogley), I decided to focus on using it primarily, and pare down the Safari and Chrome bookmarks to only the most essential bookmarklets and a couple choice lists for URLs I always use. When I finally got all my bookmarks loaded up in Pinboard, I started looking into how to bulk delete the ones in Safari. At first glance it appears you have no choice but to delete them one by one. 

However, you *can* search in the bookmark interface in Safari, and if you search for a common string, you can view all the ones that match that string. In some systems, search fails under 3 or 2 characters, but not in Safari. You can search for a period (a .), and it will show you all your bookmarks because they all do contain periods. Sweet! Then, just "click, shift-click", and press cmd-delete to delete them all. 

To get rid of the folders on the left (the tags), select one at the top, then you can repeatedly press cmd-delete to delete them one by one. I just held down cmd and kept tapping delete, and they were all deleted in no time. 

###Corralling Overzealous iCloud Sync###

But wait, now iCloud is trying to sync the bookmarks *back* to Safari. Here's the steps I took to ensure iCloud was not pushing down that massive original list of bookmarks. 

1. On all Macs, disable iCloud sync for Safari (System Preferences, iCloud, Safari).
1. On all iDevices, disable iCloud (Settings, iCloud, Safari OFF) and say Yes when prompted to delete bookmarks. 
1. In iTunes on all Macs syncing your iDevices, plug the device in, then make sure "Sync Safari Bookmarks" is off in the Info tab.
1. Export the bookmarks from one Mac to a file (File menu, Export), just to be safe.
1. On all Macs, delete all unneeded bookmarks using the search-for-a-period (or whatever string you like) method above, and delete all folders (tags) as well, by selecting one at the top and pressing cmd-delete 
1. Pick a Mac to be master. Enable iCloud sync for Safari and agree to merge the bookmarks. 
1. Re-enable iCloud sync on any other Macs, one by one, and confirm. You might still have problems with iCloud's tag lists and certain bookmarks being rather "sticky". I had to delete the tag lists once again, to get it to work. 
1. Re-enable iCloud sync on any iDevices, one by one, and confirm. 

A hint, if you really cannot get it syncing - 

{% raw %}<div class="alert alert-info"><strong>Note:</strong> Your live bookmarks are stored in <code>~/Library/Safari/Bookmarks.plist</code>, but if you delete this file when Safari is closed, Safari will recreate a blank one in its place when you start it up next. This is good if you want to force a sync to iCloud of a Safari with no bookmarks at all.</div>{% endraw %}  

I hope this information helps someone, but in my case, Safari is now surprisingly fast. 
