# комментарии

`GET https://api.cdnrulib.link/api/comments`

возвращает комментарии и ответы к указанному объекту. не требует авторизации

## заголовки

| заголовок | значение |
|---|---|
| `Accept` | `application/json` |

## параметры

| параметр | тип | описание |
|---|---|---|
| `post_id` | `integer` | ID объекта |
| `post_type` | `string` | Тип объекта, например `manga` |
| `sort_by` | `string` | Поле сортировки, например `id` |
| `sort_type` | `string` | Направление сортировки: `asc` или `desc` |
| `page` | `integer` | Номер страницы |

## пример запроса

```http
GET /api/comments?post_id=86752&post_type=manga&sort_by=id&sort_type=desc&page=1 HTTP/2
Host: api.cdnrulib.link
Accept: application/json
```

## пример ответа

```json
{
  "data": {
    "replies": [
      {
        "id": 293584624,
        "root_id": null,
        "parent_comment": null,
        "comment_level": 0,
        "comment": "<p>в ориге вроде больше 70 глав...пойду плакать и ждать...</p>",
        "created_at": "2026-01-13T21:06:33.000000Z",
        "user": {
          "id": 4561767,
          "username": "username"
        },
        "relation": {
          "id": 86752,
          "model": "manga",
          "rus_name": "Секрет молчаливой ведьмы"
        }
      }
    ]
  },
  "meta": {
    "has_next_page": true,
    "page": 1,
    "per_page": 25
  }
}
```

---

# создание комментария

`POST https://api.cdnrulib.link/api/comments`

создаёт комментарий к объекту. требует авторизации

## заголовки

| заголовок | значение |
|---|---|
| `Authorization` | `Bearer <token>` |
| `Site-id` | ID сайта ([константы](../../constants.md)) |
| `Content-Type` | `application/json` |
| `Accept` | `application/json` |

## тело запроса

| параметр | тип | описание |
|---|---|---|
| `comment` | `object` | Содержимое комментария в формате документа |
| `attachments` | `array` | Вложения |
| `post_type` | `string` | Тип объекта, например `manga` |
| `post_id` | `integer` | ID объекта |
| `parent_comment` | `integer/null` | ID родительского комментария |
| `root_id` | `integer/null` | ID корневого комментария |
| `comment_level` | `integer` | Уровень вложенности комментария |

## пример запроса

```http
POST /api/comments HTTP/2
Host: api.cdnrulib.link
Authorization: Bearer <token>
Site-id: 3
Content-Type: application/json
Accept: application/json

{
  "comment": {
    "type": "doc",
    "content": [
      {
        "type": "paragraph",
        "content": [
          {
            "type": "text",
            "text": "очень лампово и круто"
          }
        ]
      }
    ]
  },
  "attachments": [],
  "post_type": "manga",
  "post_id": 45638,
  "parent_comment": null,
  "root_id": null,
  "comment_level": 0
}
```

## пример ответа

```json
{
  "data": {
    "id": 312995283,
    "comment": "<p>очень лампово и круто</p>",
    "created_at": "2026-10-27T16:30:09.000000Z",
    "created_at_ts": 1793118609000,
    "comment_level": 0,
    "parent_comment": null,
    "root_id": null,
    "post_page": null,
    "user": {
      "id": 11101243,
      "username": "aeviww"
    },
    "votes": {
      "up": 0,
      "down": 0,
      "user": null
    },
    "relation_type": "manga",
    "relation_id": 45638
  }
}
```

---

# редактирование комментария

`PUT https://api.cdnrulib.link/api/comments/{comment_id}`

изменяет содержимое комментария. требует авторизации

## заголовки

| заголовок | значение |
|---|---|
| `Authorization` | `Bearer <token>` |
| `Site-id` | ID сайта ([константы](../../constants.md)) |
| `Content-Type` | `application/json` |
| `Accept` | `application/json` |

## параметры

| параметр | тип | описание |
|---|---|---|
| `comment_id` | `integer` | ID комментария |

## тело запроса

| параметр | тип | описание |
|---|---|---|
| `comment` | `object` | Новое содержимое комментария в формате документа |
| `attachments` | `array` | Вложения |

## пример запроса

```http
PUT /api/comments/312995283 HTTP/2
Host: api.cdnrulib.link
Authorization: Bearer <token>
Site-id: 3
Content-Type: application/json
Accept: application/json

{
  "comment": {
    "type": "doc",
    "content": [
      {
        "type": "paragraph",
        "content": [
          {
            "type": "text",
            "text": "очень лампово и круто."
          }
        ]
      }
    ]
  },
  "attachments": []
}
```

## пример ответа

