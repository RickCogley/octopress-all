---           
layout: post
post_title: "Geek Out: Scheduled Indexing of your Concrete5 via Cron"
date: 2011-01-21 03:23:22 UTC
updated: 2011-01-21 03:23:22 UTC
comments: true
categories: [Blog-Cogley, Web, SysAdmin, Tips]
keywords: indexing,concrete5,utilities,CMS,cron,geek,automation
tags: [indexing,concrete5,utilities,CMS,cron,geek,automation]
posticon: default
cover: /images/Rick_Casual_01.jpg
description: Post on scheduled indexing via cron in Concrete5 CMS, by Rick Cogley. 
published: true
---

_I thought I would share how to get the automatic indexing working in a Concrete5 site, if you happen to use that CMS. There is a special URL in the admin dashboard, which you can call from cron, to periodically re-index your site._

<!--more--> 

### How to get Concrete5 to Automatically Index in One Easy Step

This is what the cron entry should look like:

{% codeblock %}
27 * * * * /usr/bin/wget -O - -q -t 1 http://www.myc5domain.com/index.php/tools/required/jobs?auth=19eef...
{% endcodeblock %} 

This runs the job every hour at 27 minutes past. You should also be able to use other programs to hit the URL if wget is not installed, such as lynx or curl:

{% codeblock %}
27 * * * * /path/to/lynx -source http://www.myc5domain.com/index.php/tools/required/jobs?auth=19eef....
{% endcodeblock %} 

{% codeblock %}
27 * * * * /path/to/curl --silent --compressed http://www.myc5domain.com/index.php/tools/required/jobs?auth=19eef....
{% endcodeblock %} 

Make sure you use absolute paths in a crontab file, because cron's system environment is _not the same_ as that of a shell. It is more limited. Also, of course the way you enter cron jobs will be different per host, and some may allow you to do it via a control panel such as cpanel. Either way, if you do not know how, you can ask your hosting company. This is a typical and easy thing to set up, if you provide them with your Concrete5 installation's special index URLs from the Concrete5 dashboard.

If this helped you, please let me know in the comments or in a blog post of your own. **Enjoy**!


