# sh curl-scripts/json/sign-in.sh

curl "http://localhost:4741/dialogs/sign-in" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data ''
