#!/bin/bash
host="mbpw3.us.to"
ports=(80 443)
sshs=(22 24 26)
timeout=1

# make sure proper ports are open
function portCheck {
    for port in "${ports[@]}"
    do
        res=$(nc -zv -w"$timeout" "$host" "$port" 2>&1)
        if [[ "$res" != *"refused"* ]]
        then
            echo "Port Open: $(echo $res | awk -F"[()]" '{print $2}')"
        else
            echo "Port Closed: $port"
        fi
    done    
}

# verify ssh connections
function sshCheck {
    for port in "${sshs[@]}"
    do
        name=$(ssh -o ConnectTimeout="$timeout" root@"$host" -p "$port" "hostname" 2>/dev/null) 
        if [ "$?" = "0" ]
        then
          echo "SSH Successful: $name"
        else
          echo "SSH Failed: $port"
        fi
    done
}

# resolve hostname
function domainCheck {
    ip=$(getent hosts "$host" | awk '{ print $1 }')
    if [ -n "$ip" ]
    then
        echo "Domain Resolved: $ip"
    else
        echo "Resolve Failed"
    fi
}

# check temperature
function tempCheck {
    for port in "${sshs[@]}"
    do
        tempCmd="hostname | tr -d '\n' && echo ': ' | tr -d '\n' && cat /sys/class/thermal/thermal_zone*/temp | tail -1 | awk '{print \$1/1000}' | tr -d '\n'"
        ssh -o ConnectTimeout="$timeout" root@"$host" -p "$port" "$tempCmd && echo °C" 2>/dev/null
    done 
}

# display starting info
clear
echo "Host: ${host[@]}"
echo "Ports: ${ports[@]}"
echo "SSH: ${sshs[@]}"
echo

# handle flags
case "$1" in 
    -p)
        portCheck
        ;;
    
    -s)
        sshCheck
        ;;
    -d)
        domainCheck
        ;;
    -t)
        tempCheck
        ;;
    *)
        domainCheck
        sshCheck  
        portCheck
        echo
        tempCheck
        ;;
esac
