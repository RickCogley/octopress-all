---           
layout: post
post_title: "Exporting Google's My Maps as KML"
date: 2008-08-26 05:00:45 UTC
updated: 2008-08-26 05:00:45 UTC
comments: true
categories: [Blog-Cogley, Productivity, Web, Tips, Cycling]
keywords: leisure,productivity,export,import,cycling,google,kml,my maps,bike
tags: [leisure,productivity,export,import,cycling,google,kml,my maps,bike]
posticon: default
cover: /images/Rick_Casual_01.jpg
description: Post on saving Google My Maps as KML data to import elsewhere, by Rick Cogley.
published: true
googleplus_post: https://plus.google.com/106441590644824941284/posts/Sqh5cedyFhq
---
 
I have been spending some time making Google Maps in "My Maps", such as [this bike route](http://maps.google.com/maps/ms?ie=UTF8&hl=en&msa=0&msid=103784915361440638280.00045507229fde71c84ca&ll=35.357416,139.43985&spn=0.15596,0.360489&z=12) down the Sakai river, then along the Shonan coast, and back home.

Some applications, like Google Earth, use KML data to represent map routes. There is an easy link now, in My Maps, to click and open the map directly in Google Earth. But if you need the KML data for importing elsewhere, you can save it this way:

First, in one of your maps in Google My Maps, copy the URL for "View In Google Earth" by right clicking the link and copying the URL. On a mac, it's "copy link location".

Then in a blank browser window, enter the URL in the address bar:

`http://maps.google.com/maps/ms?ie=UTF8&amp;hl=en&amp;msa=0&amp;output=nl&amp;msid=103784915361440638280.00045507229fde71c84ca`

Now change the output by switching `output=nl` to `output=kml`. Entering the URL will give an option to save. Save the KML file somewhere on your drive, and then you can import it elsewhere.
