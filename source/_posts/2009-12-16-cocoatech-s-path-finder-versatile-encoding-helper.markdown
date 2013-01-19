---           
layout: post
post_title: "CocoaTech's Path Finder - Versatile Encoding Helper"
date: 2009-12-16 08:59:37 UTC
updated: 2009-12-16 08:59:37 UTC
comments: true
categories: [Blog-Cogley, UTF-8, Shift JIS, Path Finder, CocoaTech, Encoding, import, textmate]
keywords: UTF-8,Shift JIS,Path Finder,CocoaTech,Encoding,import,textmate
tags: [UTF-8,Shift JIS,Path Finder,CocoaTech,Encoding,import,textmate]
---
 

[](http://www.flickr.com/photos/81796435@N00/4189178873 "View 'Path Finder Save as SJIS for Excel' on Flickr.com")CocoaTech's Path Finder tool is a versatile Finder replacement. One problem that you might have if you do any work with data, is importing CSV files that are in the UTF-8 format, and which contain multi-byte characters such as Japanese, into Excel.


To import a UTF-8 CSV into Excel, you need to re-save into a format that Excel will accept, because it ironically does not accept the quite-universal UTF-8. I tried opening my UTF-8 CSV with TextMate and Text Edit to do the re-save into a different encoding, but neither of those allow me to save to Shift JIS, which renders Japanese characters so Excel can import them properly. 


I saw that Path Finder has a native Text Editor, and thought I would try it. Sure enough, it allows you to re-save a file in Shift JIS and with a TXT extension, which can then easily be imported into Excel, unmunged. 


Thanks CocoaTech! 

