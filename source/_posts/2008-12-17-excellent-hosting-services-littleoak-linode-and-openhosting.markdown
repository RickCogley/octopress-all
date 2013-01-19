---           
layout: post
post_title: "Excellent Hosting Services - LittleOak, Linode and OpenHosting"
date: 2008-12-17 00:16:05 UTC
updated: 2008-12-17 00:16:05 UTC
comments: true
categories: [Blog-Cogley, productivity, platform, utility pricing, lamp, shared, open hosting, little oak, vserver, linode, hosting, vps]
keywords: productivity,platform,utility pricing,lamp,shared,open hosting,little oak,vserver,linode,hosting,vps
tags: [productivity,platform,utility pricing,lamp,shared,open hosting,little oak,vserver,linode,hosting,vps]
---
 

_I have had a good experience with the following three excellent hosting services_, all with different approaches yet outstanding performance and customer service: 





[Little Oak](http://www.littleoak.net/)


[Linode](http://www.linode.com/)


[OpenHosting](http://www.openhosting.com/home)





In this article I'll say a couple words about my selections for superior hosting services (all LAMP platform), which include both the shared, and virtual private server types of hosting. They are all three different, but each has been very solid and recommendable with exemplary customer service and commendable uptime. I'll also mention some ways to supplement your hosting, helping you to save on bandwidth and cost. 


### My Shared and VPS Hosting Choices



Here are my choices for three outstanding hosting providers that I have had direct experience with: 


**[Little Oak](http://www.littleoak.net/)** is a "shared" hosting service, where you sign up and are provided with a "dashboard" with which to manage your site. Log in to the dashboard, and you can install and upgrade popular applications directly, such as Wordpress, Drupal or Moodle. With shared hosting, your hosting provider maintains the servers, and you just worry about uploading files for your Website, clicking a button to back up, tweaking settings in your various web apps' admin panels, or clicking "upgrade" to upgrade a web app in the dashboard. Shared hosting is generally easy to use (Little Oak's is especially so), with the tradeoff that you lose a bit of control. At Little Oak, payment is monthly or discounted annually for a given set of memory, disk and bandwidth parameters. Little Oak hosting has been rock-solid with high performance, and they respond quickly and in a friendly manner (even offering to go the extra mile to help), to questions through a dedicated help ticketing system. 


**[Linode](http://www.linode.com/)** is a Virtual Private Server "VPS" hosting service, where you choose what Linux distribution to install, like Debian, Ubuntu, CentOS and so on, and you get the "keys to the kingdom" (er, root access) on a virtual server running with other VPSs on a host that the provider maintains. VPS providers are as a rule hands-off in terms of managing your systems so you have to handle all the settings, backups and migrations. Some VPS providers offer value-added services like backups or other managed services. The advantage over a shared service is that you have control, but you're not going to get the friendly hand-holding that you would get with Little Oak. Linode has an excellent, easy-to-use dashboard system for managing your VPSs, where you can create disk images within your disk space, and load different OSs on your IP address for testing. This is a dream feature. Payment at Linode is monthly or discounted annually for a given set of memory, disk and bandwidth parameters. Linode hosting has been absolutely solid, performance high, and they respond quickly to questions. 


**[OpenHosting](http://www.openhosting.com/home)** is another superior VPS service I use, with a different approach. Instead of billing a fixed amount monthly or annually, they have what they call "utility pricing" which is a form of metered billing. You commit to a certain minimum amount per month for a set of parameters, but the system tracks what you use in terms of CPU, memory and network bandwidth, and can "flex up" to a larger profile. OpenHosting has the same advantage of control, and they use the well-regarded 64-bit "[VServer](http://www.linux-vserver.org/)" with the Cent OS distribution. They have an excellent built-in services of four disk image backups per day (via rsync) so that you can restore your system in case of disaster. Unlike with Linode, you do not get a choice of OS, so if you just need stability and the metered billing and are ok with Cent OS, then OpenHosting is your platform. OpenHosting hosting has been perfectly solid, high-performing, and they have a special "911" support feature for extra fast support.  


### Hosting Supplements



When you use a hosting service you are buying into certain parameters regarding performance and bandwidth. Say your blog gets popular or is "slashdotted". This can easily eat your bandwidth up, especially if you host a lot of media files which are inherently larger than just text. This is nothing new, but you can supplement your hosting by using free or paid services to offset your bandwidth or performance costs. For example: 





**Amazon S3** - you pay a small amount for space and bandwidth, and can take advantage of Amazon's huge technical infrastructure to host media files. Amazon S3 is not just for backup, but you can host files from it, and map a DNS "CNAME" pointer to it (that is, give a certain folder a direct URL). I use S3 to host large video files. 


**Flickr** - Yahoo's photo hosting and social networking service allows you to link to photos you post, so long as you follow certain rules about how you link. I use Flickr to host all my photos, and use MarsEdit to link to them in this blog.


**Google Services** - Google has many services, and you can take advantage of some of these to host content. Youtube comes to mind, for hosting versions of your video content. 





There are a lot of ways to offset your main hosting bandwidth costs, not just the three above. 


 


### Making a Hosting Decision



Why would you go with any one of these services? Well, if you don't know why you'd need root access, then the simple answer is go with Little Oak shared hosting. Don't believe the hype of providers saying they have "unlimited" bandwidth or disk space - that's just a pipe dream (really: no free lunches, ok?). I use Little Oak for my basic sites because I don't need to run Plone or other complex systems that demand root access and a lot of care and feeding. I can also set up a demo web app in 5 minutes via the dashboard. But when I do need to run something with custom parameters or special compiled settings, Linode or OpenHosting it is. 


Why would you choose a given VPS then? As above, Open Hosting's utility pricing and regular backups are something special but there are cases where you need to pick an OS. For instance, it is much easier to run Deki Wiki from Mindtouch on Debian or Ubuntu, than it is to run it on Cent OS. The assumptions the developers made when building that system were that certain packages are available. They are available, easily, if you use Debian, but on Cent OS, it's like an assault on K2 and I hope you love that compiler. 


I hope this article helps someone decide on hosting. Please give me some feedback [directly](http://rick.cogley.info/contact/) or in the comments! I hope to hear from you and **Enjoy**!

