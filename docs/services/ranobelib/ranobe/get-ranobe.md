## получение главы

`GET https://api.imglib.info/api/manga/{slug_url}/chapter`

получает информацию о главе и её содержимое.

### query-параметры

| параметр | тип | описание |
|---|---|---|
| `volume` | `integer` | номер тома |
| `number` | `integer` | номер главы |

### заголовки

| заголовок | значение |
|---|---|
| `Accept` | `application/json` |

авторизация не требуется.

### пример запроса

```http
GET /api/manga/88175--its-my-first-time-being-loved-novel/chapter?volume=1&number=1 HTTP/2
Host: api.imglib.info
Accept: application/json
```

### пример ответа

```json
{
  "data": {
    "id": 1613675,
    "model": "chapter",
    "volume": "1",
    "number": "1",
    "number_secondary": "1",
    "name": "",
    "slug": "1613675",
    "branch_id": null,
    "manga_id": 88175,
    "created_at": "2021-08-31T21:12:09.000000Z",
    "expired_at": null,
    "moderated": {
      "id": 1,
      "label": "Принято модерацией"
    },
    "likes_count": 64,
    "is_liked": false,
    "is_viewed": false,
    "is_viewed_last_at": null,
    "expired_type": 0,
    "teams": [],
    "bundle_id": null,
    "bundle": null,
    "publish_at": null,
    "translation_quality_rating": {
      "average": "0",
      "averageFormated": "0",
      "votes": 0,
      "rated_chapters": 0,
      "can_rate": true,
      "categories": {
        "translation_accuracy": "0",
        "readability_adaptation": "0",
        "editing_formatting": "0"
      },
      "user": {
        "average": "0",
        "averageFormated": "0",
        "translation_accuracy": 0,
        "readability_adaptation": 0,
        "editing_formatting": 0
      }
    },
    "type": "chapter",
    "content": "<p data-paragraph-index=\"1\">Я немного изголодалась по ласке.</p><p data-paragraph-index=\"2\">- В эти выходные моя мама неожиданно попросила меня потусоваться, потому что у нее депрессия, так что ...</p>",
    "attachments": []
  }
}
```