```json
{
  "data": {
    "id": 312995283,
    "comment": "<p>очень лампово и круто.</p>",
    "created_at": "2026-10-27T16:30:09.000000Z",
    "created_at_ts": 1793118609000,
    "comment_level": 0,
    "parent_comment": null,
    "root_id": null,
    "post_page": null,
    "votes": {
      "up": 0,
      "down": 0,
      "user": null
    },
    "relation_type": "manga",
    "relation_id": 45638
  }
}
```

---

# голосование за комментарий

`POST https://api.cdnrulib.link/api/comments/{comment_id}/vote`

ставит лайк или дизлайк комментарию. требует авторизации

## заголовки

| заголовок | значение |
|---|---|
| `Authorization` | `Bearer <token>` |
| `Site-id` | ID сайта ([константы](../../constants.md)) |
| `Content-Type` | `application/json` |
| `Accept` | `application/json` |

## параметры

| параметр | тип | описание |
|---|---|---|
| `comment_id` | `integer` | ID комментария |

## тело запроса

| параметр | тип | описание |
|---|---|---|
| `vote` | `integer` | `1` — лайк, `0` — дизлайк |

## пример запроса

```http
POST /api/comments/312958876/vote HTTP/2
Host: api.cdnrulib.link
Authorization: Bearer <token>
Site-id: 3
Content-Type: application/json
Accept: application/json

{
  "vote": 1
}
```

## пример ответа

лайк:

```json
{
  "data": {
    "up": 1,
    "down": 0,
    "user": 1
  }
}
```

дизлайк — при отправке `{"vote": 0}`:

```json
{
  "data": {
    "up": 0,
    "down": 1,
    "user": 0
  }
}
```

---

# удаление комментария

`DELETE https://api.cdnrulib.link/api/comments/{comment_id}`

удаляет комментарий. требует авторизации

## заголовки

| заголовок | значение |
|---|---|
| `Authorization` | `Bearer <token>` |
| `Site-id` | ID сайта ([константы](../../constants.md)) |
| `Accept` | `application/json` |

## параметры

| параметр | тип | описание |
|---|---|---|
| `comment_id` | `integer` | ID комментария |

## пример запроса

```http
DELETE /api/comments/312995283 HTTP/2
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
      "type": "info",
      "message": "Комментарий был удалён"
    }
  }
}
```

## получение комментариев к главе

`GET https://api.cdnrulib.link/api/comments`

возвращает комментарии и ответы к указанной главе. 

### параметры запроса

| параметр | тип | описание |
|---|---|---|
| `post_id` | `integer` | ID главы |
| `post_type` | `string` | Тип объекта, например `chapter` |
| `sort_by` | `string` | Поле сортировки, например `id` |
| `sort_type` | `string` | Направление сортировки: `asc` или `desc` |
| `page` | `integer` | Номер страницы результатов |
| `post_page` | `integer` | Номер страницы главы, к которой относятся комментарии |

### заголовки

| заголовок | значение |
|---|---|
| `Accept` | `application/json` |

### пример запроса

```http
GET /api/comments?post_id=964051&post_type=chapter&sort_by=id&sort_type=desc&page=1&post_page=1 HTTP/2
Host: api.cdnrulib.link
Accept: application/json
```

### пример ответа

```json
{
  "data": {
    "replies": [
      {
        "id": 187308065,
        "root_id": 66166229,
        "parent_comment": 66166229,
        "comment_level": 1,
        "post_page": 1,
        "comment": "Дааа😭",
        "created_at": "2023-04-21T15:56:36.000000Z",
        "created_at_ts": 1682092596000,
        "relation_type": "chapter",
        "relation_id": 964051,
        "user": {
          "username": "Демон паук",
          "id": 1578240,
          "avatar": {
            "filename": "Zc8atEZYBvMD.jpg",
            "url": "https://cover.hentaicdn.org/uploads/users/1578240/Zc8atEZYBvMD.jpg"
          },
          "premium": {
            "enabled": false
          }
        },
        "votes": {
          "up": 3,
          "down": 0,
          "user": null
        },
        "relation": {
          "id": 964051,
          "name": "",
          "volume": "1",
          "number_secondary": "1",
          "number": "1",
          "branch_id": null,
          "manga_id": 45638,
          "media": {
            "id": 45638,
            "model": "manga",
            "name": "Doumo, Suki na hito ni Horegusuri wo Iraisareta Majo desu.",
            "rus_name": "Возлюбленный ведьмы попросил сварить приворотное зелье",
            "eng_name": "Hello, I am a Witch and my Crush Wants me to Make a Love Potion!",
            "slug": "hello-i-am-a-witch-and-my-crush-wants-me-to-make-a-love-potion",
            "slug_url": "45638--hello-i-am-a-witch-and-my-crush-wants-me-to-make-a-love-potion",
            "site": 1
          },
          "model": "chapter"
        }
      }
    ]
  }
}
```

