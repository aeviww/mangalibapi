# баны пользователя

`GET https://api.cdnrulib.link/api/bans`

возвращает список банов пользователя. требуется авторизация.

## параметры

| параметр | тип | описание |
|---|---|---|
| `user_id` | `integer` | ID пользователя |
| `page` | `integer` | Номер страницы |

## заголовки

| заголовок | значение |
|---|---|
| `Authorization` | `Bearer <token>` |
| `Site-id` | ID сайта ([константы](../../constants.md)) |
| `Accept` | `application/json` |

## пример запроса

```http
GET /api/bans?user_id=11101243&page=1 HTTP/2
Host: api.cdnrulib.link
Authorization: Bearer <token>
Site-id: 3
Accept: application/json
```

## пример ответа

-

