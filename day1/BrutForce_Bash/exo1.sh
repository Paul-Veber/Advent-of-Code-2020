#!/bin/bash

. input.txt

first=0
second=0
third=0
summ=0

for i in ${input[@]}; do
    echo $i
    for j in ${input[@]}; do
        echo "j $j"
        for k in ${input[@]}; do
            summ=$(($i + $j + $k))
            echo "somme $summ"
            if [ "$summ" -eq "2020" ]; then
                first=$i
                second=$j
                third=$k
                break 3
            fi
        done
    done
done

rep=$(($first * $second * $third))

echo "$first X $second x $third = $rep"
