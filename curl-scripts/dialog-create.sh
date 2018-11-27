# sh curl-scripts/json/game-create.sh

curl --include \ "http://localhost:4741/dialogs/" \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
#   --data '{
#     "dialog": {
#       "id": "'"${ID}"'",
#       "cells": ["","","","","","","","",""],
#       "over": false,
#       "player_x": {
#         "id": 1,
#         "email": "'"${EMAIL}"'"
#       },
#       "player_o": null
# }'

echo
