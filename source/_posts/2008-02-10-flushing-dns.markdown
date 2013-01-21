---           
layout: post
post_title: "Flushing DNS"
date: 2008-02-10 22:47:50 UTC
updated: 2008-02-10 22:47:50 UTC
comments: true
categories: [Blog-Cogley, resolver, dns, productivity, cli, tips, command line, cache, apple]
keywords: resolver,dns,productivity,cli,tips,command line,cache,apple
tags: [resolver,dns,productivity,cli,tips,command line,cache,apple]
---
 
When accessing websites or mailservers, your DNS resolver caches the request so that future lookups are fast. However, sometimes when a zone on DNS is being changed while you work, you want to be able to clear the cache to force the resolver to get the latest name:IP address pair mappings. Here are some command line commands for flushing the DNS cache on your local machine:On Mac OS X Tiger:<pre>lookupd -flushcache</pre>On Mac OS X Leopard:<pre>dscacheutil -flushcache</pre>On Windows:<pre>ipconfig /flushdns</pre>Update: I noticed that this cache seems to survive reboots, on Leopard.