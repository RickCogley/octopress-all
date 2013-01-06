---           
layout: post
title: "Switching Parts of a String in Excel"
date: 2010-09-28 01:49:56 UTC
updated: 2010-09-28 01:49:56 UTC
comments: true
categories: [Blog-Cogley, Software, Technology, Troubleshooting, Productivity, Tips]
keywords: productivity,tip,Excel,Formula
tags: productivity tip Excel Formula
---
 


I had the need to fix mistakenly entered email addresses in Excel, and luckily the mistake was a recognizable pattern. They should have been _firstname.lastname@domain.com_ but were entered as _lastname.firstname@domain.com_. This short post explains how I extracted the names and switched them.


### How to Swap Parts of an Excel String



First assume you have **smith**.joe@acme.com in cell A2, and that what you want is joe.**smith**@acme.com in cell A5. Enter this formula in cell A3:




=LEFT(A2,(FIND(".",A2,1)-1))That extracts "smith" out of the email address in A2, by using the FIND function to return the number of the position of the period. You subtract 1 to tell LEFT when to stop extracting.Next, in cell A4, enter this formula:=MID(A2,(FIND(".",A2,1)+1),((FIND("@",A2,1))-(FIND(".",A2,1)+1)))That uses MID to extract from one after the period, through one behind the @. This is about finding the positions of parts of the string you can see are in a pattern, and subtracting or adding 1.Now in A5 you can concatenate the two in the proper order, and add the domain, thusly:=A4&"."&A3&"@acme.com"That's it & good luck!


