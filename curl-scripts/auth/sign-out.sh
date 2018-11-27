# ID=2 sh curl-scripts/sign-out.sh

curl "http://localhost:4741/dialogs/sign-out" \
  --include \
  --request DELETE \

echo
