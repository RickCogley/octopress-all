---           
layout: post
post_title: "Textmate Regular Expression Search and Replace"
date: 2009-10-30 03:30:40 UTC
updated: 2009-10-30 03:30:40 UTC
comments: true
categories: [Blog-Cogley, Editor, productivity, software, textmate]
keywords: Editor,productivity,software,textmate
tags: [Editor,productivity,software,textmate]
---
 

I use and love the text editor **Textmate**, which has some powerful functions. One thing that it can help with is quickly editing text files, and for example today I used it for searching lines in a mail system's "aliases" file. I wanted to remove 50-odd lines with the word _owner_ in them, so I used the Find command with Regular Expression checked. 


The search string is: 


^.*owner.*$


If you enter that string which means to find the lines with owner in them, check "Regular Expression," and leave a blank in the Replace box, Textmate will blank out the lines for you. Convenient!

