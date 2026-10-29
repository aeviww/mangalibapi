# поиск тайтлов

`GET https://api.cdnrulib.link/api/manga?q={query}`

для animelib используется `GET https://hapi.hentaicdn.org/api/anime?q={query}`.

## заголовки

| заголовок | значение |
|---|---|
| `Site-id` | `1` для mangalib ([константы](../../constants.md)) |
| `Referer` | `https://mangalib.org/` |
| `Accept` | `application/json` |

## параметры

| параметр | тип | обязателен | описание |
|---|---|---|---|
| `q` | `string` | да | поисковая строка; в url-encoding |
| `site_id[]` | `integer[]` | да | id сервисов, по которым искать |
| `page` | `integer` | нет | номер страницы |
| `fields[]` | `string[]` | нет | дополнительные поля ответа |

`q` ищет по названиям тайтлов. быстрый поиск на сайте отправляет несколько запросов: отдельно для `site_id[]=1` (mangalib), `site_id[]=3` (ranobelib) и `/api/anime?q=` (animelib). чтобы ограничиться мангой, передайте только `site_id[]=1`.

## пример запроса

```http
GET /api/manga?q=%D0%B2%D0%B5%D0%B4%D1%8C%D0%BC%D0%B0&site_id%5B0%5D=1&fields%5B0%5D=rate_avg&fields%5B1%5D=rate&fields%5B2%5D=releaseDate&fields%5B3%5D=extra_release_status HTTP/2
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
      "id": 55160,
      "name": "poggunui bohojaneun ag-yeog manyeoibnida",
      "rus_name": "Злая ведьма - хранитель тирана",
      "eng_name": "The Tyrant's Guardian Is an Evil Witch",
      "model": "manga",
      "slug": "poggunui-bohojaneun-ag-yeog-manyeoibnida",
      "slug_url": "55160--poggunui-bohojaneun-ag-yeog-manyeoibnida",
      "cover": {
        "filename": "dbb84002-ea5a-45e7-a8e2-ac00cdbd0a09",
        "thumbnail": "https://cover.cdnrulib.link/uploads/cover/poggunui-bohojaneun-ag-yeog-manyeoibnida/cover/dbb84002-ea5a-45e7-a8e2-ac00cdbd0a09_thumb.jpg",
        "default": "https://cover.cdnrulib.link/uploads/cover/poggunui-bohojaneun-ag-yeog-manyeoibnida/cover/dbb84002-ea5a-45e7-a8e2-ac00cdbd0a09.jpg",
        "md": "https://cover.cdnrulib.link/uploads/cover/poggunui-bohojaneun-ag-yeog-manyeoibnida/cover/dbb84002-ea5a-45e7-a8e2-ac00cdbd0a09.jpg"
      },
      "ageRestriction": {
        "id": 3,
        "label": "16+"
      },
      "site": 1,
      "type": {
        "id": 5,
        "label": "Манхва"
      },
      "rating": {
        "average": "8.54",
        "averageFormated": "8.5",
        "votes": 10115,
        "votesFormated": "10.1 K",
        "user": 0
      },
      "content_marking": [],
      "status": {
        "id": 2,
        "label": "Завершён"
      },
      "releaseDateString": ""
    }
  ],
  "links": {
    "first": "http://api.cdnrulib.link/api/manga?page=1",
    "last": null,
    "prev": null,
    "next": "http://api.cdnrulib.link/api/manga?page=2"
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "per_page": 60,
    "to": 60,
    "page": 1,
    "has_next_page": true,
    "seed": "a2f5ecbe4e0eecd8cb80de46a9569098"
  }
}
```

пример сокращён: реальный ответ содержит до 60 элементов.
