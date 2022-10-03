#! /bin/bash

echo "Compiling babel"

babel public/javascripts/components/ --out-dir public/javascripts/compiled/ --presets @babel/preset-react

echo "Done compiling"
