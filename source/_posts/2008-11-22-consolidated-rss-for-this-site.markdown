---           
layout: post
post_title: "Consolidated RSS for this Site"
date: 2008-11-22 14:44:56 UTC
updated: 2008-11-22 14:44:56 UTC
comments: true
categories: [Blog-Cogley, Web, Popular]
keywords: feed43,productivity,consolidated rss,subscription,html scraping,subscribe,yahoo,feedburner,web applications,rss,yahoo pipes
tags: [feed43,productivity,consolidated rss,subscription,html scraping,subscribe,yahoo,feedburner,web applications,rss,yahoo pipes]
posticon: default
cover: /images/Rick_Casual_01.jpg
description: Post on consolidated RSS feed for this site, by Rick Cogley.
published: true
---
 

[](http://www.flickr.com/photos/81796435@N00/3049540073 "View 'Consolidate RSS Feeds via Yahoo Pipes' on Flickr.com")I have RSS feeds from all different sources - my blogs, my topics Glossary, Flickr, SmugMug, Facebook and so on, and I imagine that this is not an uncommon problem for people using the latest technologies and social networking sites. I wanted a way to let visitors subscribe to the updates of my personal site, without complexity, and via either [RSS](http://en.wikipedia.org/wiki/RSS) if they are familiar, or, via the old standard email. 


### How to Consolidate your RSS Feeds and Allow Subscriptions



_Here's how I combined the RSS feeds_ from all my various sites, and static pages, into one consolidated feed: 





Create a [Yahoo Pipe](http://pipes.yahoo.com/pipes), drag the "Fetch Feed" object onto the canvas and connect it with the Pipe Output object. Add all your feeds to the Fetch Feed object.


Create an RSS feed from my site's static [cycling training log](http://rick.cogley.info/goodies/reference/cogley-cycling-training-log.php), using [FEED43.com](http://feed43.com), and add the resulting feed to the Yahoo Pipe. 


Save and publish the Yahoo Pipe, and add its address to [FeedBurner](http://www.feedburner.com).


Use the incredible amount of settings on FeedBurner to customize your feed.


Copy the HTML for the subscription form from FeedBurner to an appropriate part of your site.





In the end, I added my blog feeds, my FAQ feeds, my Flickr feed, my glossary entries feed, and the special "scraped" feed via Feed43.com for my cycling records, to the Yahoo Pipes pipe, to have a single feed with all my updates in it. You can [subscribe here](http://rick.cogley.info/subscribe). 




















[![Feed43 Extraction Rules for Cycling Training Log](http://farm4.static.flickr.com/3169/3050390542_ed29279ae1_t.jpg)](http://www.flickr.com/photos/81796435@N00/3050390542 "View 'Feed43 Extraction Rules for Cycling Training Log' on Flickr.com")

