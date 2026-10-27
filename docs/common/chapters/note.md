# добавление заметок к главе

`POST https://api.cdnrulib.link/api/bookmarks/note`

добавляет заметки к главе

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
| `bookmark_id` | `integer` | ID закладки |
| `bookmark_type` | `string` | Тип закладки, например `manga_bookmark` |
| `item_id` | `integer` | ID главы |
| `item_type` | `string` | Тип объекта, например `chapter` |
| `number_first` | `string` | Основной номер главы |
| `number_secondary` | `string` | Дополнительный номер главы |
| `content` | `array` | Список заметок |
| `content[].position` | `string` | Позиция заметки |
| `content[].text` | `string` | Текст заметки |

### пример запроса

```http
POST /api/bookmarks/note HTTP/2
Host: api.cdnrulib.link
Authorization: Bearer <token>
Site-id: 1
Content-Type: application/json
Accept: application/json

{
  "bookmark_id": 1244383914,
  "bookmark_type": "manga_bookmark",
  "item_id": 964051,
  "item_type": "chapter",
  "number_first": "1",
  "number_secondary": "1",
  "content": [
    {
      "position": "1",
      "text": "123"
    }
  ]
}
```

### пример ответа

```json
{
  "data": {
    "id": 3822565,
    "number": {
      "first": "1",
      "secondary": "1"
    },
    "notes": [
      {
        "position": "1",
        "text": "123"
      }
    ],
    "item": {
      "id": 964051,
      "type": null
    }
  }
}
```