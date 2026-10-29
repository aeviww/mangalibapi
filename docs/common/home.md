# главная и ивенты

## главная страница

`GET https://api.cdnrulib.link/api/`

возвращает блоки главной страницы: популярное, новинки, обновления, коллекции, рецензии, новости, форум и другие. авторизация не требуется, но часть блоков зависит от пользователя и может быть пустой.

### заголовки

| заголовок | значение |
|---|---|
| `Site-id` | `1` для mangalib ([константы](../constants.md)) |
| `Referer` | `https://mangalib.org/` |
| `Accept` | `application/json` |

### пример запроса

```http
GET /api/ HTTP/2
Host: api.cdnrulib.link
Site-id: 1
Referer: https://mangalib.org/
Accept: application/json
```

### пример ответа

```json
{
  "data": {
    "popular": [
      {
        "id": 6721,
        "name": "Ni Tian Xie Shen",
        "rus_name": "Восставший против неба",
        "eng_name": "Against the Gods",
        "model": "manga",
        "slug": "ni-tian-xie-shen",
        "slug_url": "6721--ni-tian-xie-shen",
        "site": 1
      }
    ],
    "newest": [
      {
        "id": 277679,
        "name": "Les Fleurs de grand frère",
        "rus_name": "Цветы старшего брата",
        "eng_name": "",
        "model": "manga",
        "slug": "les-fleurs-de-grand-frere",
        "slug_url": "277679--les-fleurs-de-grand-frere",
        "site": 1
      }
    ],
    "can_view_calendar": false,
    "can_view_home_upcoming": false,
    "upcoming_releases": null,
    "server": "debian-mysql10"
  }
}
```

пример сокращён: реальный ответ содержит десятки элементов и блоков, включая `collections`, `reviews`, `latest_updates`, `news`, `forum` и `slider`.

## ивенты

`GET https://api.cdnrulib.link/api/events`

возвращает активные и предстоящие ивенты

### пример запроса

```http
GET /api/events HTTP/2
Host: api.cdnrulib.link
Site-id: 1
Referer: https://mangalib.org/
Accept: application/json
```

### пример ответа

```json
{
  "data": [
    {
      "id": 1,
      "name": "Конфетное безумие",
      "slug": "halloween-2026",
      "page_template": "halloween_2026",
      "is_promoted": true,
      "preview": false,
      "sites": [1, 2, 3, 4, 5],
      "description": "Читайте, смотрите и обсуждайте тайтлы.\nСоберите ивентовый альбом из 30 карт.",
      "starts_at": "2026-10-23T20:56:00+00:00",
      "earning_ends_at": "2026-11-10T20:59:00+00:00",
      "timezone": "UTC",
      "status": "active",
      "earning_available": true,
      "store_available": true,
      "currency": {
        "name": "Конфеты",
        "price": 5,
        "balance": null
      }
    }
  ]
}
```
