---           
layout: post
title: "Assign \"Elastic IP\" Fixed Public IP to your Amazon EC2"
date: 2012-12-23 22:35:29 UTC
updated: 2012-12-23 22:35:29 UTC
comments: true
categories: [Blog-Cogley, Technology, Software, Web, Troubleshooting, Tips]
keywords: Network,Fixed IP,Amazon,EC2,geek,AWS
tags: Network Fixed IP Amazon EC2 geek AWS
---
 


[{% img right http://farm9.staticflickr.com/8493/8301986608_803bf59f10.jpg '' 'Amazon AWS EC2 Elastic IP 2012-12-24_07-15-34' %}](http://www.flickr.com/photos/81796435@N00/8301986608 "View 'Amazon AWS EC2 Elastic IP 2012-12-24_07-15-34' on Flickr.com")Amazon AWS EC2 (Elastic Compute Cloud, or basically, paravirtual servers you can rent from Amazon) initially assigns a non-fixed public IP address to your server instance. This means when you reboot your instance, the public hostname and public IP address will change. This is fine when you are experimenting, but not fine for a production server, and can be the source of not a little surprise, when you restart and the server "disappears". 




This behavior is by design, and makes sense, because IPv4 IP addresses are relatively scarce and a large provider like Amazon would need to conserve on them where possible. But if you need a fixed IP, Amazon allows you to assign what they call an "elastic IP" address. The beauty of this design, is that the elastic IP is associated with your _account_, and not locked to a single instance. You can re-allocate it from server to server. 




So, say you have a production server in the Tokyo AWS region, and a backup server with the same configuration but that is idling in the US East AWS region. If for whatever reason, the Tokyo EC2 region or your server there has an outage, you theoretically could just visit the AWS EC2 console, and re-assign that elastic IP from the Tokyo server to the other server, reboot and you're on your way. Issues of DNS changes and propagation are therefore not a factor, and you have pretty quick failover.




The screenshot shows what the interface for allocating these looks like. 


