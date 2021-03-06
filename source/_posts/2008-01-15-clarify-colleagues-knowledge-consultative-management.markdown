---           
layout: post
post_title: "Clarify Colleagues' Knowledge - Consultative Management"
date: 2008-01-15 08:36:34 UTC
updated: 2008-01-15 08:36:34 UTC
comments: true
categories: [Blog-Cogley, Business, Professional]
keywords: sox,management,consulting
tags: [sox,management,consulting]
posticon: default
cover: /images/Rick_Casual_01.jpg
description: Post on clarifying colleague knowledge, from Rick Cogley.
published: true
---
 
_In consulting or consultative management, I strongly feel that it's important to make an extra effort to **clarify your colleagues' knowledge**, to assist them in their job._ 

<!--more-->

During a recent Sarbanes Oxley project, my non-technical colleagues were discussing the technical topics of Windows profiles and disk permissions interchangeably. Non-technical folks' eyes usually glaze over when listening to someone in tech drone on about the details so it's never a good idea to overload with too much info, but I think a bit more information in some cases is beneficial. Specifically, this time I explained that NT profiles by default, govern what "rights" you have on your local computer, storing things like desktop icons, printer info, internet bookmarks or favorites, email configuration, help configuration and so on, and, that the sys admin can make central settings that limit what users can do on their computers.<br /><br />In this way, profiles are rather application centric. For example, a sys admin can say "group X cannot use the command prompt" and so on. I emphasized that to set up profiles would take some planning, as they are very powerful but complex to plan for. Setting one thing can break others, so the subject should not be taken lightly. In terms of file and folder security, on the other hand, I explained that Windows NT and other NT-based servers (Windows 2000, Windows 2003) use a disk "file system" called "NTFS" which both enables and governs how sys admins can set security for files and folders. Further, PC workstations based on NT - NT 4, Windows 2000, Windows XP - all allow use of NTFS, so the same rules apply to PCs and laptops running those OSs.<br /><br />For example, if you have a folder x:\finance\private which contains a bunch of sensitive Excel files, you can set up the folder as such:<br /><br />_System Admins: Full <br />Backup System: Full <br />Finance Management: Change <br />Finance Group: Read <br />Some-Other Group: No Access _<br /><br />... and so on. There are many other points to go over about how sys admins can use user groups to define disk permissions and about how those need to be designed and planned, and other caveats to setting these things up. To summarize, I would stress to:<br /><br />

- **Listen** more than you speak, but use your expertise to emphasize critical points.
- Maintain an **awareness** of your **audience** - avoid "tech speak".
- **Actively assist** your business colleagues to clarify their business requirements, and try your best to have the technology support those requirements.

Happy consulting!