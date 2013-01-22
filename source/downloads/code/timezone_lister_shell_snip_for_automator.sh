echo == Reference Times ==
echo -e "Tokyo - \t" `TZ=Asia/Tokyo date "+%Z (%z) %R %a %e %b %Y";`
echo -e "Hong Kong - \t" `TZ=Hongkong date "+%Z (%z) %R %a %e %b %Y";`
echo -e "Calcutta - \t" `TZ=Asia/Calcutta date "+%Z (%z) %R %a %e %b %Y";`
echo -e "Berlin - \t" `TZ=Europe/Berlin date "+%Z (%z) %R %a %e %b %Y";`
echo -e "London - \t" `TZ=GMT date "+%Z (%z) %R %a %e %b %Y";`
echo -e "New York - \t" `TZ=US/Eastern date "+%Z (%z) %R %a %e %b %Y";`
echo -e "Chicago - \t" `TZ=US/Central date "+%Z (%z) %R %a %e %b %Y";`
echo -e "Denver - \t" `TZ=US/Mountain date "+%Z (%z) %R %a %e %b %Y";`
echo -e "San Francisco - \t" `TZ=US/Pacific date "+%Z (%z) %R %a %e %b %Y"`