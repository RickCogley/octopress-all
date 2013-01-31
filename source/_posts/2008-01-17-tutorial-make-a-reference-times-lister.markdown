---           
layout: post
post_title: "Tutorial - Make a Timezone Time Lister"
date: 2008-01-17 15:23:46 UTC
updated: 2008-01-17 15:23:46 UTC
comments: true
categories: [Blog-Cogley, Tips, Efficiency, SysAdmin]
keywords: workflow.app,productivity,tutorials,scripting,tips,automator
tags: [workflow.app,productivity,tutorials,scripting,tips,automator]
posticon: default
cover: /images/Rick_Casual_01.jpg
description: Post on scheduling meetings across timezones, by Rick Cogley.
published: true
---

_In my job as a consultant, I often need to schedule meetings across timezones, and sometimes do not want to struggle with cross-platform incompatibilities between calendar software. A few tips follow._

<!--more-->

There is some excellent software out there for this purpose, namely 1stClock on the Windows platform, or [Vela Terra](http://www.veladg.com "Vela Design Group") on Mac, but I thought I would roll my own quick solution with Automator channeling some shell script.

Here's how to go about it, if you are on Mac OS X.

###Create the TimeZone-to-Clipboard Workflow in Automator###

First, start Automator, and save the Automator workflow as "Timezone List to Clipboard" or something similar. Add a "Run Shellscript" action, and a "Copy to Clipboard" action under that.

Next set the Shell to "/bin/bash", and paste the following code into the text box:

{% codeblock Timezone Lister Shell Snippet lang:console /source/downloads/code/timezone_lister_shell_snip_for_automator.sh Download Shell Snippet %}
echo == Reference Times ==
echo -e "Tokyo - \t" `TZ=Asia/Tokyo date "+%Z (%z) %R %a %e %b %Y";`
echo -e "Hong Kong - \t" `TZ=Hongkong date "+%Z (%z) %R %a %e %b %Y";`
echo -e "Calcutta - \t" `TZ=Asia/Calcutta date "+%Z (%z) %R %a %e %b %Y";`
echo -e "Berlin - \t" `TZ=Europe/Berlin date "+%Z (%z) %R %a %e %b %Y";`
echo -e "London - \t" `TZ=GMT date "+%Z (%z) %R %a %e %b %Y";`
echo -e "New York - \t" `TZ=US/Eastern date "+%Z (%z) %R %a %e %b %Y";`
echo -e "Chicago - \t" `TZ=US/Central date "+%Z (%z) %R %a %e %b %Y";`
echo -e "Denver - \t" `TZ=US/Mountain date "+%Z (%z) %R %a %e %b %Y";`
echo -e "San Francisco - \t" `TZ=US/Pacific date "+%Z (%z) %R %a %e %b %Y"`
{% endcodeblock %}

These lines echo an appropriate text string, execute the date command feeding the same the TZ= modifier, which makes the date command return the current date and time in the specified timezone. The percent this and that at the end are the date format.

###Save As an Application###

Save As the file to File Format "Application", and drag your .app file to your Dock. Now when you click it, you have a quick way to get text like this into an email for better collaboration.

{% blockquote %}
== Reference Times ==Tokyo -
JST (+0900) 22:39 Thu 17 Jan 2008Hong Kong -
HKT (+0800) 21:39 Thu 17 Jan 2008Calcutta -
IST (+0530) 19:09 Thu 17 Jan 2008Berlin -
CET (+0100) 14:39 Thu 17 Jan 2008London -
GMT (+0000) 13:39 Thu 17 Jan 2008New York -
EST (-0500) 08:39 Thu 17 Jan 2008Chicago -
CST (-0500) 07:39 Thu 17 Jan 2008Denver -
MST (-0700) 06:39 Thu 17 Jan 2008San Francisco -
PST (-0800) 05:39 Thu 17 Jan 2008
{% endblockquote %}

Hope this helps someone. Have fun consulting across timezones!

