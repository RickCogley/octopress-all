---           
layout: post
post_title: "Tutorial - Make a Timezone Time Lister"
date: 2008-01-17 15:23:46 UTC
updated: 2008-01-17 15:23:46 UTC
comments: true
categories: [Blog-Cogley, Tips, Efficiency, SysAdmin]
keywords: workflow,productivity,tutorials,scripting,tips,automator,mac,osx,timezone,scheduling
tags: [workflow,productivity,tutorials,scripting,tips,automator,mac,osx,timezone,scheduling]
posticon: default
cover: /images/Rick_Casual_01.jpg
description: Post on a Mac Automator tip to help with scheduling meetings across timezones, by Rick Cogley.
published: true
lettering: Automate pasting Timezones from your OSX clipboard.
---

_In my job as a consultant, I often need to schedule meetings across timezones, and sometimes do not want to struggle with cross-platform incompatibilities between calendar software. A few tips follow, about how I help myself with this, using Mac OS X Automator._

<!--more-->

There is some excellent software available for this purpose, namely 1stClock on the Windows platform, or [Vela Terra](http://www.veladg.com "Vela Design Group") on Mac, but I thought I would roll my own quick solution with OS X Automator, channeling some shell script.

Here's how to go about it, if you are on Mac OS X.

###Create the TimeZone-to-Clipboard Workflow in Automator###

First, start Automator (just Spotlight search and select it from the list), and save the Automator workflow as "Timezone List to Clipboard" or something similar. Drag to add a "Run Shellscript" action from the library of actions on the left side, and then a "Copy to Clipboard" action under that.

Next set the Shell in the "Run Shellscript" action to "/bin/bash", and paste the following code into the text box:

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

These lines echo an appropriate text string, then execute the date command feeding it the TZ= modifier. This makes the date command return the current date and time in the specified timezone. The bits with percent signs are the date format.

###Save As an Application###

Finally, to use it, "Save As" your Automator file to File Format "Application", and drag your .app file to your Dock. Now when you click the icon in your Dock, it will quickly copy a list of timezones and times to your system clipboard, for better collaboration. Just paste it where you need it. 

{% blockquote %}
== Reference Times ==  
Tokyo - JST (+0900) 22:39 Thu 17 Jan 2008  
Hong Kong - HKT (+0800) 21:39 Thu 17 Jan 2008  
Calcutta - IST (+0530) 19:09 Thu 17 Jan 2008  
Berlin - CET (+0100) 14:39 Thu 17 Jan 2008  
London - GMT (+0000) 13:39 Thu 17 Jan 2008  
New York - EST (-0500) 08:39 Thu 17 Jan 2008  
Chicago - CST (-0500) 07:39 Thu 17 Jan 2008  
Denver - MST (-0700) 06:39 Thu 17 Jan 2008  
San Francisco - PST (-0800) 05:39 Thu 17 Jan 2008  
{% endblockquote %}
  
**PROtip** - remember that Japan does not observe Daylight Savings Time, a fact that causes some scheduling chaos twice a year during _fall back, spring ahead._  

Hope this helps you. Have fun consulting across timezones!

