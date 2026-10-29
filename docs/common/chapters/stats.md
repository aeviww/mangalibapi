# статистика тайтла

`GET https://api.cdnrulib.link/api/manga/{slug_url}/stats`

для animelib используется аналогичный маршрут `/api/anime/{slug_url}/stats` 

возвращает распределение закладок и оценок тайтла. авторизация не требуется.

## заголовки

| заголовок | значение |
|---|---|
| `Site-id` | `1` для mangalib ([константы](../../constants.md)) |
| `Referer` | `https://mangalib.org/` |
| `Accept` | `application/json` |

## параметры

| параметр | тип | описание |
|---|---|---|
| `bookmarks` | `boolean` | вернуть статистику закладок: `true` |
| `rating` | `boolean` | вернуть статистику оценок: `true` |

параметры можно комбинировать. без параметров ответ содержит `{"data": []}` - это не ошибка, а отсутствие запрошенных блоков.

## пример запроса

```http
GET /api/manga/45638--hello-i-am-a-witch-and-my-crush-wants-me-to-make-a-love-potion/stats?bookmarks=true&rating=true HTTP/2
Host: api.cdnrulib.link
Site-id: 1
Referer: https://mangalib.org/
Accept: application/json
```

## пример ответа

```json
{
  "data": {
    "bookmarks": {
      "count": 27150,
      "stats": [
        {
          "percent": 47.7,
          "value": 12947,
          "label": "Читаю",
          "meta": {
            "id": 1,
            "color": "#ff9b40"
          }
        },
        {
          "percent": 31.6,
          "value": 8591,
          "label": "В планах",
          "meta": {
            "id": 2,
            "color": "#2196f3"
          }
        }
      ]
    },
    "rating": {
      "count": 1100,
      "stats": [
        {
          "label": 10,
          "value": 908,
          "percent": 82.5,
          "meta": {
            "id": 10
          }
        },
        {
          "label": 9,
          "value": 70,
          "percent": 6.4,
          "meta": {
            "id": 9
          }
        }
      ]
    }
  }
}
```
