#!/bin/bash

pattern=$1
directory=$2
if [ -z "directory" ]; then
	directory='.'
fi
find "$directory" -type f -print() | xargs -0 grep -nH "$pattern"


