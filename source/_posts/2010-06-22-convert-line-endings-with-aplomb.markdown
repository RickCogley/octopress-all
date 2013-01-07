---           
layout: post
title: "Convert Line Endings with Aplomb"
date: 2010-06-22 07:24:32 UTC
updated: 2010-06-22 07:24:32 UTC
comments: true
categories: [Blog-Cogley, Software, Technology, Troubleshooting, Productivity, SysAdmin, Tips]
keywords: productivity,command line,terminal,tr,crlf
tags: [productivity,command line,terminal,tr,crlf]
---
 


When transferring files from system to system, for instance, using csv files to transfer data from one db to another, sometimes there are problems where programs will not process a file because of its line endings. This happens especially if you process a file on one platform, say Mac, and try to use the file on another, say Windows.  Even if you have saved a file as CSV from Mac Excel 2008, it will not necessarily be saved in a format that can be read programmatically, if the program is expecting a certain type of line ending. 




### How Can We Avoid Line Terminator Problems and Troubles?






Let's recall how lines are terminated by default on Windows, Mac and Unix. 









**Windows**-style line endings are CRLF ( \r\n or hex 0D0A )




**Mac**-style line endings are CR ( \r or hex 0D )




**Unix**-style line endings are LF ( \n or hex 0A )









There are a number of ready-made command line programs like unix2dos, dos2unix, mac2dos, dos2mac and so on, that can be used to convert line endings. Note that you can also use the tr or perl commands as well. Tr is available on Macs by default and on almost any unix. Perl is pretty ubiquitous as well. E.g:




> 




[root@server /path/to/files]# tr '\r' '\r\n' win-crlf-file.csv




[root@server /path/to/files]# tr '\n' '\r\n' win-crlf-file.csv




[root@server /path/to/files]# perl -pe 's/\r\n|\n|\r/\r\n/g' unix-lf-file.csv > win-crlf-file.csv









If you want to find out whether a file has the expected line terminators, you can use the _file_ command on *nix or Mac. Here's what that looks like: 




> 




[root@server /path/to/files]# file inputfile1.csv 




inputfile1.csv: ASCII text, with CRLF line terminators




[root@server /path/to/files]# file inputfile2.csv 




inputfile2.csv: ASCII text, with CR line terminators









You can also use the cat command to show line endings, with its -e switch. Do a _man cat_ for more info, because you can also get line numbers, for instance. The first file below has CRLF, which shows up in cat’s output as ^M$, and the second file has only a ^, which is equivalent to the Mac CR line ending only situation. What you need will depend upon the import program. 




> 




[root@server /path/to/files]# cat -e inputfile1.csv




Part,Cust,Price,StartDate,EndDate,Reason**^M$**




123-ABC-456,CUST000001,100,6-01-2010,05-31-2011,Regular Update**^M$**




456-ABC-789,CUST000001,100,6-01-2010,05-31-2011,Regular Update**^M$**




…




[root@server /path/to/files]# cat -e inputfile2.csv




Part,Cust,Price,StartDate,EndDate,Reason**^**123-ABC-456,CUST000001,100,01-06-2010,31-05-2011,Regular Update**^**









Besides line endings, there is also the text encoding of the file, to watch out for. For instance, is the file saved in Roman or Unicode or some other format? In the end, take care to confirm the file you have output is what is needed by the program for input. **Enjoy!**


