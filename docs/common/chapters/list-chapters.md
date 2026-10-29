# главы манги

`GET https://api.cdnrulib.link/api/manga/{slug_url}/chapters`

возвращает все главы тайтла с переводами, командами и пользователями, загрузившими главу. авторизация не требуется.

## заголовки

| заголовок | значение |
|---|---|
| `Site-id` | `1` для mangalib ([константы](../../constants.md)) |
| `Referer` | `https://mangalib.org/` |
| `Accept` | `application/json` |

## параметры

| параметр | тип | описание |
|---|---|---|
| `slug_url` | `string` | идентификатор тайтла |

## пример запроса

```http
GET /api/manga/45638--hello-i-am-a-witch-and-my-crush-wants-me-to-make-a-love-potion/chapters HTTP/2
Host: api.cdnrulib.link
Site-id: 1
Referer: https://mangalib.org/
Accept: application/json
```

## пример ответа

```json
{
  "data": [
    {
      "id": 964051,
      "index": 1,
      "item_number": 1,
      "volume": "1",
      "number": "1",
      "number_secondary": "1",
      "name": "",
      "branches_count": 1,
      "branches": [
        {
          "id": 964051,
          "branch_id": null,
          "created_at": "2020-10-12T14:52:41.000000Z",
          "teams": [
            {
              "id": 0,
              "slug": "unknown",
              "slug_url": "0--unknown",
              "model": "team",
              "name": "Неизвестный",
              "cover": {
                "filename": null,
                "thumbnail": "https://cover.cdnrulib.link/static/images/placeholders/user_avatar.png",
                "default": "https://cover.cdnrulib.link/static/images/placeholders/user_avatar.png",
                "md": "https://cover.cdnrulib.link/static/images/placeholders/user_avatar.png"
              }
            }
          ],
          "expired_type": 0,
          "user": {
            "username": "example_user",
            "id": 1000000
          }
        }
      ],
      "bundle_id": null
    }
  ]
}
```
