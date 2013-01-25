---           
layout: post
post_title: "Color Management in Flock (and Firefox)"
date: 2009-04-29 09:50:47 UTC
updated: 2009-04-29 09:50:47 UTC
comments: true
categories: [Blog-Cogley, Photography, Tips, Software]
keywords: productivity,photography,color profile,tutorials,tip,flock,tips,software,tutorial,icc,Firefox
tags: [productivity,photography,color profile,tutorials,tip,flock,tips,software,tutorial,icc,Firefox]
posticon: default
cover: /images/Rick_Casual_01.jpg
description: Post on color management in Flock and Firefox, by Rick Cogley. 
published: true
---

If you use anything but IE 7 you are still out of luck, but Safari users have had this functionality for quite a while. I refer to "[color management](http://en.wikipedia.org/wiki/Color_management)", which is the concept of adjusting the color properties of devices, like displays, monitors, printers or scanners, so that colors mean the same thing across devices, and more importantly look the same. The adjustment can be done in the operating system itself, which is what Mac OS X does (and one reason it is superior to Windows), or via _International Color Consortium_ "ICC" [profiles](http://en.wikipedia.org/wiki/ICC_profile) and other software trickery. 


Let me keep it very simple for this post, though. If you use Flock, which is at the time of this writing based on Firefox 3, or Firefox 3 itself, color management is **disabled by default**. However, you can easily enable color management, so that photos on photo sharing sites like Flickr or SmugMug will render with the color profile embedded in the photo, which usually means they will look much better than the default, using no profile. In my opinion, these days you _will get far better results_ by turning color management on, in your Flock or Firefox 3 browser. 


### How to Enable Color Management in Flock or Firefox 3



The easiest way to enable the settings is by using the [Color Management Addon for Firefox](https://addons.mozilla.org/en-US/firefox/addon/6891) which will work in Firefox and should work in Flock. Alternatively, you can enter the secret "about:config" code in your address bar (where you type the URL), and enable color management yourself:  


about:config


Be very careful about what you change in here, because you can break your browser easily. That said, scroll down until you find: 


gfx.color_management.enabled 


gfx.color_management.display_profile


You can double click _gfx.color_management.enabled_ to enable Firefox to use whatever profile is embedded in the photo you are viewing, and, you can specify an ICC profile by entering its path in the _gfx.color_management.display_profile_ parameter. If you are not sure what that means, just enable _gfx.color_management.enabled_. 


Restart Flock or Firefox, and you should get much better colors on sites like Flickr or SmugMug. Finally, please check out Deb Richardson's [excellent introductory post](http://www.dria.org/wordpress/archives/2008/04/29/633/) on this topic, for a clear depiction of the difference of using profiles or not, and how different applications render color. Don't waste time with color management turned off - turn it on now and **enjoy** much richer color. 

