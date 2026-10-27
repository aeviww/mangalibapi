# статистика пользователя

`GET https://api.cdnrulib.link/api/user/{user_id}/stats`

возвращает статистику пользователя для выбранного сайта. Требует авторизации.

## заголовки

| заголовок | значение |
|---|---|
| `Authorization` | `Bearer <token>` |
| `Site-id` | `1` ([константы](../../constants.md)) |
| `Accept` | `application/json` |

## пример запроса

```http
GET /api/user/11101243/stats HTTP/2
Host: api.cdnrulib.link
Authorization: Bearer <token>
Site-id: 1
Accept: application/json
```

## пример ответа

```json
{
  "data": {
    "genres": [
      {
        "value": 3,
        "formated": "3",
        "short": "3",
        "label": "Фэнтези",
        "percent": 33.3
      },
      {
        "value": 2,
        "formated": "2",
        "short": "2",
        "label": "Приключения",
        "percent": 22.2
      },
      {
        "value": 1,
        "formated": "1",
        "short": "1",
        "label": "Драма",
        "percent": 11.1
      },
      {
        "value": 1,
        "formated": "1",
        "short": "1",
        "label": "Романтика",
        "percent": 11.1
      },
      {
        "value": 1,
        "formated": "1",
        "short": "1",
        "label": "Школа",
        "percent": 11.1
      },
      {
        "value": 1,
        "formated": "1",
        "short": "1",
        "label": "Комедия",
        "percent": 11.1
      }
    ],
    "tags": [
      {
        "value": 3,
        "formated": "3",
        "short": "3",
        "label": "В основном подростковый состав",
        "percent": 18.8
      },
      {
        "value": 3,
        "formated": "3",
        "short": "3",
        "label": "Женский Протагонист",
        "percent": 18.8
      },
      {
        "value": 3,
        "formated": "3",
        "short": "3",
        "label": "Магия",
        "percent": 18.8
      },
      {
        "value": 3,
        "formated": "3",
        "short": "3",
        "label": "Неизвестный",
        "percent": 18.8
      },
      {
        "value": 2,
        "formated": "2",
        "short": "2",
        "label": "Взросление",
        "percent": 12.5
      },
      {
        "value": 1,
        "formated": "1",
        "short": "1",
        "label": "Трагедия",
        "percent": 6.3
      },
      {
        "value": 1,
        "formated": "1",
        "short": "1",
        "label": "Неизвестный",
        "percent": 6.3
      }
    ],
    "manga_added": {
      "value": 0,
      "formated": "0",
      "short": "0",
      "label": "Создано тайтлов",
      "tag": "titles"
    },
    "manga_denied": {
      "value": 0,
      "formated": "0",
      "short": "0",
      "label": "Тайтлов",
      "tag": "titles"
    },
    "manga_moderation": {
      "value": 0,
      "formated": "0",
      "short": "0",
      "label": "Тайтлов",
      "tag": "titles"
    },
    "chapters_moderation": {
      "value": 0,
      "formated": "0",
      "short": "0",
      "label": "Глав",
      "tag": "chapters"
    },
    "chapters_added": {
      "value": 0,
      "formated": "0",
      "short": "0",
      "label": "Загружено глав",
      "tag": "chapters"
    },
    "players_added": {
      "value": 0,
      "formated": "0",
      "short": "0",
      "label": "Загружено эпиз.",
      "tag": "players"
    },
    "comments": {
      "value": 0,
      "formated": "0",
      "short": "0",
      "label": "Комментариев"
    },
    "reviews": {
      "type": [],
      "evaluation": {
        "neutral": 0,
        "positive": 0,
        "negative": 0,
        "all": 0
      }
    }
  }
}
```
