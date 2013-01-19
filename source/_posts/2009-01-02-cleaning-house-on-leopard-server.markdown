---           
layout: post
post_title: "Cleaning House on Leopard Server"
date: 2009-01-02 01:16:12 UTC
updated: 2009-01-02 01:16:12 UTC
comments: true
categories: [Blog-Cogley, spotlight, Leopard Server, chown, chmod, permissions, cli, os x, chflags, ls, inherit]
keywords: spotlight,Leopard Server,chown,chmod,permissions,cli,os x,chflags,ls,inherit
tags: [spotlight,Leopard Server,chown,chmod,permissions,cli,os x,chflags,ls,inherit]
---
 

If you administer OS X servers, chances are the holidays are a time when projects to perform **IMACs** (1) are often done. Projects that involve moving drives or data. On Leopard Server, to get a clean start for 2009, there are a few command line techniques to note regarding permissions for files and folders. Note, _setting permissions in Finder on OS X Server is notoriously buggy_, so 9 out of 10 administrators (in white coats, of course) recommend using the command line. **Try it**: your friends will envy you and the girls will admire you. But first, a word about how permissions work in Leopard Server. 


_(1). Install, Move, Add or Change. _


### The Concept of "Effective Permissions"



A user's "Effective Permissions" are the combination of their POSIX access plus their combination or union of relevant ACL allow entries, less their union of relevant ACL deny entries. That's the original Unix base permissions combined with the effect of the Apple Access Control Lists. 


> Effective Permissions = POSIX + ACL Allow - ACL Deny


It should be noted therefore that ACL Deny entries have the most power and override ACL Allow entries or POSIX permissions.


What happens when a new file or folder is created in a Leopard sharepoint? Here's how it ends up: 





_POSIX owner_ - the user who creates the item.


_POSIX group_ - the POSIX group of the enclosing / parent folder.


_POSIX permissions_ - set by umask (where 0755 is the default).


_ACL_ - If any ACL entries on the parent folder have either or both of the _file_inherit_ or _directory_inherit_ controls, then the newly-created item will inherit those ACL entries.





If you are _setting permissions_ on already-created objects, it's critical to note that Finder permissions operations are buggy. I have had decent success with Server Administrator's "Sharing" section (per server, not service) permission settings for sharepoints, and with CLI commands. Either way, you must be sure to propagate any changes: if in Server Administrator, that selection's in the little gear icon, and if from the CLI, that's usually done with a "-R" on the command, for "recursive". The caveat is, for child objects, permissions will propagate only when the child item is not in use (i.e. is not locked). 


### A New Year's Cleanup Scenario



Let's say a client has asked you to take a drive of old data and share it. This data was collected up from various places, and has been connected to various systems. Your task is to hook the drive up to a Leopard Server, and share it via SMB or AFP. Several commands come in handy here. Let's take a look. 


**See what you've got**. If you take a look at a drive that has been swapped around from machine to machine, it might have a fair amount of detritus, being a mix of permissions, ACLs and owners. A simple ls command can show you what you have in terms of POSIX permissions and ACLs, with these commands respectively. 

<pre>ls -la</pre><pre>ls -el</pre>
The ls -el command is similar to -la, but just shows the ACL if it exists. This is what it might look like, with a typical POSIX perms line showing the group and owner as "_unknown", as well as a couple ACL entries: 

<pre>fire-server:data administrator$ ls -eltotal 1drwxrwxr-x@ 116 _unknown  _unknown  3944 Dec 29 21:24 our-2008-data 0: user:administrator inherited allow list,add_file,search,delete,/add_subdirectory,delete_child,readattr,writeattr,readextattr,writeextattr,/readsecurity,writesecurity,chown,file_inherit,directory_inherit 1: group:acme-biz inherited allow list,add_file,search,delete,add_subdirectory,/delete_child,readattr,writeattr,readextattr,writeextattr,readsecurity,/writesecurity,chown,file_inherit,directory_inherit</pre>
**Recursively unlock**. Because you need unlocked files to perform permission settings, you can start by recursively unlocking a folder, like this. Use sudo if you are not logged or su'ed in as root (run "sudo bash" to do this but be careful), and you can unlock files in an entire volume by cd-ing to /Volumes first if need be. 


