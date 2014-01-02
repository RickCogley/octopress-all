---
layout: post
post_title: "Display Markdown from Dropbox via MDwiki"
posticon: default
cover: /images/Rick_Casual_01.jpg
date: 2013-12-31 21:45
comments: true
description: A post on how to display markdown textfiles directly from your Dropbox, by Rick Cogley.
keywords: Markdown,MDWiki,Dropbox,OSS,opensource
categories: [Blog-Cogley, Software, Sysadmin, Tips, Productivity]
tags: [Markdown,MDWiki,Dropbox,OSS,opensource]
googleplus_post: https://plus.google.com/106441590644824941284/posts/T8NxFxF3QYK
published: true
lettering: Display a Markdown file directly from Dropbox
---

_On this last day in 2013, I was thinking about how I can edit Markdown files locally and have those displayed in the easiest manner possible._

<!--more--> 

Year end is a time of cleaning up and refreshing. This year end, besides the requisite big-cleaning, I replaced 20 year old light fixtures that had been installed when we built our house here in Yokohama Japan. 

I'm also thinking about how I organize my information, and the systems I use to do that, which led me to: how can I easily edit a markdown-formatted text file locally, but display it instantly on the web, for example via DropBox. I experimented around, and found a good solution for this. 

###Quick Background###

Just in case you are unaware, **Markdown** is a program module [by John Gruber](http://daringfireball.net/projects/markdown/) that allows you to type simple codes and convert those into HTML; for example, I can type an asterisk ``*`` followed by a space and some text, and that gets converted into an unordered bulleted list, or, I can type underbars around text ``_like this_`` and it will become _italicized text_ in the HTML. 

Markdown is included in a myriad of systems including Google+ comments, many wikis, [eSolia Inc's PROdb cloud database](http://www.esolia.com/prodb), and is worth learning since it is so simple. As a matter of fact, I'm writing this post in Markdown.

How about Dropbox? From their website, Dropbox is: 

{% blockquote %}  
...a home for all your photos, docs, videos, and files. Anything you add to Dropbox will automatically show up on all your computers, phones and even the Dropbox website — so you can access your stuff from anywhere. Dropbox also makes it super easy to share with others, whether you're a student or professional, parent or grandparent. Even if you accidentally spill a latte on your laptop, have no fear! Relax knowing that your stuff is safe in Dropbox and will never be lost.
{% endblockquote %}  

You can [create a Dropbox account for free](https://t.co/EJKPA6EUih). Just enter your info, agree to the terms, create your account, and install the software on your system, whether it's Mac, Windows, Linux or Mobile. It should take only a few minutes.

###So, how do you display a markdown file via Dropbox?###

If you have not signed up for Dropbox, [do it now for free](https://t.co/EJKPA6EUih) and install the software. Once done, you will find a Public folder inside your Dropbox folder, and that's where you need to put your folder and files. For example, make a folder called ``Markdown`` for storing your text files.

The key to this solution is the wonderful opensource software ["MDwiki"](http://dynalon.github.io/mdwiki/#!index.md). Download the latest release [here](https://github.com/Dynalon/mdwiki/releases/latest), or my backup of the 0.6.1 version [here](https://dl.dropboxusercontent.com/u/5987939/!backups/MDwiki/mdwiki-0.6.1.zip). 

Extract the MDwiki zip, and copy its ``mdwiki.html`` and ``README.md`` files to your Markdown text file folder (remember Dropbox has a local folder in your hard disk, the contents of which are automatically synced to the Dropbox server in the cloud). Log into Dropbox.com on the web, navigate to the Public folder and your ``Markdown`` folder. Then right click on the ``mdwiki.html`` file, and copy its Public URL. 

Any Markdown-formatted text file will do for this experiment, so let's start by displaying the ``README.md`` file. Paste the Public URL from above into your Internet browser address box, remove the s from the https, and add ``!#`` followed by the filename of the Markdown text file. Like so: 
  
[http://dl.dropboxusercontent.com/u/5987939/!Shared/mdwiki.html#!README.md](http://dl.dropboxusercontent.com/u/5987939/!Shared/mdwiki.html#!README.md)  
  
That's a pretty simple file, so here's a file that uses more Markdown features:  
  
[http://dl.dropboxusercontent.com/u/5987939/!Shared/mdwiki.html#!Test.md](http://dl.dropboxusercontent.com/u/5987939/!Shared/mdwiki.html#!Test.md)  
  
{% codeblock %}
# Online Repository Managers

## GitHub
[http://github.com](http://github.com)  
GIT only  
10 private repo, 25$ / mon, no hard disk limit.  

## Beanstalk  
[http://beanstalkapp.com](http://beanstalkapp.com)    
SVN and GIT  
Has deployment  
Gold plan, $50 / mon, 12GB, 40 user, 10 server / repo  
S3 backup  
...  
![Rick Photo](http://dl.dropboxusercontent.com/u/5987939/!Shared/Test.JPG)  
{% endcodeblock %}
  
Just look into Markdown syntax, and you'll be able to figure it out: The ``#`` and ``##`` create h1 and h2 tags, the ``[Display Text](http://www.somesite.com)`` displays a link, and putting a ``!`` in front of a link displays an image, assuming the URL points to an image file. 

###Ideas for Further Tuning###

You can tune this solution further. Here are a few ideas:  
  
* If you don't have a decent editor, there are many out there, but do yourself a favor and avoid the default ones that come standard with the OS (Mac's TextEdit is not bad, but, Windows Notepad should be avoided). A good general cross-platform editor is [Sublime Text](http://www.sublimetext.com/3), but there are Markdown-specific ones as well, like [Mou](http://mouapp.com/), [Writemonkey](http://writemonkey.com/), [NVAlt](http://brettterpstra.com/projects/nvalt/), and plenty of iOS editors that can edit files in Dropbox, like [OMZ's Editorial](http://omz-software.com/editorial/) (iPad only), [Writing Kit](http://getwritingkit.com/), [Byword](http://bywordapp.com/), or [Daedalus Touch](http://daedalusapp.com/). 
* Make an index file, with links to your various Markdown files fed through the ``mdwiki.html``, because the Dropbox public URLs are a bit long and unwieldy. Then use an URL shortener like [bit.ly](http://bit.ly) to make a short URL for easy sharing. 
* If your Markdown filenames have spaces, use a ``%20`` to escape the space. For example if my file is ``Repository Managers.md``, I would need to enter ``Repository%20Managers.md`` in the URL.

Did this help you? Let me know in the comments and **Happy New Year**!
