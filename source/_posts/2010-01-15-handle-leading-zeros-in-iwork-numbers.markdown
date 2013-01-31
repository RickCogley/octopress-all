---           
layout: post
post_title: "Handle Leading Zeros in iWork Numbers"
date: 2010-01-15 13:05:08 UTC
updated: 2010-01-15 13:05:08 UTC
comments: true
categories: [Blog-Cogley, Efficiency, Software, Tips]
keywords: productivity,Leading Zeros,Text Format,Numbers,iWork,apple
tags: [productivity,Leading Zeros,Text Format,Numbers,iWork,apple]
posticon: default
cover: /images/Rick_Casual_01.jpg
description: Post on handling leading zeros in Apple iWork Numbers spreadsheet, by Rick Cogley.
published: true
related_posts:
  - {title: "Opening a Tab-Delimited CSV in Numbers", url: "2010/03/16/opening-a-tab-delimited-csv-in-apple-iwork-numbers/"}
---

_**Apple's iWork '09 Numbers** spreadsheet is a versatile app with a lot of power available if you open your mind and don't expect it to be Excel. I had some trouble with formatting leading zeros, and this post tells you how I dealt with it in Numbers._ 

<!--more--> 

[{% img right http://farm5.staticflickr.com/4035/4275802657_47bf98af51_d.jpg 400 'Click to view on Flickr: Apple iWork Numbers Leading Zeros' 'Screenshot showing a tip on Apple iWork Numbers Leading Zeros.' %}](http://www.flickr.com/photos/81796435@N00/4275802657)iWork Numbers does not quite do everything Excel does, but it handles UTF-8 well (where Excel does not and has never), and I take advantage of that often. I also love the formatting options and the multiple-sheets-per-document paradigm, but that is a different post. 




One challenge in both Excel and Numbers is how to handle fields with numbers with leading zeros. For instance, a part number 001234 will come out as 1234 when you import it from a CSV in either app, and lose meaning if the actual part must include the leading zeros. You can set a cell or column format in Excel as 000000, and this works the same way in Numbers, except the method's a little unfamiliar. 


### How to Format a Part Number Field to Preserve Leading Zeros



Here's how to not maim your part numbers. 





Select your column to format, and open the Cells inspector.


Select Custom Format from Cell Format then click Show Format.


Give the format a name, and choose the base type.


Delete whatever format is in there by default and drag up an Integers type lozenge.


Open the disclosure triangle, and choose "Show Zeros for Unused Digits" and you will see the #,### change to 0,000. Click Show Separator to deselect it and remove the comma. Add two digits. 


Click OK to save and apply the format to the selected column.





If you set the format as 000000 for a field that includes six digit numerics with leading zeros, and a mix of text with numeric part numbers, such as:


001234


P098765


005544


R-09-PCX


... the latter will not be affected by the format, which is just the right behavior we need.


I hope this tip helps someone, because not being able to set this really drove me a bit batty. **Enjoy!** 

