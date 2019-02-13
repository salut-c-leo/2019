FILES=*.md
for f in $FILES
do
  # extension="${f##*.}"
  filename="${f%.*}"
  echo "Converting $f to $filename.html"
  `pandoc $f -o $filename.html`
done
