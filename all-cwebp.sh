#!/bin/sh
images=`find public/images -type f -name \*.jpg -or -name \*.png`;
for image in $images;
  do cwebp -q 80 $image -o "${image%.*}.webp";
done
