---           
layout: post
post_title: "Corrupt Apple Leopard Server Open Directory Services"
date: 2009-10-15 13:24:33 UTC
updated: 2009-10-15 13:24:33 UTC
comments: true
categories: [Blog-Cogley, LDAP, Open Directory, tips, software, Troubleshooting, apple]
keywords: LDAP,Open Directory,tips,software,Troubleshooting,apple
tags: [LDAP,Open Directory,tips,software,Troubleshooting,apple]
---
 

I had a Leopard Server crash and burn so that nothing was responding, and when I forced the server to reboot (as well as rebooting a bunch of other ancillary servers and services just in case), I found an ominous sign in Server Admin, along with no user accounts in Workgroup Manager. Eek! Server Admin's **Open Directory** showed: 


> 


**LDAP Server is**: stopped


**Password Server is**: running


**Kerberos is**: stopped





Not good. Never fear, though. 


### How to Fix a Corrupted Open Directory



First, don't panic. Apple's forums show you can use "slapd -Tt" to check the configuration. 


> 


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





The "run recovery" here means to run the db_recovercommand (a.k.a. slapd_db_recoveron other *nix LDAPs). Use the -v switch to make the result verbose. 


> 


bash-3.2# db_recover-v -h /var/db/openldap/openldap-


openldap-data/  openldap-slurp/ 


bash-3.2# db_recover -v -h /var/db/openldap/openldap-data/


db_recover: Finding last valid log LSN: file: 6 offset 4190936


db_recover: Recovery starting from [6][4190795]


db_recover: Recovery complete at Thu Oct 15 21:57:41 2009


db_recover: Maximum transaction ID 80000225 Recovery checkpoint [6][4190936]





Ah, that looked nice. Then run slapd -Tt again to test, and if all is well, exit out of the sudo'ed bash shell. 


> 


bash-3.2# /usr/libexec/slapd -Tt


overlay_config(): warning, overlay "dynid" already in list


overlay_config(): warning, overlay "dynid" already in list


overlay_config(): warning, overlay "dynid" already in list


overlay_config(): warning, overlay "dynid" already in list


overlay_config(): warning, overlay "dynid" already in list


config file testing succeeded


bash-3.2# exit


myhost:~ administrator$





After a few minutes launchd should kickstart the Open Directory services again so that you see: 


> 


**LDAP Server is**: running


**Password Server is**: running


**Kerberos is**: running





A couple of tests shows I once again have Wiki Server, iCal Server, Jabber Chat etc, all the Open Directory and Kerberos-based services back on line. _Breathe a sigh of relief_ if this helped you and let me know in the comments! 

