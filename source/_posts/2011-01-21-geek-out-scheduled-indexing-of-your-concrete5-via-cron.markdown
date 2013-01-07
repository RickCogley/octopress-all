---           
layout: post
title: "Geek Out: Scheduled Indexing of your Concrete5 via Cron"
date: 2011-01-21 03:23:22 UTC
updated: 2011-01-21 03:23:22 UTC
comments: true
categories: [Blog-Cogley, Web, Software, Technology, SysAdmin, Tips]
keywords: indexing,concrete5,utilities,CMS,cron,geek,automation
tags: [indexing,concrete5,utilities,CMS,cron,geek,automation]
---
 


I thought I would share how to get the automatic indexing working in a Concrete5 site, if you happen to use that CMS.




There is a special URL in the admin dashboard, which you can call from cron, to periodically re-index your site.


### How to get Concrete5 to Automatically Index in One Easy Step



This is what the cron entry should look like:


<pre>27 * * * * /usr/bin/wget -O - -q -t 1 http://www.myc5domain.com/index.php/tools/required/jobs?auth=19eef....etc</pre>

This runs the job every hour at 27 minutes past. You should also be able to use other programs to hit the URL if wget is not installed:


<pre>27 * * * * /path/to/lynx -source http://www.myc5domain.com/index.php/tools/required/jobs?auth=19eef....etc</pre><pre>27 * * * * /path/to/curl --silent --compressed http://www.myc5domain.com/index.php/tools/required/jobs?auth=19eef....etc</pre>

Make sure you use absolute paths with cron because its environment is not the same as that of a shell. It is more limited. Also, of course the way you enter cron jobs will be different per host, and some may allow you to do it via a control panel. Either way, if you do not know how, you can ask your hosting company. This is a typical and easy thing to set up, if you provide them with your Concrete5 installation's special index URLs from the dashboard.




**Enjoy**!


