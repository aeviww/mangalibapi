# уведомления

`GET https://api.cdnrulib.link/api/notifications`

возвращает список уведомлений пользователя с возможностью фильтрации по типу и статусу прочтения. требуется авторизация

## параметры

| параметр | тип | описание |
|---|---|---|
| `notification_type` | `string` | тип уведомлений: `all`, `chapter`, `episode`, `comments`, `message`, `card`, `other` |
| `sort_type` | `string` | порядок сортировки: `asc`, `desc` |
| `read_type` | `string` | фильтр по статусу прочтения, например `unread` |
| `page` | `integer` | номер страницы |

## заголовки

| заголовок | значение |
|---|---|
| `Authorization` | `Bearer <token>` |
| `Site-id` | ID сайта ([константы](../../constants.md)) |
| `Accept` | `application/json` |

## пример запроса

```http
GET /api/notifications?notification_type=all&sort_type=desc&read_type=unread&page=1 HTTP/2
Host: api.cdnrulib.link
Authorization: Bearer <token>
Site-id: 3
Accept: application/json
```

## варианты запросов

| `notification_type` | описание |
|---|---|
| `all` | все уведомления |
| `chapter` | уведомления о главах |
| `episode` | уведомления об эпизодах |
| `comments` | уведомления о комментариях |
| `message` | уведомления о сообщениях |
| `card` | уведомления о карточках |
| `other` | остальные уведомления |

## пример ответа

```json
{
  "data": [
    {
      "id": 129852836,
      "type": "chapter",
      "category": "chapter",
      "data": {
        "user": {
          "id": 9929911,
          "username": "Сирии",
          "avatar": {
            "url": "https://cover.imglib.info/uploads/users/9929911/9111ef43-e135-401e-90df-a2d373ac1a41.jpg"
          }
        },
        "chapter": {
          "id": 4690012,
          "volume": "1",
          "number": "209",
          "name": "Специальная побочная история: 1"
        },
        "media": {
          "id": 210378,
          "rus_name": "У меня тайный роман с императором, а я и не подозреваю об этом",
          "model": "manga",
          "slug_url": "210378--hwangjewa-bimil-yonae-junginde-naneun-geugol-molra",
          "cover": {
            "default": "https://cover.imglib.info/uploads/cover/hwangjewa-bimil-yonae-junginde-naneun-geugol-molra/cover/0eb8524d-24c1-4209-9485-f29ccf4f9ada.jpg"
          },
          "site": 3
        },
        "teams": [
          {
            "id": 67534,
            "name": "Перевод Си"
          }
        ],
        "is_new": true
      },
      "yaoi": false,
      "content": {
        "type": "doc",
        "content": [
          {
            "type": "text",
            "text": "Добавлена новая Глава 209: Специальная побочная история: 1"
          }
        ]
      },
      "created_at": "2026-10-26T19:14:47.000000Z"
    }
  ],
  "links": {
    "first": "http://api.cdnrulib.link/api/notifications?page=1",
    "last": "http://api.cdnrulib.link/api/notifications?page=1",
    "prev": null,
    "next": null
  },
  "meta": {
    "current_page": 1,
    "last_page": 1,
    "per_page": 20,
    "total": 1
  }
}
```

---

# отметить все уведомления прочитанными

`PUT https://api.cdnrulib.link/api/notifications/bulk`

отмечает все уведомления пользователя как прочитанные.

**требуется авторизация.**

## заголовки

| заголовок | значение |
|---|---|
| `Authorization` | `Bearer <token>` |
| `Site-id` | ID сайта ([константы](../../constants.md)) |
| `Accept` | `application/json` |

## пример запроса

```http
PUT /api/notifications/bulk HTTP/2
Host: api.cdnrulib.link
Authorization: Bearer <token>
Site-id: 3
Accept: application/json
```

## пример ответа

```json
{
  "data": {
    "toast": {
      "type": "silent",
      "message": "Уведомления помечены прочитанными"
    }
  }
}
```

