## похожие тайтлы

`GET https://api.cdnrulib.link/api/manga/{slug_url}/similar`

для animelib используется аналогичный маршрут `/api/anime/{slug_url}/similar`.

возвращает список похожих тайтлов. 

## заголовки

| заголовок | значение |
|---|---|
| `Accept` | `application/json` |

## пример запроса

```http
GET /api/manga/178245--rikai-no-aru-karen-chan/similar HTTP/2
Host: api.cdnrulib.link
Accept: application/json
```

## пример ответа

```json
{
  "data": [
    {
      "id": 230349,
      "similar": "Схож по рисовке",
      "user_id": 9424532,
      "media": {
        "id": 144718,
        "name": "Евангелие в манге",
        "rus_name": "Евангелие в манге",
        "eng_name": "",
        "model": "manga",
        "slug": "evangelie-v-mange",
        "slug_url": "144718--evangelie-v-mange",
        "cover": {
          "thumbnail": "https://cover.cdnrulib.link/uploads/cover/evangelie-v-mange/cover/d1992f16-4629-4e42-8dab-097f1778a798_thumb.jpg",
          "default": "https://cover.cdnrulib.link/uploads/cover/evangelie-v-mange/cover/d1992f16-4629-4e42-8dab-097f1778a798.jpg"
        },
        "ageRestriction": {
          "id": 3,
          "label": "16+"
        },
        "site": 1,
        "type": {
          "id": 8,
          "label": "Руманга"
        },
        "is_licensed": false,
        "content_marking": [
          {
            "id": 2,
            "label": "Содержит упоминание наркотиков"
          }
        ],
        "status": {
          "id": 1,
          "label": "Онгоинг"
        },
        "releaseDateString": "2022 г.",
        "is_authorship": false
      },
      "votes": {
        "up": 302,
        "down": 52,
        "user": null
      }
    }
  ]
}
```

