# главы манги

`GET https://api.cdnrulib.link/api/manga/{slug_url}/chapters`

возвращает список глав манги, включая информацию о переводах, командах и пользователях. не требует авторизации

## заголовки

| заголовок | значение |
|---|---|
| `Accept` | `application/json` |

## пример запроса

```http
GET /api/manga/86752--sairentouitchi-chin-mo-ku-no-majo-no-kakushi-goto/chapters HTTP/2
Host: api.cdnrulib.link
Accept: application/json
```

## пример ответа

```json
{
  "data": [
    {
      "id": 3697751,
      "index": 1,
      "item_number": 1,
      "volume": "1",
      "number": "0",
      "number_secondary": "1",
      "name": "Пролог",
      "branches_count": 2,
      "branches": [
        {
          "id": 3697751,
          "branch_id": 23079,
          "created_at": "2025-07-21T21:11:27.000000Z",
          "teams": [
            {
              "id": 28698,
              "slug": "pen",
              "slug_url": "28698--pen",
              "model": "team",
              "name": "Ко₽яжн@я_лярв@",
              "cover": {
                "filename": "oVePUlNK7nDB",
                "thumbnail": "https://cover.cdnrulib.link/uploads/team/pen/cover/oVePUlNK7nDB_thumb.jpg",
                "default": "https://cover.cdnrulib.link/uploads/team/pen/cover/oVePUlNK7nDB_250x350.jpg",
                "md": "https://cover.cdnrulib.link/uploads/team/pen/cover/oVePUlNK7nDB_250x350.jpg"
              }
            }
          ],
          "expired_type": 0,
          "user": {
            "username": "Tori_bragunia",
            "id": 403536
          }
        }
      ],
      "bundle_id": null
    }
  ]
}
```