---
layout: post
post_title: "Redirect Parent Only not Child Folders in Apache .htaccess"
posticon: default
cover: /images/Rick_Casual_01.jpg
date: 2013-02-04 07:54
comments: true
description: This is the metadata and og tag description.
keywords: apache, .htaccess, redirect, redirectmatch, parent, child, folder, subfolder
categories: [Blog-Cogley, SysAdmin, Web, Tips]
tags: [apache, .htaccess, redirect, redirectmatch, parent, child, folder, subfolder]
published: false
---

_Want to redirect a website parent folder, but not its children? Here is how to use rules in .htaccess to do it._

<!--more--> 

RedirectMatch 301 ^/blog$ /articles
Redirect 301 /blog/archives /blog/archives
Redirect 301 /blog /articles

