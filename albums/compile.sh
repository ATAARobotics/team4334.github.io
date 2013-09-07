echo "going to $1thumbs"

mkdir "$1thumbs"
mogrify -path "$1thumbs" -resize 1080x1080 $1*.JPG
mogrify -path "$1thumbs" -resize 1080x1080 $1*.jpg
mogrify -path "$1thumbs" -resize 1080x1080 $1*.PNG
mogrify -path "$1thumbs" -resize 1080x1080 $1*.png
