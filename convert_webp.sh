#!/bin/sh
# `imagemagick` is required

images=`find public/images -type f -name \*.jpg -or -name \*.png`;
for image in $images;
  do convert $image -resize 640x640 -quality 75 -define webp:method=6 "${image%.*}.webp";
done
