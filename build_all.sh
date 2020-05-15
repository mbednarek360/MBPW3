#!/bin/sh
mkdir service
cd service

# services
git clone https://github.com/mbednarek360/passplexer
git clone https://github.com/mbednarek360/SWIC_3

# build
mkdir ../bin
for serv_dir in *; do
   cd $serv_dir
   sh build.sh
   cd ..
   mv $serv_dir/*.tar.bz2 ../bin
   rm -r ../src/$serv_dir
   cd ../bin
   ls
   ls *.tar.bz2 | xargs -n1 tar -xvf
   mv src ../src/$serv_dir
   mv web ../src/$serv_dir
   cd ../service
   rm ../bin/*.tar.bz2 
done
rm -r ../bin
cd ..
rm -rf service