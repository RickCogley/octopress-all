---
layout: post
post_title: "Site Re-launch in Octopress - RC Central v3"
posticon: default
cover: /images/Rick_Casual_01.jpg
date: 2013-02-12 23:29
comments: true
description: A post on RC Central re-launch in static site generator Octopress, by Rick Cogley.
keywords: launch,website,octopress,jekyll,ruby,static
categories: [Blog-Cogley, Web, Featured]
tags: [launch,website,octopress,jekyll,ruby,static]
googleplus_post: https://plus.google.com/106441590644824941284/posts/gt84GQtzYRC
published: true
---

_I had a bit of a journey in relaunching _Rick Cogley Central_, this time creating it in a static site generator over my previous tool RapidWeaver. Read on to hear the gory gory!_

<!--more--> 

[{% img right http://farm9.staticflickr.com/8188/8423163176_896e1dd797_d.jpg 400 'Click to view on Flickr: RC Central Pages Not Available' 'Screenshot showing pages unavailable in previous version of site.' %}](http://www.flickr.com/photos/rickcogley/8423163176)I'd watched the second version of this site deteriorate over a couple of years, cobwebs proliferating and junk piling up in the corners, so for a bit of a "spring cleaning" 

I decided to take steps to deploy a static or "baked" style of website this time, over anything dynamic, such as a server-hosted CMS. Static site generators generally involve you writing site content as text files in your local drive in a format such as textile or markdown, where you use simple markup to simulate things like *bold* or _italics_ by surrounding the words thusly: `*bold*` and `_italics_`. Then, you use a terminal command to generate the site locally while merging in the stuff that appears on every page, such as sidebars and menus and footers. Once you generate, you next deploy the site to your server, via various means, such as rsync, ftp or a git push. 

Deployment copies the static HTML,  CSS  and Javascript files up to the server. There are scads of [static site generators][] these days, but due to the popularity of [Github][], [Jekyll][] is a well-supported one, written in the popular [Ruby][] language. After a lot of examining and waffling, I decided on a wrapper around Jekyll called [Octopress][].

###Polish Needed and Found, in Octopress

You really need to be a bit of a hacker to use a static site generator, but I'm a manager these days. Luckily Octopress was complete and polished enough that I could bone up on the related technologies at my own pace. An ulterior motive was that I wanted to learn how to use git, as _all the cool kids_ are using it. The workflow of writing a post or page in markdown, adding it to my local git repository, committing it, pushing it, and deploying it to the site, has now become second nature. Since we use them for some other reasons, I am hosting and deploying my git repository using Atech Media's [CodebaseHQ][] and [DeployHQ][] services, and the site hosting proper is being done over at the rock-solid [Webfaction][].

I hired *[Paul Serous][]*, a web developer from Ukraine, to coach me in not only the git basics and the other technologies I need to know, but also to do the heavy ruby programming that I have no time or need to learn. Paul did an exemplary job not only on those things, but really went the extra mile to adapt and apply a responsive HTML5 and CSS3 [theme][] based on the famous and somewhat ubiquitous [Twitter Bootstrap][], to the site. Thank you Paul; I really appreciate your quality work, help and patience.

###Parts and more Parts

A lot goes into the visual look of a site, namely leveraging [CSS][] for visual styling, and javascript such as [JQuery][] or what Twitter has written into Bootstrap for effects. We started with a basic theme as I mentioned, but there are a truly lot of actors playing on the stage you see now, and the current files don't resemble what we started with at all. I'm using Adobe TypeKit [webfonts][], namely [Freight Text Pro][] for the body text, [Adelle][] for the headings, and [Source Code Pro][] for monospace code blocks, primarily because they look good, and it means a consistent look to the site for most viewers with modern browsers (i.e. not IE 6). Also, because [Font Awesome][] icon fonts and [Glyphicons][] are included with Twitter Bootstrap, those too are taken advantage of in this design.

As you poke around, you might spy some [Semantic HTML][], while I'm using some now-well-accepted [Microdata][] such as the [Person][] schema, and [Microformats][] such as [hCard][], with [rel-tag][] sprinkled in around the site to keep Google's "rich snippets" checker happy. 

As I did this work, I felt more and more that we truly stand on the shoulders of giants, who did so much work in the past that we benefit from today. _Thank you one and all!_

 [static site generators]: https://pinboard.in/u:rickcogley/bundle:JRC_Static_Site_Generators/ "Link to Rick's Pinboard.in list of Static Site Generators"
 [Github]: https://github.com/
 [Jekyll]: http://jekyllrb.com/
 [Ruby]: http://www.ruby-lang.org/en/ "Ruby Language"
 [Octopress]: http://octopress.org/
 [CodebaseHQ]: http://www.codebasehq.com/ "Atech Media CodebaseHQ git and subversion hosting."
 [DeployHQ]: http://www.deployhq.com/ "Atech Media DeployHQ to auto-copy a git repo to a server."
 [Webfaction]: http://www.webfaction.com?affiliate=rcogley "Webfaction hosting link."
 [Paul Serous]: http://about.me/paul_ser "Paul Ser profile page"
 [theme]: http://themeforest.net/item/justi-responsive-html5css3-template/2733629 "Justi HTML5 and CSS3 theme based on Twitter Bootstrap"
 [Twitter Bootstrap]: http://twitter.github.com/bootstrap/ "Twitter Bootstrap - responsive HTML5 and CSS3 framework."
 [CSS]: http://www.w3.org/Style/CSS/ "Permanent bookmark for Cascading Style Sheets"
 [JQuery]: http://jquery.com/ "JQuery site."
 [webfonts]: https://typekit.com/colophons/opc8mtb "Webfonts from Adobe used in this site."
 [Freight Text Pro]: https://typekit.com/fonts/freight-text-pro "Freight Text Pro web font details page."
 [Adelle]: https://typekit.com/fonts/adelle-web "Adelle web font details page."
 [Source Code Pro]: https://typekit.com/fonts/source-code-pro "Source Code Pro web font details page."
 [Font Awesome]: http://fortawesome.github.com/Font-Awesome/ "Font Awesome icon fonts"
 [Glyphicons]: http://glyphicons.com/ "Glyphicon icons"
 [Semantic HTML]: http://en.wikipedia.org/wiki/Semantic_HTML "Semantic H.T.M.L. Wikipedia article link"
 [Microdata]: http://schema.org/ "Canonical site for Microdata, Schema.org."
 [Person]: http://schema.org/Person "Microdata Person schema."
 [Microformats]: http://microformats.org
 [hCard]: http://www.microformats.org/wiki/hcard "Permanent bookmark for hcard Microformat"
 [rel-tag]: http://www.microformats.org/wiki/rel-tag "Rel-tag Microformat"

