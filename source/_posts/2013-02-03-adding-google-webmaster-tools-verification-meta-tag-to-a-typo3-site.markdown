---
layout: post
post_title: "Adding Google Webmaster Tools Verification Meta Tag to a TYPO3 Site"
posticon: default
cover: /images/Rick_Casual_01.jpg
date: 2013-02-03 17:12
comments: true
description: Post about verifying your TYPO3 site with Google Webmaster Tools, by Rick Cogley.
keywords: typo3, metatags, webmaster tools, google, verification, template, page.meta
categories: [Blog-Cogley, SysAdmin, Web, Tips]
tags: [typo3, metatags, webmaster tools, google, verification, template, page.meta]
published: true
---

_The TYPO3 CMS is complex, so oftentimes you cannot simply put files in the root to verify site ownership. Here's how to do it with a meta tag, for Google Webmaster Tools._

<!--more--> 

[{% img right http://farm9.staticflickr.com/8516/8440744792_0e513bc3c6_d.jpg 500 'Click to view on Flickr: Add Google Site Verification Code to TYPO3 C.M.S. as Meta Tag 2013-02-0' 'Screenshot showing how to - Add Google Site Verification Code to TYPO3 C.M.S. as Meta Tag 2013-02-0.' %}](http://www.flickr.com/photos/rickcogley/8440744792)You can use [Google Webmaster Tools](https://www.google.com/webmasters/tools) to improve many aspects of your sites and improve their ranking within Google, so it's recommendable. 

To use it for your sites, or Google Analytics for that matter, you have to verify site ownership by uploading a file to the root of the site, or, by adding a meta tag. If you have a website running on the TYPO3 CMS, the easiest way to verify in my opinion, is to add the meta tag. 

### Adding Google Webmaster Tools Verification Meta Tag to your TYPO3 Site

First log into the backend of your TYPO3 site as an admin. Then, 

1. Select your home page in the directory tree (middle pane)
1. Select Template from the left pane
1. Select Info/Modify from the right pane, and click the pencil icon on the Setup section.
1. At the bottom, add this line: `page.meta.google-site-verification = YOUR-VERIFICATION-CODE`, replacing the YOUR-VERIFICATION-CODE part with your actual code, of course.
1. Save and exit, logging out if appropriate.
1. Confirm by visiting your site, viewing page source, and finding the metatag you just added in the `<head>` tag.

Now on the Google Webmaster Tools side, you can click verify, and it should succeed if you entered the code correctly. Even after you verify, leave the tag in, because Google will revisit the site from time to time to check. 

{% raw %}<span class="alert alert-info"><strong>N.b.</strong>- we added two codes, one for each of the domains our TYPO3 site is servicing, and it has worked fine so far.</span>{% endraw %}

If this helped you, please link to this article from your own site, or let me know in the comments. _Thanks for visiting!_
