---           
layout: post
post_title: "Plaxo Outlook Sync Now Fee-based, going DavMail"
date: 2009-08-03 07:26:02 UTC
updated: 2009-08-03 07:26:02 UTC
comments: true
categories: [Blog-Cogley, Tips, Software, Web]
keywords: Snow Leopard,DavMail,Sync,Plaxo Premium,Plaxo
tags: [Snow Leopard,DavMail,Sync,Plaxo Premium,Plaxo]
posticon: default
cover: /images/Rick_Casual_01.jpg
description: Post on going DavMail when Plaxo became fee-based, by Rick Cogley.
published: true
---

_Despite its once-poor reputation, I have been using **Plaxo** to keep my iCal and Exchange calendar sync'ed as well as a way to keep in touch with business contacts. I've been syncing using the Plaxo Outlook client on an old clunker of a Windows box at work, to go Outlook to Plaxo, and also using the Plaxo iCal client on Mac OS X, to go iCal to Plaxo. It also works to sync Address Book entries._

<!--more--> 

[<img class="right" src="http://farm3.static.flickr.com/2054/3784473088_5c566e77f2_m.jpg" />](http://www.flickr.com/photos/81796435@N00/3784473088 "View 'DavMail Gateway Settings' on Flickr.com")
My goal in using Plaxo was to be able to use the Mail and iCal software in OS X, and not MS Entourage. I dislike Entourage because it puts your mail, calendar and address items in a single large monolithic database. Hard to back that up, and, it gets really, really large after a while.  


At any rate, that setup working around Plaxo has worked well for me, but last week as of 30 July 2009, Plaxo changed tacks and will start charging for the Outlook sync services. This is part of the announcement email they sent me: 


> ### Act now: keep your Outlook Contacts in sync



Outlook sync will become part of Plaxo Premium effective July 30, 2009. This change will allow us to continue to invest in the development and support of this valuable (but high-cost) feature. In order to continue syncing your Outlook address book and calendar via Plaxo, you'll need to upgrade to Plaxo Premium. 


If you act before July 30, you can lock in a 20% lifetime discount on Plaxo Premium. You'll get Plaxo Premium for $47.95/year, a $12.00/year savings off the regular $59.95 annual subscription price. In addition, you can try Premium, risk-free, for 30 days. 


Of course, I appreciate that Plaxo might quite reasonably want to charge for sync, since it's got to be one of the most difficult things to do, programmatically. Lots of variables and expensive to maintain. Not being interested in _yet another subscription service_ however, I decided to re-visit the topic and see if I could find a way to sync for less coin than that. I assume that since iPhone OS 3.0 supports connectivity to Exchange, that native Exchange connectivity for OS X iCal cannot be far behind. 


Meanwhile, however, to have this iCal:Exchange sync while we wait for Snow Leopard, one can make use of the excellent open source project "[**DavMail**](http://davmail.sourceforge.net/index.html)." This is a simple app you start at login and keep running, that brokers connections between IMAP, CalDav and LDAP clients, and an Exchange server. You set it up for your platform, which in my case was [Mac OS X](http://davmail.sourceforge.net/macosxsetup.html), and then set up your Calendar, Mail and Directory so they access ports on localhost, your local machine. 


DavMail sits there listening for the connections you set up, and it then talks to your Exchange server as though it were an Outlook Web Access server. Pretty slick, and it uses only about 70MB of memory and hardly any CPU on my system. 


If it crashes and burns, I'll let you know in an update. **Enjoy**! 

