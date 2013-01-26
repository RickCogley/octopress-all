---           
layout: post
post_title: "How to - Remove Leopard Wiki Mailing List Spam"
date: 2009-05-16 06:10:06 UTC
updated: 2009-05-16 06:10:06 UTC
comments: true
categories: [Blog-Cogley, SysAdmin, Software, Tips]
keywords: productivity,tutorials,os x,software,mail,leopard,terminal
tags: [productivity,tutorials,os x,software,mail,leopard,terminal]
posticon: default
cover: /images/Rick_Casual_01.jpg
description: How to remove OS X Leopard Server Wiki Mailing List spam, by Rick Cogley. 
published: true
---
 
If you have group mailing lists set up in Leopard Server, these conveniently link to the Leopard Wiki page for the group. However, spam can sully the look of your page, so you may need to perform some routine maintenance at some point. Here's how you can do this. 

<!--more--> 


SSH to your Leopard Server as admin, then "sudo bash" to log in as root. Navigate to group mailing list folder:<br /><span style="font:12px Courier, mono; "><br />bash-3.2# cd /Library/Collaboration/Groups/itsystems/mailinglist<br /></span><br />Use grep to find the mailing list pages with spam. In our example, let's say we have a lot of "spam" messages coming from the FileMaker server - announcement-type messages that have a limited usefulness by nature. These all have, say, the string "FMServer" in them, so we grep this way:<span style="font:12px Courier, mono; "><br /><br />bash-3.2# grep -R "FMServer" *<br /><br />cb90d083b749806821e589295fa79609.page/page.plist:    <string>FMServer Information...</string><br />...<br /></span><br />Copy the results to the clipboard, then search and replace in a text editor to remove the "/page.plist: <string...>" bit. Put "rm -rf" in front of each line, with no double quotes of course, then copy this block of commands to the CLI to execute. Grep again to confirm that the result is nothing:<span style="font:12px Courier, mono; "><br /><br />bash-3.2# grep -R "FMServer" *<br /><br /></span>Remove the index.db file then restart:<br /><br /><span style="font:12px Courier, mono; ">bash-3.2# rm -rf /Library/Collaboration/Groups/itsystems/index.db<br />bash-3.2# serveradmin stop teams<br />bash-3.2# serveradmin start teams<br /></span><br />You can also do "sudo serveradmin stop teams" if you are not logged in as root. The index.db is created after a few seconds, which you can confirm.<br /><span style="font:12px Courier, mono; "><br />bash-3.2# pwd<br />/Library/Collaboration/Groups/itsystems<br />bash-3.2# ls -la<br />total 6704<br />drwxr-x---  12 _teamsserver  _teamsserver      408 May  8 12:37 .<br />drwxr-x---   6 _teamsserver  _teamsserver      204 Apr  1 12:47 ..<br />-rw-------   1 _teamsserver  _teamsserver  3040287 May  8 10:55 backup.mbox<br />drwxr-x---  25 _teamsserver  _teamsserver      850 May  8 06:42 discussion<br />-rw-r-----   1 _teamsserver  _teamsserver     2074 May  8 08:53 extrainfo<br />-rw-r-----   1 _teamsserver  _teamsserver   377856 May  8 12:37 index.db<br />drwxr-x---  18 _teamsserver  _teamsserver      612 May  8 12:30 mailinglist<br />-rw-r-----   1 _teamsserver  _teamsserver     1278 May  8 12:37 metadata.plist<br />drwxr-x---   2 _teamsserver  _teamsserver       68 Apr  1 12:47 public<br />drwxr-x---   2 _teamsserver  _teamsserver       68 Apr  1 12:47 resources<br />drwxr-x---   3 _teamsserver  _teamsserver      102 May  8 06:25 weblog<br />drwxr-x---  23 _teamsserver  _teamsserver      782 May  8 06:42 wiki<br /><br /></span>Hope this how-to is helpful to someone. <br /></string...>