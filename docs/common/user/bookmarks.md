# закладки пользователя

## получение закладок

`GET https://api.cdnrulib.link/api/bookmarks`

возвращает список закладок пользователя. требуется авторизация.

### параметры запроса

| параметр | тип | описание |
|---|---|---|
| `status` | `integer` | ID статуса закладки |
| `user_id` | `integer` | ID пользователя |
| `sort_by` | `string` | Поле сортировки |
| `sort_type` | `string` | Направление сортировки: `asc` или `desc` |
| `page` | `integer` | Номер страницы |

### сортировка

для `sort_by` доступны следующие значения:

| значение | описание |
|---|---|
| `name` | По названию |
| `created_at` | По дате добавления |
| `rating` | По рейтингу |
| `last_chapter_at` | По дате последней главы |
| `updated_at` | По дате обновления |

### заголовки

| заголовок | значение |
|---|---|
| `Authorization` | `Bearer <token>` |
| `Site-id` | `1` ([константы](../../constants.md)) |
| `Accept` | `application/json` |

### пример запроса

```http
GET /api/bookmarks?status=2715149&user_id=11101243&sort_by=name&sort_type=desc&page=1 HTTP/2
Host: api.cdnrulib.link
Authorization: Bearer <token>
Site-id: 1
Accept: application/json
```

### пример ответа

```json
{
  "data": [
    {
      "id": 1348017544,
      "type": "manga_bookmark",
      "media_id": null,
      "item_id": 0,
      "progress": "0",
      "status": 2715149,
      "created_at": "2026-07-27 13:25:08",
      "updated_at": "2026-07-27T13:25:08.000000Z",
      "meta": {
        "comment": false,
        "rewatches": null,
        "item_number": null
      },
      "media": {
        "id": 65082,
        "name": "dajeonghan gaesaekkiui mog-eul biteulgessseubnida",
        "rus_name": "Я сверну шею этому милому ублюдку",
        "eng_name": "I Will Twist the Neck of a Friendly Little Bastard",
        "model": "manga",
        "slug": "ill-twist-your-neck-of-the-tender-asshole",
        "slug_url": "65082--ill-twist-your-neck-of-the-tender-asshole",
        "cover": {
          "filename": "e0e39ea7-f17a-45fe-b1a9-511e435810da",
          "thumbnail": "https://cover.cdnrulib.link/uploads/cover/ill-twist-your-neck-of-the-tender-asshole/cover/e0e39ea7-f17a-45fe-b1a9-511e435810da_thumb.jpg",
          "default": "https://cover.cdnrulib.link/uploads/cover/ill-twist-your-neck-of-the-tender-asshole/cover/e0e39ea7-f17a-45fe-b1a9-511e435810da.jpg",
          "md": "https://cover.cdnrulib.link/uploads/cover/ill-twist-your-neck-of-the-tender-asshole/cover/e0e39ea7-f17a-45fe-b1a9-511e435810da.jpg"
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
        "close_view": 0,
        "is_licensed": false,
        "last_item_at": "2026-09-27T13:53:34.000000Z",
        "content_marking": [],
        "metadata": {
          "last_item": {
            "id": 4563637,
            "model": "chapter",
            "volume": "4",
            "number": "165",
            "number_secondary": "4",
            "name": "",
            "slug": 4563637,
            "type": "chapter"
          }
        },
        "status": {
          "id": 2,
          "label": "Завершён"
        },
        "items_count": {
          "uploaded": 166,
          "total": 0
        },
        "releaseDateString": ""
      },
      "item": null,
      "rating": null
    }
  ],
  "links": {
    "first": "http://api.cdnrulib.link/api/bookmarks?page=1",
    "last": null,
    "prev": null,
    "next": null
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "path": "http://api.cdnrulib.link/api/bookmarks",
    "per_page": [24, 24],
    "to": 2,
    "page": 1,
    "next_page_url": false
  }
}
```

---

## создание закладки

`POST https://api.cdnrulib.link/api/bookmarks`

создаёт закладку для манги пользователя. требуется авторизация.

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
| `media_type` | `string` | Тип объекта |
| `media_slug` | `string` | Slug |
| `bookmark.item_id` | `integer` | ID главы |
| `bookmark.progress` | `string` | Прогресс чтения |
| `bookmark.status` | `integer` | ID статуса закладки |
| `meta.item_number` | `integer` | Номер главы |

### пример запроса

```http
POST /api/bookmarks HTTP/2
Host: api.cdnrulib.link
Authorization: Bearer <token>
Site-id: 1
Content-Type: application/json
Accept: application/json

{
  "media_type": "manga",
  "media_slug": "45638--hello-i-am-a-witch-and-my-crush-wants-me-to-make-a-love-potion",
  "bookmark": {
    "item_id": 964051,
    "progress": "1",
    "status": 2
  },
  "meta": {
    "item_number": 1
  }
}
```

### пример ответа

```json
{
  "data": {
    "id": 1244383914,
    "type": "manga_bookmark",
    "media_id": null,
    "item_id": 964051,
    "progress": "1",
    "status": 2,
    "calendar_visible": true,
    "calendar_notifications": true,
    "created_at": "2025-10-03T07:22:13.000000Z",
    "updated_at": "2026-10-27T16:45:26.000000Z",
    "meta": {
      "item_number": 1,
      "rewatches": 0,
      "rewatches_history": [],
      "comment": null,
      "notes": 0
    },
    "item": {
      "id": 964051,
      "model": "chapter",
      "volume": "1",
      "number": "1",
      "number_secondary": "1",
      "name": null,
      "slug": 964051,
      "branch_id": null,
      "manga_id": 45638,
      "created_at": "2020-10-12T14:52:41.000000Z",
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
}
```