# оценка тайтла

`POST https://api.cdnrulib.link/api/manga/rate`

позволяет поставить или обновить оценку тайтлу. оценка задаётся числом от `0` до `10`.

### заголовки

| заголовок | значение |
|---|---|
| `Authorization` | `Bearer <token>` |
| `Site-id` | `1` ([константы](../../constants.md)) |
| `Content-Type` | `application/json` |
| `Accept` | `application/json` |

### параметры тела запроса

| параметр | тип | описание |
|---|---|---|
| `score` | `integer` | Оценка от `0` до `10` |
| `rateable_id` | `integer` | ID тайтла |
| `rateable_type` | `string` | тип обьекта, для ранобэлиба/яой/хентай/манга - manga, для анимелиба - anime |

### пример запроса

```http
POST /api/manga/rate HTTP/2
Host: api.cdnrulib.link
Authorization: Bearer <token>
Site-id: 1
Content-Type: application/json
Accept: application/json

{
  "score": 10,
  "rateable_id": 45638,
  "rateable_type": "manga"
}
```

### пример ответа

```json
{
  "data": {
    "average": "9.52",
    "averageFormated": "9.5",
    "votes": 1098,
    "votesFormated": "1.1 K",
    "user": 10
  }
}
```

