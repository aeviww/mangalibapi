# получение информации о тайтле

`GET https://api.cdnrulib.link/api/manga/{slug_url}`

для animelib используется аналогичный маршрут `/api/anime/{slug_url}`.

возвращает информацию о тайтле. требует заголовок `Site-id`. для тайтлов `18+` требуется авторизация, для `16+` и ниже - нет.


## заголовки

| заголовок | значение |
|---|---|
| `Authorization` | `Bearer <token>` (только для тайтлов `18+`) |
| `Site-id` | ID сайта ([константы](../../constants.md)) |
| `Accept` | `application/json` |

## параметры

| параметр | тип | описание |
|---|---|---|
| `slug_url` | `string` | идентификатор тайтла, например `98635--kouiu-no-ga-ii` |
| `fields[]` | `string` | поле ответа, которое нужно получить |

в примере используются поля `user`, `metadata`, `metadata.count`, `metadata.close_comments`, `chap_count`, `status_id`, `close_view`.

## пример запроса

```http
GET /api/manga/178245--rikai-no-aru-karen-chan HTTP/2
Host: api.cdnrulib.link
Site-id: 1
Accept: application/json
```

## пример ответа

```json
{
  "data": {
    "id": 178245,
    "name": "Rikai no Aru Karen-chan",
    "rus_name": "Карен — понимающая девушка.",
    "eng_name": "Karen is an understanding girl.",
    "model": "manga",
    "slug": "rikai-no-aru-karen-chan",
    "slug_url": "178245--rikai-no-aru-karen-chan",
    "cover": {
      "filename": "d97bc95b-1928-4644-b0fc-c54f4899a249",
      "thumbnail": "https://cover.imglib.info/uploads/cover/rikai-no-aru-karen-chan/cover/d97bc95b-1928-4644-b0fc-c54f4899a249_thumb.jpg",
      "default": "https://cover.imglib.info/uploads/cover/rikai-no-aru-karen-chan/cover/d97bc95b-1928-4644-b0fc-c54f4899a249.jpg",
      "md": "https://cover.imglib.info/uploads/cover/rikai-no-aru-karen-chan/cover/d97bc95b-1928-4644-b0fc-c54f4899a249.jpg"
    },
    "ageRestriction": {
      "id": 4,
      "label": "18+"
    },
    "site": 1,
    "type": {
      "id": 1,
      "label": "Манга"
    },
    "is_licensed": false,
    "content_marking": [
      {
        "id": 2,
        "label": "Содержит упоминание наркотиков",
        "formulation": "Незаконное потребление наркотических средств, психотропных веществ, их аналогов причиняет вред здоровью, их незаконный оборот запрещен и влечет установленную законодательством ответственность"
      }
    ],
    "status": {
      "id": 1,
      "label": "Онгоинг"
    },
    "releaseDateString": "2021 г."
  },
  "meta": {
    "country": "RU"
  },
  "server": "debian-php"
}
```
