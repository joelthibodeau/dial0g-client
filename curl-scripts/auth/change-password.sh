# TOKEN=<token> OLD_PASSWORD=123 NEW_PASSWORD=321 sh curl-scripts/json/change-password.sh

curl "http://localhost:4741/dialogs/change-password" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "passwords": {
      "old": "'"${OLD_PASSWORD}"'",
      "new": "'"${NEW_PASSWORD}"'"
    }
  }'

echo
