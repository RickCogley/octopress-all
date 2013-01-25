---           
layout: post
post_title: "Migrating User Folders in OS X Leopard Server"
date: 2009-05-02 02:12:55 UTC
updated: 2009-05-02 02:12:55 UTC
comments: true
categories: [Blog-Cogley, Tips, SysAdmin]
keywords: Leopard Server,tip,os x,tips,tutorial,Users,apple
tags: [Leopard Server,tip,os x,tips,tutorial,Users,apple]
posticon: default
cover: /images/Rick_Casual_01.jpg
description: Post on migrating user folders on OS X Leopard Server, by Rick Cogley.
published: true
---

I did an experiment on my test Leopard Server to migrate User Folders from the default /Users to another direct-attached volume based on some questions that came up. 


The problem is, OS X Leopard Server defaults to using the _system disk_ as the Users partition, and this disk is not often your largest disk. It can fill up quickly if users start storing their photos or music. Long story short, the trick is to use Workgroup manager to auto-create the User directories, but, before that there's some things you need to do for prep.

### How to Migrate OS X Leopard Users Folder from Default to External

In Terminal, you can either _sudo bash_ or use sudo in front of every command. I like to use sudo bash, but remember to _exit_ out of your sudo'ed bash shell later, to avoid risk. Don't use sudo bash if you don't know your way around a Terminal. If you are not sure, don't use it, and just go for sudo in front of each command you want to use.

<pre>sudo bashPassword:</pre>
Create the containing Users folder on the external drive, which we'll call "**EXTHD**" here. You can confirm its POSIX permissions using ls -la.

<pre>cd /Volumes/EXTHDmkdir Usersls -la</pre>
Start Server Admin, select the server in the left-hand list, then select the File Sharing section from the toolbar. Copy down all the attributes of your existing Users folder Share Point, for example to auto-mount as "User home folders", protocol options to share via AFP, SMB, FTP or NFS, and base ACL and POSIX Permissions with whether to inherit or not. 


Now, you can Unshare the Share Point in Server Admin. Click Unshare and Save. Click another Share Point to make the list refresh.


After you confirm the Users Share Point is gone you can create a new Users Share Point on /Volumes/EXTHD/Users, your external disk. Reset all the settings you wrote down for your original Users, then Propagate Permissions using the Gear dropdown. 


Start Workgroup Manager, and specify the new User share for each user. Multi-select users, select your new share, and click "Create Home Now" to create. 


Now you can migrate the contents, which is probably the most tedious part because there's unfortunately no automated way to do it. Use the mv command, and you may need to reset permissions after the move. Users can try connecting and accessing their files. Here's one way, which involves using the su command from root's shell to mimic any given user, in this case John Allen Smith or "jas". 

<pre>bash-3.2# su - jasmysrv:~ jas$ whoamijasmysrv:~ jas$ lsDesktop Documents Downloads Library Movies Music Pictures Public Sitesmysrv:~ jas$ pwd/Network/Servers/mysrv.mydomain.com/Volumes/EXTHD/Users/jasmysrv:~ jas$ cd Documents/mysrv:Documents jas$ lsAbout Stacks.pdfmysrv:Documents jas$ mv /Users/jas/Documents/* .mv: ./myfile.txt: set owner/group (was: 1034/80): Operation not permitted</pre>
If you get errors like the "Operation not permitted" above, deal with those permissions separately. Use the exit command to exit to root again, and use it again to get out of the "sudo bash" root shell. I hope this helps get you started migrating user folders to an external hard drive, in OS X Leopard Server. **Enjoy**! 

