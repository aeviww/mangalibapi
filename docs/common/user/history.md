# история чтения глав

`GET https://api.cdnrulib.link/api/user/chapters/history`

возвращает историю прочитанных глав пользователя. требует авторизации

## заголовки

| заголовок | значение |
|---|---|
| `Authorization` | `Bearer <token>` |
| `Site-id` | ID сайта ([константы](../../constants.md)) |
| `Accept` | `application/json` |

## параметры

| параметр | тип | описание |
|---|---|---|
| `page` | `integer` | Номер страницы |

## пример запроса

```http
GET /api/user/chapters/history?page=1 HTTP/2
Host: api.cdnrulib.link
Authorization: Bearer <token>
Site-id: 3
Accept: application/json
```

## пример ответа

```json
{
  "data": [
    {
      "view_at": "2026-10-15T05:06:43.000000Z",
      "media": {
        "id": 39562,
        "name": "Otonari no Tenshi-sama ni Itsu no Ma ni ka Dame Ningen ni Sareteita Ken",
        "rus_name": "Ангел по соседству меня ужасно балует",
        "eng_name": "The Angel Next Door Spoils Me Rotten",
        "model": "manga",
        "slug": "otonari-no-tenshi-sama-ni-itsu-no-ma-ni-ka-dame-ningen-ni-sareteita-ken-wn",
        "slug_url": "39562--otonari-no-tenshi-sama-ni-itsu-no-ma-ni-ka-dame-ningen-ni-sareteita-ken-wn",
        "cover": {
          "filename": "1b6c9a4d-e214-412b-880b-d824acbeb473",
          "thumbnail": "https://cover.imglib.info/uploads/cover/..._thumb.jpg",
          "default": "https://cover.imglib.info/uploads/cover/....jpg",
          "md": "https://cover.imglib.info/uploads/cover/....jpg"
        },
        "ageRestriction": {
          "id": 3,
          "label": "16+"
        },
        "site": 3,
        "type": {
          "id": 10,
          "label": "Япония"
        },
        "content_marking": [],
        "status": {
          "id": 4,
          "label": "Приостановлен"
        },
        "edition": {
          "id": 9,
          "slug": "light-novel",
          "name": "Лайт-новелла",
          "short_name": "LN"
        },
        "releaseDateString": ""
      },
      "item": {
        "id": 4533173,
        "model": "chapter",
        "volume": "13",
        "number": "9.5",
        "number_secondary": "13",
        "name": null,
        "slug": 4533173,
        "branch_id": null,
        "manga_id": 39562,
        "created_at": "2026-09-21T16:45:26.000000Z",
        "expired_at": null,
        "moderated": {
          "id": 1,
          "label": "Принято модерацией"
        },
        "likes_count": null,
        "expired_type": null,
        "bundle_id": null,
        "publish_at": null,
        "type": "chapter",
        "restricted_view": {
          "is_open": false,
          "price": null,
          "expired_at": null,
          "can_open_with_content_key": false
        }
      }
    }
  ],
  "links": {
    "first": "http://api.cdnrulib.link/api/user/chapters/history?page=1",
    "last": null,
    "prev": null,
    "next": "http://api.cdnrulib.link/api/user/chapters/history?page=2"
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "path": "http://api.cdnrulib.link/api/user/chapters/history",
    "per_page": 40,
    "to": 40
  }
}
```
