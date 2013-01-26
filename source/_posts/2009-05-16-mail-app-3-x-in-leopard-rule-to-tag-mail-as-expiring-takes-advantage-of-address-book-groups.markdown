---           
layout: post
post_title: "Mail.app 3.x in Leopard - Rule to Tag Mail as \"Expiring\" Takes Advantage of Address Book Groups"
date: 2009-05-16 06:10:04 UTC
updated: 2009-05-16 06:10:04 UTC
comments: true
categories: [Blog-Cogley, Software, Upgrades, Tips, Efficiency]
keywords: filter,mail.app,entourage,monolithic,scripting,apple,sort
tags: [filter,mail.app,entourage,monolithic,scripting,apple,sort]
posticon: default
cover: /images/Rick_Casual_01.jpg
description: Post on migrating from Entourage to Mail.app and adding rules to sort mail, by Rick Cogley.
published: true
---
 
_As a New Year's project, besides biking a lot up and down along the Sakai River on my new Centurion, I decided to try switching from Entourage 2004 and its monolithic mail store file, to the Mail.app that comes with OS/X Leopard and use Gmail IMAP. Here's what I did:_

<!--more--> 

One thing I have set up in Entourage is a rule that runs an AppleScript to search a long list of sender email addresses from which comes mail I want to mark as "Expiring". These are newsletters, RSS newsfeed updates and other information that I don't necessarily want to keep, but want an easy way to find for later deletion. <br /><br />Mail.app's rules work fine, but, once you get past 10 or 15 criteria lines inside a given rule, you cannot add more because the panel being used does not scroll as you can see [here](http:///). I was going to rewrite my original Entourage script that I was triggering for every message:<br /><br /><span style="font:12px Courier, mono; ">tell application "Microsoft Entourage"<br />&nbsp;&nbsp;&nbsp; <br />&nbsp;&nbsp;&nbsp; set theMsg to item 1 of (get current messages)<br />&nbsp;&nbsp;&nbsp; set theAddress to the sender of theMsg<br />&nbsp;&nbsp;&nbsp; set theAddressString to the address of theAddress<br />&nbsp;&nbsp;&nbsp; set theName to the display name of theAddress<br />&nbsp;&nbsp;&nbsp; set theSubject to the subject of theMsg<br />&nbsp;&nbsp;&nbsp; set theTargetCategory to category "Expiring"<br />&nbsp;&nbsp;&nbsp; <br />&nbsp;&nbsp;&nbsp; --List of mail addresses to check<br />&nbsp;&nbsp;&nbsp; set fromList to {"postmaster@somedomain.com", "news@bigcorp.com", "announcement@garageco.com"}<br />&nbsp;&nbsp;&nbsp; <br />&nbsp;&nbsp;&nbsp; if fromList contains theAddressString then<br />&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; set category of theMsg to theTargetCategory<br />&nbsp;&nbsp;&nbsp; end if<br />end tell<br /><br /></span>... and try to use this method for all mail that comes in and is processed by Mail.app. However, it occurred to me that I could simply add all senders to my address book, put the ones I want to mark as Expiring in an Address Book group, then run a rule to check that. <br /><br />Turns out that Address Book is indeed well integrated and there are rules you can use. In addition, to have the ability in Mail.app to "tag" messages like you can do already in Entourage 2004 via its Categories, the excellent [MailTags](http://www.indev.ca/MailTags.html) comes to the rescue, so that you can keyword each message you are marking. <br /><br />Here are the steps: <br />- In Address Book, add a group, say, "Expiring". 
- In MailTags preferences in Mail Preferences, add the keyword "Expiring". 
- In Mail.app, open Mail preferences and open the Rules pane. Add a new rule and give it a name like Expires. 
- If "Any" of the conditions is met, choose "Sender is a Member of Group" and the group name "Expiring". 
- Perform the following actions: choose "Set color of message" "of background" or "of text" and a color to indicate that the message is Expiring. 
- Next action: "Set mailtags keyword" then "Add" then "Expiring". 
- Next action: "Stop Evaluating Rules" if appropriate. 
- Save and test. 
<br />Because you have the keyword "Expiring" now in the headers of messages that trigger this rule, you can use a smart folder in Mail.app to view all expiring messages and make a human decision on what action to take - delete or archive. <br /><br />