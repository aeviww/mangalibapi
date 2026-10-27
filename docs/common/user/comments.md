# комментарии пользователя

`GET https://api.cdnrulib.link/api/user/{user_id}/comments`

возвращает комментарии пользователя с возможностью фильтрации, сортировки и постраничной навигации. требует авторизации.

## параметры

| параметр | тип | описание |
|---|---|---|
| `user_id` | `integer` | ID пользователя |
| `sort_by` | `string` | Поле сортировки: `id`, `votes` |
| `sort_type` | `string` | Направление сортировки: `asc`, `desc` |
| `post_type` | `string` | Тип публикации |
| `has_images` | `integer` | Фильтр комментариев с изображениями: `1` |
| `page` | `integer` | Номер страницы |

### типы публикаций

| значение | описание |
|---|---|
| `manga` | Манга |
| `anime` | Аниме |
| `chapter` | Глава |
| `episodes` | Эпизод |
| `collection` | Коллекция |
| `review` | Рецензия |
| `post` | Пост |
| `discussion` | Обсуждение |
| `card` | Карточка |
| не указан | Все типы |

## заголовки

| заголовок | значение |
|---|---|
| `Authorization` | `Bearer <token>` |
| `Site-id` | `1` ([константы](../../constants.md)) |
| `Accept` | `application/json` |

## пример запроса

```http
GET /api/user/11101243/comments?sort_by=id&sort_type=desc&page=1 HTTP/2
Host: api.cdnrulib.link
Authorization: Bearer <token>
Site-id: 1
Accept: application/json
```

## варианты запросов

Сортировка по ID:

```http
GET /api/user/11101243/comments?sort_by=id&sort_type=desc&page=1
GET /api/user/11101243/comments?sort_by=id&sort_type=asc&page=1
```

Сортировка по голосам:

```http
GET /api/user/11101243/comments?sort_by=votes&sort_type=desc&page=1
```

Фильтрация по типу публикации:

```http
GET /api/user/11101243/comments?sort_by=id&sort_type=desc&post_type=manga&page=1
GET /api/user/11101243/comments?sort_by=id&sort_type=desc&post_type=anime&page=1
GET /api/user/11101243/comments?sort_by=id&sort_type=desc&post_type=chapter&page=1
GET /api/user/11101243/comments?sort_by=id&sort_type=desc&post_type=episodes&page=1
GET /api/user/11101243/comments?sort_by=id&sort_type=desc&post_type=collection&page=1
GET /api/user/11101243/comments?sort_by=id&sort_type=desc&post_type=review&page=1
GET /api/user/11101243/comments?sort_by=id&sort_type=desc&post_type=post&page=1
GET /api/user/11101243/comments?sort_by=id&sort_type=desc&post_type=discussion&page=1
GET /api/user/11101243/comments?sort_by=id&sort_type=desc&post_type=card&page=1
```

Комментарии с изображениями:

```http
GET /api/user/11101243/comments?sort_by=id&sort_type=desc&post_type=card&has_images=1&page=1
GET /api/user/11101243/comments?sort_by=votes&sort_type=desc&post_type=card&has_images=1&page=1
GET /api/user/11101243/comments?sort_by=id&sort_type=asc&post_type=card&has_images=1&page=1
```

Во всех запросах используются те же заголовки авторизации и `Site-id`.

## пример ответа

```json
{
  "data": [],
  "links": {
    "first": "http://api.cdnrulib.link/api/user/11101243/comments?page=1",
    "last": null,
    "prev": null,
    "next": null
  },
  "meta": {
    "current_page": 1,
    "from": null,
    "path": "http://api.cdnrulib.link/api/user/11101243/comments",
    "per_page": 20,
    "to": null,
    "items_count": 0
  }
}
```
