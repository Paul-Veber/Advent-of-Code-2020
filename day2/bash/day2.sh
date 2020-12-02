#!/bin/bash

. testArray.txt

for item in ${array[@]} 
do 
    sed -i 's/\ /,/g' $item >> testArray.txt
done