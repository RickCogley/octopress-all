---           
layout: post
post_title: "Tutorial - Making Nice with Mail.app Rules"
date: 2008-01-21 05:25:04 UTC
updated: 2008-01-21 05:25:04 UTC
comments: true
categories: [Blog-Cogley, rules, yai, tutorials, mail scripts, mail act on, mailtags, articles, omnifocus, mail.app, gtd, apple]
keywords: rules,yai,tutorials,mail scripts,mail act on,mailtags,articles,omnifocus,mail.app,gtd,apple
tags: [rules,yai,tutorials,mail scripts,mail act on,mailtags,articles,omnifocus,mail.app,gtd,apple]
posticon: default
cover: /images/Rick_Casual_01.jpg
description: Post on wrangling OS X Mail.app rules, by Rick Cogley.
published: true
---
 
## Tutorial Introduction

I got Mail.app set up to use Gmail's IMAP, and wrote a bit about it in [this tutorial](http://rick.cogley.info/blog/index.php?id=4961479062255821102 "Tutorial for Mail.app and Gmail IMAP"). One of the next steps I wanted to take, was to somehow manage all the mail that comes in from subscriptions, or, regular announcements from colleagues regarding common reporting milestones. In Microsoft Entourage, I was using an AppleScript and Rules, so I reckoned I could use a similar approach in Mail.app.


This tutorial describes how I solve the challenge, marking my subscriptions and regular mails as "Expiring", so that I can use a smart folder to view and prune them regularly.

## Prerequisites

Here's what you need to follow this tutorial:<br />  1. Leopard Mail.app
  2. Andreas Amann's [Mail Scripts](http://homepage.mac.com/aamann/Mail_Scripts.html "Mail Scripts")
  3. John Maisey's [YAI](http://www.nhoj.co.uk/ "John Maisey's YAI") You Are Invited
  4. Scott Morrison's [Mail Act On](http://www.indev.ca/MailActOn.html "Scott Morr's Mail Act On")

Let's get started.

## Understanding Some Initial Failures

At first, I went down the path of attempting to use Scott Morrison's [MailTags](http://www.indev.ca/MailTags.html "Scott Morrison's MailTags") [beta for Leopard](http://www.indev.ca/MailTagsAndLeopard.html "Beta Version of MailTags for Leopard") to try to tag incoming mails with a keyword and project, but in the end, I was forced to give up using this excellent Mail.app bundle. It seems that Google Mail's IMAP implementation is simply non-standard, and it does not play well with what MailTags needs to do, which as I understand it is to write tag information into custom mail headers. So if you use Gmail and IMAP, you're out of luck to be able to use MailTags at this point.<br />
Secondly, I was thinking to use my technique from Entourage, which was to use an AppleScript fired by a rule for all incoming mail, to check a list of recipients. This was not very easy to use though, because I was forever opening up the script to add new addresses. Not very elegant.


In the end, what worked was to check to see whether a sender was in an Address Book group called Expiring, then check for this membership in a rule, moving the message into the Expiring folder.

## Mail.app Rules Intro

You access rules in Mail.app preferences. Cmd-, while in Mail will bring it up, as in all Mac apps. The rule tab after being populated with some rules looks like this.


