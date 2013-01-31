---           
layout: post
post_title: "Fixing Aperture Vault Errors from Terminal"
date: 2010-01-24 06:23:57 UTC
updated: 2010-01-24 06:23:57 UTC
comments: true
categories: [Blog-Cogley, Photography, Software, Troubleshooting, SysAdmin]
keywords: Vault,chown,chmod,posix,permissions,cli,apvault,terminal,Package,apple,aperture
tags: [Vault,chown,chmod,posix,permissions,cli,apvault,terminal,Package,apple,aperture]
posticon: default
cover: /images/Rick_Casual_01.jpg
description: Post on fixing Apple Aperture 2 vault errors from Terminal, by Rick Cogley. 
published: true
---

_Apple's pro photo management application **Aperture 2** has a nice feature called _Vaults_, which lets you automatically back up your photo library with all metadata to an external drive or drives. Except when it doesn't._

<!--more--> 

Aperture 2 is long overdue for an upgrade, and I hope that we'll see Aperture version 3 before long. But while I'm itching for new features and functions, Aperture 2 covers the bases for me, in spades. For whatever reason, I was having trouble saving to one of my vaults saved on an older external FireWire hard drive, and it was returning errors about not being able to create folders or write files. This sounded like a permissions problem, so I looked into it. 

An Aperture vault is a "package" file in OS X, which means the file is a collection of folders and files, which appear in the Finder as a single file. The original Aperture library, the iTunes and iPhoto libraries, and files from applications like Keynote or Pages are like this. Note I'm using OS X Snow Leopard 10.6.2, but these instructions should work on Tiger or Leopard as well. Here's how I dealt with the error. 


### How to Refresh Permissions on your Aperture Vault



The first thing is to shut down Aperture. Since Aperture grabs the Vault file and holds it open, it might be locked. Looking at the MyVault.apvault file in Finder, I can see it's locked by doing cmd-I and digging around in the information panel. 


**Recursively unlock**. Because you need unlocked files to perform permission settings, you can start by recursively unlocking a folder, like this. Use sudo if you are not logged or su'ed in as root (run "sudo bash" to do this but be careful), and you can unlock files in an entire volume by cd-ing to /Volumes first if need be. Of course you can do this in the Finder's information panel as well.


`chflags -R nouchg /path/to/folder/MyVault.apvault`


**Set POSIX owner and group**. Comparing to a working Aperture Vault, the basic permissions were your usual user account, and "staff" as the group. Change the owner to your account with the group as staff. The -R makes it recursive even inside the vault package file. 


`chown -R rcogley:staff /path/to/folder/MyVault.apvault`


**Set POSIX basic perms**. After setting the owner and group, I set the vault's permissions to 777.


`chmod -R 777 /path/to/folder/MyVault.apvault`



After that, I re-opened Aperture, refreshed the Vaults, and it worked without a hitch. I hope this hint helps someone. **Enjoy**! 