chflags -R nouchg /path/to/folder


**Remove OS X ACLs**. To get the volume or folder down to just POSIX permissions, use chmod with the R and N switches to remove ACLs in Leopard. 


chmod -RN /path/to/folder


**Confirm ACLs are gone**. To view ACLs in Leopard, use the ls command with el switches. If they are gone, they will not show up as shown above, and you'll just get a typical "ls -la" directory listing. 


ls -el /path/to/folder


**Set POSIX owner and group**. Leopard's basic permissions are your administrator account that you set during the OS X install (say, "admin" for this example), and "staff" as the group. Change the owner to admin with the main group as staff. 


chown -R admin:staff /path/to/folder


You can also use chgrp to change the group. Now when you do an "ls -la" on the folder, you'll see that admin and staff are set. 


bash-3.2# ls -la


total 1


drwxr-xr-x@  7 admin  staff  306 Jan  1 19:17 our-2008-data


**Set POSIX basic perms**. You can set the umask back to default this way. 

<pre>chmod -R 755 /path/to/folder</pre>
Next, let's take a look at setting ACLs. 


### Set ACLs on top of Basic POSIX Permissions in Leopard Server



**Enable Extended Security on a Volume**. Leopard has extended security on volumes set by default, but if you are working with a volume on a OS X Tiger server, you need to run fsaclctl to enable extended ACL security. Check the manual of this command to see how to disable. The command still works on Leopard, and you could use it to disable ACL permissions for whatever reason. 


sudo fsaclctl -e -p /Volumes/Drive2


Then restart your server. 


**Set ACLs the Easy Way**. If you're CLI shy, you can set ACLs in Sharing in Server Admin. Here's how: 





Start Server Admin


Select the Server, and click the File Sharing tab.


Select the SharePoint, under which are the folders you want to set ACLs to, assuming the SharePoint is created. 


Select the Permissions tab at the bottom, and set the ACLs with the plus and minus buttons (see the user and group list come up at the right). For POSIX drag on TOP of the existing three entries. 


Click the gear button at the bottom, and choose Propagate Permissions.


Wait until it finishes.





**Or you can do all of that from the command line**. Use chmod to add a new ACL entry to the appropriate parent folder, while also propagating that entry to the folder's children by using the recursive (-R) flag. This command grants the "acme" group Read & Write permissions (with inheritance) to /Groups/ACME/Documents/our-2008-data :

<pre>chmod -R -v +a "acme allow readattr,readextattr,readsecurity,list,/search,read,execute,writeattr,writeextattr,delete,delete_child,add_file,/add_subdirectory,write,append,file_inherit,directory_inherit"//Groups/ACME/Documents/our-2008-data</pre>
Here's how you would add the _default spotlight permissions_ to our /Groups/ACME/Documents/our-2008-data :

<pre>chmod -R -v +a "_spotlight inherited allow list,search,file_inherit,/directory_inherit" /Groups/ACME/Documents/our-2008-data</pre>
Let's say you want to remove just the "everyone" ACL from the folder. To do so, use -a instead of +a: 

<pre>chmod -R -a "everyone allow list,add_file,search,delete,/add_subdirectory,delete_child,readattr,writeattr,readextattr,/writeextattr,readsecurity,file_inherit,directory_inherit"/  /Groups/ACME/Documents/our-2008-data</pre>
And again, to remove all ACLs use : 


chmod -RN /path


To remove a given path completely, use "rm -rf", thusly: 


rm -rf /path/to/folder


With the above commands you should be able to straighten out any problems you might have with permissions. I hope this is helpful to someone out there. Please give me your feedback in the comments, and **Enjoy**! 

