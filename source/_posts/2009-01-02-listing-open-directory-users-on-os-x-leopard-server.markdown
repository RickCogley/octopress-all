---           
layout: post
post_title: "Listing Open Directory Users on OS X Leopard Server"
date: 2009-01-02 01:37:48 UTC
updated: 2009-01-02 01:37:48 UTC
comments: true
categories: [Blog-Cogley, Software, Tips, SysAdmin]
keywords: productivity,Leopard Server,LDAPv3,cli,os x,command line,tutorial,dscl
tags: [productivity,Leopard Server,LDAPv3,cli,os x,command line,tutorial,dscl]
posticon: default
cover: /images/Rick_Casual_01.jpg
description: Post on listing open directory users on OS X Leopard Server, by Rick Cogley.
published: true
---
 

If you want get a list of your users on Open Directory in Leopard Server, you need to use the **dscl** command from the Terminal. SSH to your server, and do a sudo bash or su - to get into root mode. Then you can run dscl directly with arguments, or, enter its interactive shell mode. 


### Listing Users with DSCL



Here is how to _list users from the command line in Leopard Server_: 


myhost:~ root# dscl localhost list /Local/Default/Users


myhost:~ root# dscl localhost list /LDAPv3/127.0.0.1/Users


Or, go into interactive mode: 


myhost:~ root# dscl 


>list Local/Default/Users


>list /LDAPv3/127.0.0.1/Users


You should also be able to email the list to yourself, or, send it to a file: 


myhost:~ root# dscl localhost list /LDAPv3/127.0.0.1/Users |sendmail rick.cogley@gmail.com


myhost:~ root# dscl localhost list /LDAPv3/127.0.0.1/Users > /path/to/userlist.txt

### An Easier Way with DSCACHEUTIL

There happens also to be a wrapper for this information, that makes things easy. You can use _dscacheutil_ to get a list of users or groups and some relevant information. For example, use dscacheutil with the -q (query) switch and either user or group, like so:

 <pre>dscacheutil -q userdscacheutil -q group</pre>
The output looks like this: 

<pre>bash-3.2# dscacheutil -q username: _amavisdpassword: *uid: 83gid: 83dir: /var/virusmailsshell: /usr/bin/falsegecos: AMaViS Daemonname: _appownerpassword: *uid: 87gid: 87dir: /var/emptyshell: /usr/bin/falsegecos: Application Owner</pre>
Hope this helps someone. **Enjoy**!

