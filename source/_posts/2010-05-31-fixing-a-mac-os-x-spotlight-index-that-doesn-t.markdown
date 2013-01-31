---           
layout: post
post_title: "Fixing a Mac OS X Spotlight Index, that Doesn't"
date: 2010-05-31 22:31:36 UTC
updated: 2010-05-31 22:31:36 UTC
comments: true
categories: [Blog-Cogley, SysAdmin, Tips]
keywords: spotlight,tip,mdutil,tips,Entire Message,cocktail,mdimporter,mail.app
tags: [spotlight,tip,mdutil,tips,Entire Message,cocktail,mdimporter,mail.app]
posticon: default
cover: /images/Rick_Casual_01.jpg
description: Post on making Spotlight index, even when she says no, by Rick Cogley. 
published: true
---

_After a spate of Mail.app problems probably related to having too damn many mail accounts and messages, I had to do the "Mail.app Reimport Samba" taking hours to let Mail.app reimport the entire mail store. After that got resolved, I found out that my Mail.app "Entire Message" selection in Search was greyed out. Did you get this and are wondering why? Read on for a clue._

<!--more--> 

[{% img right http://farm4.static.flickr.com/3399/4646311822_a389334abc_m.jpg '' 'Mail.app "Entire Message" Greyed Out' %}](http://www.flickr.com/photos/81796435@N00/4646311822 "View 'Mail.app "Entire Message" Greyed Out' on Flickr.com")This turned out to be a symptom of a problem with the Spotlight index, since this search function of Mail.app is dependent upon the Spotlight index of the hard drive where your mail is stored. Generally speaking, the Solution was to delete the Spotlight index, and then re-index the drive. However, it was not a simple process (is anything?!), and as such was very "un-Apple", so I thought I would take the time to document it.

### How to Make Spotlight Re-index Your Drive, Even When She Says No!

A.k.a., _How to Fix Greyed Out "Entire Message" in Mail.app Search_. As I was learning to do this procedure in my OS X 10.6.3 system, looking at the Apple forums and elsewhere, I observed that Spotlight was taking "forever" to re-index, while it should re-index a 500GB drive in an hour or so. When I clicked the "pulsating" Spotlight icon in the upper right of the screen (it pulsates or winks while re-indexing), I saw a message that Spotlight was calculating the time required to index the drive with a barber pole progress bar, but it was just stuck in this state for days. 

This prompted me to try various things to fix it, and no one method from any one forum ever worked for me, in practice. So, let me try to explain what _did_ work.

#### Remove the Extraneous

Disconnect any external drives and shut down any unneeded programs. 

#### Remove Unneeded Spotlight Importers

Spotlight importers which allow programs to get their output files indexed are sometimes the cause of Spotlight crashes. You can find them in /Library/Spotlight and ~/Library/Spotlight (where ~ is your home directory, of course). If you have third-party importers, especially in ~/Library/Spotlight, you can move them to another folder for safekeeping, then move them back one by one to see if the "indexing forever" problem recurs. I deleted ones that were associated with programs I never use, but kept the ones I do use. 

You can search the entire drive for the .mdimporter files, using this command. Hat tip to "Hal Itosis" (lol) on the MacFixit Forum.

`# find -x / -iname \*.mdimporter -exec ls -lndotT {} +`

#### Repair Disk Permissions

I use the excellent [Cocktail](http://www.maintain.se/cocktail) for this but you can do it in 3rd Party OnyX or Apple's included Disk Utility as well. In Cocktail, use the Disks menu, Permissions tab. Choose to Reset Permissions and ACLs for Home Directories for All Users, then click Repair. This takes about 30 mins to execute.

#### Prepare the Index

Using Terminal, use launchctl to unload the indexer by controlling the appropriate launchd command, use mdutil to turn off indexing for the root folder (the /) of the local hard drive, use rm to delete the index itself (.Spotlight-V100 in the root of the drive), and finally trash Spotlight's plist. 

{% codeblock Preparing the Index lang:bash %}
[user@system]$  sudo bash
Password: *******
[root@system]# launchctl unload -w /System/Library/LaunchDaemons/com.apple.metadata.mds.plist
[root@system]# mdutil -i off -E /
[root@system]# cd /
[root@system]# rm -rf .Spotlight-V100
[root@system]# rm -rf ~/Library/Preferences/com.apple.spotlight.plist 
[root@system]# exit
[user@system]$
{% endcodeblock %} 

To explain, note the sudo bash and exit lines, bookending the procedure. This gets you a root prompt (the #) after you enter the admin password and then exits the root prompt at the end (returning to the $ prompt). You can also use sudo before every command, to be extra safe. 

#### Clear All Caches

Noting that this part will force a reboot, again in Cocktail Files, Caches, choose Options and select all caches you can. Executing this resets the system to a state close to what you get when you install anew or do a major upgrade. Note that the system will take longer to restart because it is rebuilding caches, and applications will be sluggish the first time they restart, because they are rebuilding font caches. 

Click Clear to execute the cleaning procedure and wait while it finishes. Choose to let the system restart, but when you hear the startup chime, hold down Shift so the system _restarts in Safe Mode_. 

#### Safe Mode Index Rebuild

The system will take a while to get into Safe Mode. After you press and hold Shift while starting up, once you see the progress bar during startup (which is not present in normal mode), you can let go of Shift and go get coffee while it starts up. The login prompt will have a red **Safe Mode** in it, to alert you to the difference. 

Again in Terminal, issue some commands to rebuild. 

{% codeblock Safe Mode Index Rebuild of the Index lang:bash %}
[user@system]$ sudo bash
Password: *******
[root@system]# launchctl load -w /System/Library/LaunchDaemons/com.apple.metadata.mds.plist
[root@system]# mdutil -i on -E /
/:
Indexing enabled.
[root@system]# exit
[user@system]$
{% endcodeblock %} 

After a few minutes you should see the Spotlight icon start to pulsate, but this time, the "Calculating Indexing Time" should change to some value, and a blue progress bar, which means the indexing is actually working. You can restart into regular mode, and the indexing just picked up where it left off, for me. However, do not connect any additional drives until it is done indexing the main drive.

#### Observing and Confirming

There are a few things you can do to observe and confirm Spotlight's activities, in Terminal. This assumes you are at a root prompt. 

Check the size of the Spotlight index using du (directory usage):

{% codeblock Check Directory Size lang:bash %}
[root@system]# du -hsc /.Spot*
1.1G/.Spotlight-V100
1.1Gtotal
{% endcodeblock %} 

Note that this should be a fairly large file. If it is only a megabyte or so, something is broken or your Spotlight index is toggled off.

Check Spotlight-related processes with ps (process lister):

{% codeblock Check Processes lang:bash %}
[root@system]# ps axcru |sed '1p;/ md/!d'
USER       PID  %CPU %MEM      VSZ    RSS   TT  STAT STARTED      TIME COMMAND
root       352   0.0  2.8  3696728 117196   ??  Ss    8:44AM  24:25.73 mds
 _spotlight  6677   0.0  0.2  2532748  10292   ??  SNs   3:19AM   0:00.33 mdworker
rcogley   6664   0.0  1.2  2638620  48240   ??  SNs   3:19AM   0:02.95 mdworker
{% endcodeblock %} 

Check index status with mdutil:

{% codeblock Check index status lang:bash %}
[root@system]# mdutil -as
/:
Indexing enabled. 
/Volumes/COGLEY-WD:
Indexing enabled. 
/Volumes/COGLEY-WD/Backups.backupdb:
Indexing enabled. 
/Volumes/COGLEY-WD2:
Indexing enabled. 
/Volumes/COGLEY:
Indexing enabled. 
{% endcodeblock %} 

List open files in /System/Library related to Spotlight, using lsof (list open files):

{% codeblock Check open files lang:bash %}
[root@system]# lsof -c md |grep -v /System/Library |grep -v Spotlight
{% endcodeblock %} 

Get general system information with df and diskutil: 

{% codeblock Check general system info lang:bash %}
[root@system]# df -lh
[root@system]# diskutil info /
{% endcodeblock %} 

Show commands you have entered in the bash shell:

{% codeblock Check index status lang:bash %}
[root@system]# history
{% endcodeblock %} 

Note that if you use an alternative shell like fish, some of the above commands will not work. From fish, just do sudo bash to get a bash-based root prompt. Be sure also to check the Console GUI application in /Applications/Utilities. This will show crash information for the mdworker program, which may give you hints to what is going on. 

I hope this article helps someone, especially since this problem seems to be pretty prevalent, these days. **Enjoy**!


