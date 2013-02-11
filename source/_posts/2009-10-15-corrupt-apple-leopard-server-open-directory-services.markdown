---           
layout: post
post_title: "Corrupt Apple Leopard Server Open Directory Services"
date: 2009-10-15 13:24:33 UTC
updated: 2009-10-15 13:24:33 UTC
comments: true
categories: [Blog-Cogley, Tips, SysAdmin]
keywords: LDAP,Open Directory,tips,software,Troubleshooting,apple
tags: [LDAP,Open Directory,tips,software,Troubleshooting,apple]
posticon: default
cover: /images/Rick_Casual_01.jpg
description: Post on recovering from a corrupt Apple Leopard Server Open Directory, by Rick Cogley. 
published: true
googleplus_post: https://plus.google.com/106441590644824941284/posts/N9FUf17Vyke
---

_I had a Leopard Server crash and burn so that nothing was responding, and when I forced the server to reboot (as well as rebooting a bunch of other ancillary servers and services just in case), I found an ominous sign in Server Admin, along with no user accounts in Workgroup Manager. Eek!_

<!--more--> 

Server Admin's **Open Directory** showed: 

{% raw %}
<div class="alert alert-danger">
<p><strong>LDAP Server is:</strong> stopped</p>
<p><strong>Password Server is:</strong> running</p>
<p><strong>Kerberos is:</strong> stopped</p>
</div>
{% endraw %}

Not good. Never fear, though. 

### How to Fix a Corrupted Open Directory

First, don't panic. Apple's forums show you can use "slapd -Tt" to check the configuration. 

{% codeblock Check the Config lang:console %}
myhost:~ administrator$ sudo bash
Password: ********
bash-3.2# /usr/libexec/slapd -Tt
overlay_config(): warning, overlay "dynid" already in list
overlay_config(): warning, overlay "dynid" already in list
overlay_config(): warning, overlay "dynid" already in list
overlay_config(): warning, overlay "dynid" already in list
overlay_config(): warning, overlay "dynid" already in list
bdb(dc=myhost,dc=mydomain,dc=com): PANIC: fatal region error detected; run recovery
bdb_db_open: Database cannot be opened, err -30978. Restore from backup!
bdb(dc=myhost,dc=mydomain,dc=com): DB_ENV->lock_id_free interface requires /
   an environment configured for the locking subsystem
backend_startup_one: bi_db_open failed! (-30978)
slap_startup failed (test would succeed using the -u switch)
{% endcodeblock %} 


The "run recovery" here means to run the db_recovercommand (a.k.a. slapd_db_recoveron other *nix LDAPs). Use the -v switch to make the result verbose. 

{% codeblock Recover OD lang:console %}
bash-3.2# db_recover-v -h /var/db/openldap/openldap-
openldap-data/  openldap-slurp/ 
bash-3.2# db_recover -v -h /var/db/openldap/openldap-data/
db_recover: Finding last valid log LSN: file: 6 offset 4190936
db_recover: Recovery starting from [6][4190795]
db_recover: Recovery complete at Thu Oct 15 21:57:41 2009
db_recover: Maximum transaction ID 80000225 Recovery checkpoint [6][4190936]
{% endcodeblock %} 


Ah, that looked nice. Then run slapd -Tt again to test, and if all is well, exit out of the sudo'ed bash shell. 

{% codeblock Check the Config lang:console %}
bash-3.2# /usr/libexec/slapd -Tt
overlay_config(): warning, overlay "dynid" already in list
overlay_config(): warning, overlay "dynid" already in list
overlay_config(): warning, overlay "dynid" already in list
overlay_config(): warning, overlay "dynid" already in list
overlay_config(): warning, overlay "dynid" already in list
config file testing succeeded
bash-3.2# exit
myhost:~ administrator$
{% endcodeblock %} 

After a few minutes launchd should kickstart the Open Directory services again so that you see: 

{% raw %}
<div class="alert alert-success">
<p><strong>LDAP Server is:</strong> running</p>
<p><strong>Password Server is:</strong> running</p>
<p><strong>Kerberos is:</strong> running</p>
</div>
{% endraw %}

A couple of tests show I once again have Wiki Server, iCal Server, Jabber Chat etc, all the Open Directory and Kerberos-based services back on line. _Breathe a sigh of relief_ if this helped you and let me know in the comments or link me from your blog post! 

