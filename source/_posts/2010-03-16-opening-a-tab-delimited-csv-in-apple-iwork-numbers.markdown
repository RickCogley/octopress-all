---           
layout: post
post_title: "Opening a Tab-Delimited \"CSV\" in Apple iWork Numbers"
date: 2010-03-16 06:12:57 UTC
updated: 2010-03-16 06:12:57 UTC
comments: true
categories: [Blog-Cogley, Software, Troubleshooting, Tips]
keywords: tab-delimited,CSV,TXT,TSV,tip,tips,Numbers,iWork,apple
tags: [tab-delimited,CSV,TXT,TSV,tip,tips,Numbers,iWork,apple]
posticon: default
cover: /images/Rick_Casual_01.jpg
description: Post on opening a tab separated text file in Apple Numbers, by Rick Cogley. 
published: true
related_posts:
  - {title: "Handle leading zeros in Numbers", url: "2010/01/15/handle-leading-zeros-in-iwork-numbers/"}
---

_I like _Numbers_, from Apple's competent and beautiful _iWork_ suite, but there are still things where it is different from Microsoft Excel, and hence it feels somewhat unfamiliar at times._

<!--more--> 

For example, although Excel has never been good at handling text files saved in UTF-8 format (a big deal for those of us who work in Asia), it does have a nice Wizard for importing CSV or TSV text files. 


Some applications export text files with tab-separated values, and put a CSV extension on them. Actually, CSV stands for "Comma Separated Values" where these are really "TSV" or "Tab Separated Values." When you try to import such a CSV file, Numbers will mash all the fields into one cell in the left-most column. That makes sense, because it's looking for commas judging by the CSV extension. Finding none, it just lets the data pile on. 


### How to Import a Tab-Separated "CSV" in Numbers






If you have a tab-separated CSV, here's how to open it: 









Save the file somewhere you can find it. 




Rename the file in Finder, so that it has a .TXT extension.




Ctrl-click the file and choose "Open With" and "Numbers".









Now the data will open correctly, with each field getting its due, and you'll get the added benefit of Numbers not munging any Japanese or Chinese characters. 




Hope this tip helps someone. **Enjoy**!


