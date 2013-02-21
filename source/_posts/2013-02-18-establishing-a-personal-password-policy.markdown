---
layout: post
post_title: "Establishing a Personal Password Policy"
posticon: default
cover: /images/Rick_Casual_01.jpg
date: 2013-02-18 08:05
comments: true
description: A basic personal password security policy, that is easy to implement, by Rick Cogley.
keywords: encryption,passwords,mnemonic,memory,lastpass,1password,yubico,yubikey
categories: [Blog-Cogley, Security, Tips]
tags: [encryption,passwords,mnemonic,memory,lastpass,1password,yubico,yubikey]
googleplus_post: https://plus.google.com/106441590644824941284/posts/W6iau5g9aWS
published: true
lettering: Testing lettering plugin for styling some custom text
related_posts:
  - {title: "How to Spot a Phisher", url: "2013/02/14/how-to-spot-a-phisher/"}
---

_I suppose it is human nature to be a bit lazy about security, but if you are one of those people who uses the same password for every system you use, it's a good idea to stop that practice as soon as, well, now. Read on, for my take on a practical approach to password security._

<!--more--> 

{% pullquote %}One thing is clear: {" good security is inversely proportional to convenience and speed. "} If you start using a different password for every system, sure: it drives home for you that security is a bit of a pain. You have to memorize and maintain all those passwords. I think the benefit of doing so, though, outweighs the disadvantage. If every password is different, even if your _username_ is the same for each, it is harder for the bad guys to get access if a single system is hacked, because they cannot piggyback. Surely, even _one_ system being hacked could be a disaster, right?{% endpullquote %} 

###A Manual Password Pattern Scheme

My recommendation is to employ a simple, manual password scheme, at least. You should use a memorable but hard-to-guess _root_ password, either a prefix alone or a prefix and suffix, and devise a scheme to indicate the system the password is used for. An example. Say you like the poem _Invictus_, by William Ernest Henley. You could use the famous "I am the captain of my soul" phrase as a root. Here, let's use the first letter of every word: 

{% raw %}<div class="alert alert-success">Iatcoms</div>{% endraw %}

Then, maybe mix it up by adding a symbol or number like this: 

{% raw %}<div class="alert alert-success">I@tcom5</div>{% endraw %}

… where the @ looks like an a, and the 5 an s. That part is your root. Then for every system you log into, think up a rule like, ‘use the lowercase first letter, Capital second letter, and Capital last vowel.’ 

Thus, for Google, the root plus your rule: 

{% raw %}<div class="alert alert-success">I@tcom5gOE</div>{% endraw %}

For Twitter: 

{% raw %}<div class="alert alert-success">I@tcom5tWE</div>{% endraw %}

...and so on. Another approach is to use a prefix and suffix for the root and put the system-specific part in the middle. Thus for Twitter, it might be: 

{% raw %}<div class="alert alert-success">I@tctWEom5</div>{% endraw %}

Use whatever you can easily remember, making sure it is not something related to your birthday or other easily-discerned factoids, and make sure it is different from system to system. The whole scheme should serve as a mnemonic rule, for you to easily recall passwords from system to system. And don't just use the above example!

It takes a while to switch over to such a scheme, but, it is worth doing due to the protection it affords. A caveat: you should note that some systems _do not allow certain characters_, such as punctuation symbols, to be used in passwords. If this is the case, you just have to decide what the exception is going to be and make the best of it. Perhaps you could have a second, more simple root for such systems. 

###Automation of Password Activities

There are software products on the market to help with password operations, such as [1Password](https://agilebits.com/onepassword) and [LastPass](https://lastpass.com). They really help with the mechanics of passwords. I'm using LastPass myself, and it allows me to keep a fairly heavily encrypted store of my passwords and secure notes, as well as helping to enter passwords in various web systems. A copy of your encrypted file is kept "in the cloud" on the LastPass server as well, for sharing to your other copies of LastPass. LastPass uses AES 256 encryption with PBKDF2 iterations, done locally, before passing the file to the LastPass server. 

You can increase the iterations to make an already nigh impossible to crack encryption even more difficult to crack, at the expense of performance. In other words, increasing the iterations increases the time it takes to decrypt the file when you want to access passwords. I have not felt any problem with performance, personally, and, more importantly I'm pleased about a few things I can now do. Namely:  

* automatically log in to sites across major browsers, and Operating Systems.
* avoid the weak security of having Safari and Chrome remember passwords for me.
* automatically generate strong passwords. 
* store text in secure free-form notes, and, avoid sending passwords by email by sharing secure notes with friends.
* prevent login to my LastPass from certain countries. 
* use two-factor authentication when I want to access my LastPass password store. 
* avoid [phishing](/articles/2013/02/14/how-to-spot-a-phisher/) attacks because LastPass will not fill passwords for a legitimate site, into a phishing site. 
* select URLs to never automatically log into. 

###Add "What you have" to the mix...

Strong passwords alone, though, don't really cut it. It's good passwords combined with another factor, that "make the best neighbors". There's an axiom in security to remember, which says you should take these together for the strongest security: 

1. What you know (that's your password and user ID)
1. What you have (a security token, of some kind)
1. What you are (physical attributes like a palm print or retinal scan)

It is easy these days, in many major web systems, to enable and use what is called _two-factor authentication_. This is the "what you know" combined with "what you have" in most cases. This 2FA (as it's abbreviated) is available now in Google Apps for Business, DropBox, Amazon AWS and others. 

At [eSolia](http://www.esolia.com), we are using Yubico's [YubiKey](http://www.yubico.com/products/yubikey-hardware/yubikey/) USB keyfobs to provide the second factor. They work natively with some systems, such as LastPass, and can be used with Google Apps for Business with helper apps from LastPass or Zetetic ([OneTime](http://zetetic.net/software-onetime)) on Mac. Google develop an app for iPhone and Android called "Google Authenticator" which can take the place of a YubiKey. 

So instead of entering your user ID and password only, when 2FA is enabled, you will be prompted to enter a special code from your YubiKey, or Google Authenticator app. If it's the YubiKey, you insert it, wait for the green light, and touch the contact with your finger to enter the code. If it's the Google Authenticator app, you have it generate a one-time code by handshaking with the Google server, and you enter that code into the interface when prompted. 

###In conclusion:

To conclude, I can summarize that you should: 

* use a basic manual scheme at least, setting a password "root" and base, unique per system.
* use software like LastPass to help with the mechanics. 
* enable and use two-factor authentication, "2FA". 

I hope this information helps someone be at least reasonably secure. 
