#!/bin/sh
# `imagemagick` is required

images=`find public/images -type f -name \*.jpg -or -name \*.png`;
for image in $images;
  do convert $image -resize 1024x1024 -quality 75 "${image%.*}.webp";
done
