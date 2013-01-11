---           
layout: post
post_title: "Softbank iPhone 4 Emoji Keyboard Troubleshooting"
date: 2011-09-03 02:41:12 UTC
updated: 2011-09-03 02:41:12 UTC
comments: true
categories: [Blog-Cogley, Japan, Software, Mobile, Gadget, Productivity, Troubleshooting]
keywords: Problem,keyboard,iPhone,emoji,softbank
tags: [Problem,keyboard,iPhone,emoji,softbank]
---
 


[{% img right http://farm7.static.flickr.com/6187/6107940448_d52327d1e9_m.jpg '' 'Softbank iPhone emoji keyboard' %}](http://www.flickr.com/photos/81796435@N00/6107940448 "View 'Softbank iPhone emoji keyboard' on Flickr.com")My daughter came to me with an interesting problem with her iPhone, so I thought I would share what I learned and how I fixed the problem. The problem was, no matter what she did, the "emoji" (graphical emoticon icons) would not show up in her email app. I rarely use emoji except when emailing or texting my daughters, so I had to jump in and learn about it.


### How to Fix the "Emoji Keyboard Does Not Appear in Mail" Problem on iPhone 4



First, I wanted to define the problem:


- When pressing the globe icon, the emoji keyboard does not appear but it should. You can long-press or repeatedly tap the globe to get the choices to appear and indeed, it does not. 

- The emoji keyboard appears on "everybody elses" iPhone, meaning the teenage friends of my daughter ( :-&gt; ) but just to be safe, I checked and indeed, it works for the other iPhones in my family as well, but not on hers. 

- More specifically, I can get the emoji keyboard to appear on my iPhone in the mail app, when I choose the Softbank IMAP address as the From: address and a cell phone recipient as the To:. 

- The emoji keyboard appears on my daughter's iPhone in the SMS/MMS app, as expected. 



What I learned as I went along:


- There are a whole lot of apps that purport to allow you to have emoji on your iPhone without jailbreaking, since the codes are apparently built into the IOS. Mostly they seem to have not-so-good reviews on the iTunes app store. However on iPhone 4, it appears that you just need to turn on the keyboard in Settings, General, Keyboard, International Keyboards. There is a keyboard which is specifically called "Emoji", and there are no advanced settings - it is just a toggle. I have no way of testing whether this keyboard is available for users outside Japan, since we are locked into Softbank as a carrier here. 

- There's a lot of voodoo out on the Internet about this problem, because a lot of people are having it and blogging about it: restart, uninstall, reinstall, sprinkle some eye-of-newt, shake-the-phone-twice-and-pee-on-your-neighbor's rosebush and so on. I tried the restarting since it is non-invasive but, until I resolved the main issue (later), restarting did not help. 

- The official documents say that emoji are compatible only when you send email to other carriers that support it, and, it appears it is also possible to use with Gmail and other IMAP servers, but not POP. I read that you have to choose the right email account, to be able to send from, in your mail app (again, not SMS), and also to a recipient who can accept the emoji. Somehow, Softbank seems to have got code added that limits the behavior of the keyboard selector, based on what you choose in your From: and To: in the mail app. 



So as I was thinking about the third point, I thought I had better check the mail account settings, because we had set up a few different email accounts on the phone - the Softbank IMAP account that comes with the phone contract, an IMAP account and a Gmail account. Turns out that switching between all of these as the From: yields the same result - no emoji keyboard.




In the most important email account in this case, the Softbank IMAP account, I noticed that there was no main SMTP server set but that the Softbank SMTP server was indeed selected (and, mail was working fine save for this problem). When I set the Softbank SMTP server as main for the account, and restarted the iPhone, it started working. Now she can switch to the emoji keyboard as expected.




There is something in the code that controls how the emoji keyboard appears or not, based on the SMTP server that is selected, so be sure to enter the Softbank IMAP SMTP server as main, for the Softbank IMAP account you get with your contract.


### The Cause of All This Strife



I believe the root cause of this problem is the automatic installer that Softbank recommends you use when setting up. When I logged in and tried setting up with it, it did not install correctly, failing to set SSL to ON, and I had to get in contact with Softbank about that one. I think that the installer also sets the main SMTP incorrectly, and is ultimately the reason so many people have this problem.




Besides being extremely lazy about this, since their auto-installer does not work, Softbank engineers are thinking too much but not enough, and ultimately causing trouble for their customers. They are trying to "make it simple" by providing an automatic scripted solution for people to get set up, but as Apple surely knows, automation like that is one of the hardest things to do because you have to consider so many angles. Better to simply leave it up to the user to learn that: "emoji work only with email accounts that can read them" because they not only did not get the installer right, they ultimately caused a greater problem with emoji not working for many.




I hope this little post helps someone out there with their emoji issues.


