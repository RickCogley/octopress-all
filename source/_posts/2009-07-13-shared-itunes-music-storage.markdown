---           
layout: post
post_title: "Shared iTunes Music Storage"
date: 2009-07-13 05:18:29 UTC
updated: 2009-07-13 05:18:29 UTC
comments: true
categories: [Blog-Cogley, Tips, Software]
keywords: productivity,Library,iTunes,software,10.5.7,apple
tags: [productivity,Library,iTunes,8.2,software,10.5.7,apple]
posticon: default
cover: /images/Tech_Square_300x300-bJRC00909.JPG
description: Post on sharing iTunes storage within your family, by Rick Cogley.
published: true
---

_My family has a shared iMac G5 running Leopard OS X 10.5.7 and iTunes 8.2 (both the latest as of 13 July 2009), and recently I noticed we were running low on disk space, so I did some digging via du at the command line. I found that we were eating space by ingesting CDs into iTunes, which would get copied to our respective local user folders. After a little research, I found the [Apple KB article](http://support.apple.com/kb/HT1203) that describes how to have a single storage location for music, so I set that up and made some other discoveries in the process. I thought I'd share how I did it._ 

<!--more--> 

{% img right /images/Tech_Square_300x300-bJRC00909.JPG 'Guts inside of PC system.' 'Image of the inside of a PC system.' %}To determine **what folder is using what space**, you can use the "du" command in the Terminal. After you do a "sudo bash" to set the Terminal to root access, you can do a "cd /Users" and then a "du -hsc *" to check sizes of all the user folders under /Users.


To **find a location** where your family's music can be shared, you need either a folder on an external drive or somewhere on the default internal drive. For now, we chose /Users/Shared/Music.


**Confirm where files are located** by selecting a song, and pressing cmd-I. In Summary, you'll see the path of the song in the "Where" section.


**Create the Music folder in /Users/Shared** and set its permissions so all users can see it. If it is not set already you can do this via the cmd-I "information" interface for the folder, or, using chmod from the Terminal.


In the first user, change the "**iTunes Music Folder Location**" in iTunes Preferences, Advanced. Also in Preferences, make sure "Keep iTunes Folder Organized" and "Copy Files to iTunes Music Folder when adding to Library" are checked. OK out of Preferences.


Next do File, Library, **Consolidate Library**, which copies any files outside the shared library into the library's location, which is now /Users/Shared/Music. This takes a while for large libraries, and will move not only the files from your original iTunes library location, but also any files that you had dragged in from Downloads or the Desktop, for example. 


After consolidation completes, confirm where your song files are located by selecting a song, and pressing cmd-I. In Summary, you'll see the path of the song in the "Where" section. It should now be **/Users/Shared/Music** or wherever you specified in Preferences.


Now, you are ready to **share with other users**, but before you do that, go to iTunes Preferences, Advanced, and turn off "Copy Files to iTunes Music Folder when adding to Library", remembering to turn that back on if and when you consolidate again.


Prove that CDs will add to the right location by importing a CD, and confirming where the song files are located (cmd-I on the song file).


**Log into another user**, start iTunes, and repeat the location set, library consolidation process. Import a second CD into this second user's library, and confirm it is saved in /Users/Shared/Music.


**Return to your original user**, and to add that CD the second user added to your library, do "File, Add to Library" and choose /Users/Shared/Music. By choosing the root of your library, iTunes will check what has not been added, and add it. Your original user should now be able to find the second user's CD in his or her library.





With this method, each user maintains their own ratings and playlists, but there's a slight delay each time someone adds a CD or downloads from the iTunes Store, because you have to "refresh" the library in File, Add to Library. 


I hope this helps someone understand what they have to do to share music amongst family members and avoid eating up disk space. **Enjoy!** 

