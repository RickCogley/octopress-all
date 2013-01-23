---           
layout: post
post_title: "Flushing DNS"
date: 2008-02-10 22:47:50 UTC
updated: 2008-02-10 22:47:50 UTC
comments: true
categories: [Blog-Cogley, Tips, SysAmin, Software]
keywords: resolver,dns,productivity,cli,tips,command line,cache,apple
tags: [resolver,dns,productivity,cli,tips,command line,cache,apple]
posticon: default
cover: /images/Rick_Casual_01.jpg
description: Tip on Flusing DNS on OSX and Windows, by Rick Cogley.
published: true
---
 
When accessing websites or mailservers, your DNS resolver caches the request so that future lookups are fast. However, sometimes when a zone on DNS is being changed while you work, you want to be able to clear the cache to force the resolver to get the latest name:IP address pair mappings. Here are some command line commands for flushing the DNS cache on your local machine:

{% codeblock Flush DNS on OS X lang:bash %}
rcogley@RickMBP-Tiger ~ % lookupd -flushcache
rcogley@RickMBP-Leopard+ ~ % dscacheutil -flushcache
{% endcodeblock %} 

{% codeblock Flush DNS on Windows lang:bash %}
rcogley@win01 $> ipconfig /flushdns
{% endcodeblock %} 