[](http://www.flickr.com/photos/rickcogley/2199479024/)


There are a few points to note about Mail.app rules:

  - Rules are processed from top to bottom.
  - Mail.app will stop processing a rule either when it encounters a rule with the "stop evaluating rules" Action enabled, or, when a rule moves a mail to another mailbox.<br />
  - There is no complex nested boolean logic to use within rules, so you need to make a few of them to cover your cases. You are limited to checking if All criteria or Any criteria are true, which translates to an AND or an OR on the criteria you enter. You cannot make a statement like, if 1 AND 2 are true, OR 3 is true, then do the following actions.
  - You can apply the criteria of when a message is "From a given Address Book group" but you cannot check when a message is "To a given Address Book group".
  - It is best to be specific when creating rules, especially with regard to exact senders and recipients. Leaving To undefined, for example, may cause some unexpected problems.
## Creating a Rule - If Sender in Expiring Group AND Message is To Me

In the Rules preference panel, click Add Rule to add, then fill it out. This rule checks to see if a sender is in the "Expiring" group in Address Book, AND if the message is addressed To me are true (using the If All selection), then move the message to the Expiring folder, and set its color to purple.


![Mail.app Rules Expiring to Cogley](http://farm3.static.flickr.com/2277/2198687177_f89cb1b7fb.jpg)


Because the rule moves the message to another folder, Mail.app stops evaluating further rules. You can create one of these rules for each of your main mail addresses, that is, move any mails From members of Expiring group to me@corporate, or me@gmail.

>   
**Note** - there is a bug in Leopard 10.5.1 Mail.app, which does not allow you to set color first before moving and therefore stopping the evaluation of the rule. I tried to enter the actions in the correct order for doing this, but, Mail.app rearranges the rules, putting the color change second, and therefore, it does not apply color consistently.

## Easily Add Senders to Expiring

To make adding senders to an "Expiring" (or any other) group easy, use "Add Addresses" from Andreas Amann's excellent [Mail Scripts](http://homepage.mac.com/aamann/Mail_Scripts.html "Mail Scripts"). Prepare to use it by adding the group first, in Address Book. Then, when a mail comes in From: newletter-sender@someco.com, To: me@corporate (for example), you can select the message, and then choose "Add Addresses" from the Mail Scripts folder in your Scripts folder. Select the addresses to add, and choose the group and label, as appropriate, which you have created in Address Book beforehand.

## <span style="color: #0000EE; font-size: 12px; font-weight: normal;">![Mailscripts Add Addresses](http://farm3.static.flickr.com/2091/2199478646_a17c4e4ffb.jpg)</span><br />

Senders who are in Address Book group Expiring will trigger the rule, and it will move the message to the specified folder.

## Other Cases - Mail is From and To the Same Sender

Many times, newsletters are sent To: and From: the same address. In this case, your above rule will not work, and you have to create specific rules for each case. To make this easy, use "Create Rule" from [Mail Scripts](http://homepage.mac.com/aamann/Mail_Scripts.html "Mail Scripts").


In your mailbox, select a newsletter with To: and From: that do not fit your catch-all rule, then choose Create Rule in your Mail Scripts folder in your Scripts folder. Create Rule has intelligence built in, and will detect the addresses on the mail, and add them to the dialog for you to easily select.


![Create To-From Rule with Mail Scripts](http://farm3.static.flickr.com/2250/2207607251_b57102b99d.jpg)


You can apply the new rule by ctrl-clicking the mail, and choosing Apply Rules from the context menu.


![Apply Rules in Context Menu](http://farm3.static.flickr.com/2240/2208399588_ae10d05da5.jpg)


In my case, I have a number of mails like this that once they are read, I know I will not refer to them again. I repeated this rule create step for each one, and it is quick enough to do when one comes in that you forgot about.

## You're Invited and OmniFocus

John Maisey's [YAI](http://www.nhoj.co.uk/ "John Maisey's YAI") is an AppleScript written to deal with the problem of Mail.app not being able to process the TimeZone information that is embedded in Microsoft Outlook / Exchange calendar invites. You can open the invites in a text editor, and replace the offending line with a correct one, but, it is so much easier to get YAI to do it for you. The YAI installer creates a rule, that sits on top of your rule stack, and fires for every mail. It looks like this:


![Mail.app You Are Invited YAI](http://farm3.static.flickr.com/2061/2199478800_90e9646463.jpg)


Basically, it says for every message, run the AppleScript at such-and-such path. Another example of such a rule is the rule that can be installed with OmniGroup's superb [OmniFocus](http://www.omnigroup.com/applications/omnifocus/ "OmniGroup OmniFocus") which is an app that helps you implement GTD, or Getting Things Done. Here, you can see that if Mail.app detects the OmniFocus "secret code" of a subject line starting with two dashes, then it will run the AppleScript to put the mail into OmniFocus where you can act upon it.


![Mail.app Rules Send to OmniFocus](http://farm3.static.flickr.com/2285/2198686947_fa963ecdbd.jpg)

## Mail Act On

Another application that uses rules is Scott Morrison's [Mail Act On](http://www.indev.ca/MailActOn.html "Scott Morr's Mail Act On"). While MailTags did not work in my environment (Gmail), Mail Act On does, and gives a popup bezel to apply a particular rule to a selected message or messages. I use this to move certain mails in Expiring to another folder called Reference. To use Mail Act On after installing it, you press a key sequence to bring up the bezel (mine is set to Shift-Cmd-`) and then hit the key to apply the rule. So, Shift-Cmd-` then r means "move to reference" for me. See if you can make it work, and note that Mail Act On rules appear at the bottom of your rules list, after an initial one that has a "stop evaluating" action.

## Wrapup<br />

In this tutorial, you read some basic pointers about Mail.app's Rules processing, and can process messages that will "expire" in an effective manner, so that you can later prune or archive them. The cast of characters in this play are Andreas Amann's [Mail Scripts](http://homepage.mac.com/aamann/Mail_Scripts.html "Mail Scripts"), John Maisey's [YAI](http://www.nhoj.co.uk/ "John Maisey's YAI") You Are Invited, and Scott Morrison's [Mail Act On](http://www.indev.ca/MailActOn.html "Scott Morr's Mail Act On") as well as Apple's Mail.app.


Decision Summary


During this setup, we made the following decisions:

  - To forgo MailTags, but use Mail Act On to allow us to apply rules selectively.
  - To reference in Mail.app Rules an Address Book group called "Expiring", the members of which are senders of newsletters and such like.
  - To use Mail Scripts to assist in making Mail.app operations easier.
  - To use YAI to automate changing the timezone of Outlook calendar invites.

Good luck, and if you find better ways of doing things in a similar environment, please do not hesitate to comment.

