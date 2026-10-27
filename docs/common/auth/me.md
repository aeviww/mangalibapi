# текущий пользователь

`GET https://api.cdnrulib.link/api/auth/me`

возвращает данные текущего пользователя.

## заголовки

| заголовок | значение |
|---|---|
| `Authorization` | `Bearer <token>` |
| `Accept` | `application/json` |

## пример запроса

```http
GET /api/auth/me HTTP/2
Host: api.cdnrulib.link
Authorization: Bearer <token>
Accept: application/json
```

## пример ответа

```json
{
  "data": {
    "id": 123456,
    "username": "example",
    "avatar": {
      "filename": null,
      "url": "https://cover.imglib.info/static/images/placeholders/user_avatar.png"
    },
    "balance": 100,
    "crystal_balance": 50,
    "gender": {
      "id": 0,
      "label": "Не указан"
    },
    "last_online_at": "2026-10-27T12:00:00.000000Z",
    "can_view_profile": true,
    "can_view_statistics": true,
    "viewable_statistics_site_ids": [1, 2, 3, 4, 5],
    "can_view_previous_usernames": true,
    "points_info": {
      "top": null,
      "total_points": 1200,
      "level": 5,
      "max_level_points": 500,
      "current_level_points": 200,
      "point_percent_progress": 40
    },
    "teams": [],
    "has_paid_teams": false,
    "rolesInTeams": [],
    "permissions": [],
    "roles": [],
    "content_keys": [],
    "metadata": {
      "auth_domains": {
        "1": "mangalib.org",
        "2": "v2.shlib.life",
        "3": "ranobelib.me",
        "4": "hentailib.me",
        "5": "v5.animelib.org"
      }
    },
    "login_streak": {
      "last_login_at": "2026-10-27 12:00:00",
      "login_streak": 3,
      "max_login_streak": 10
    },
    "login_streak_preferences": {
      "login_streak_light_icon_style": "light-orange",
      "login_streak_dark_icon_style": "dark-ember",
      "login_streak_theme": "auto"
    },
    "premium": {
      "enabled": false
    },
    "card_shard_weekly_limits": {
      "type": "split",
      "reset_at": "2026-11-02T06:00:00+00:00",
      "items": [
        {
          "key": "content",
          "label": "Чтение",
          "used": 10,
          "limit": 750,
          "remaining": 740,
          "percent": 1.3
        },
        {
          "key": "extra",
          "label": "Действия",
          "used": 2,
          "limit": 250,
          "remaining": 248,
          "percent": 0.8
        }
      ]
    },
    "card_shard_daily_limits": {
      "type": "split",
      "reset_at": "2026-10-28T06:00:00+00:00",
      "items": [
        {
          "key": "content",
          "label": "Чтение",
          "used": 10,
          "limit": 750,
          "remaining": 740,
          "percent": 1.3
        },
        {
          "key": "extra",
          "label": "Действия",
          "used": 2,
          "limit": 250,
          "remaining": 248,
          "percent": 0.8
        }
      ]
    },
    "preferences": {
      "latest_updates": "notification",
      "bottom_menu_visible": "enabled",
      "grid_cards_count": "auto",
      "start_page": "home",
      "start_page_blocks": [
        {"id": "popular-updates", "visible": true},
        {"id": "latest-views", "visible": true},
        {"id": "upcoming-releases", "visible": true},
        {"id": "top-views", "visible": true},
        {"id": "forum", "visible": true},
        {"id": "reviews", "visible": true},
        {"id": "collections", "visible": true},
        {"id": "latest-updates", "visible": true},
        {"id": "top-users", "visible": true},
        {"id": "newest", "visible": true},
        {"id": "hot-newest", "visible": true},
        {"id": "latest-news", "visible": true}
      ],
      "media_info_variant": "standard",
      "media_info_tooltip": "catalog_page",
      "bottom_menu_order": [
        "bookmarks",
        "catalog",
        "home",
        "notifications",
        "menu"
      ],
      "bottom_menu_button_variant": "initial",
      "media_bottom_navigation_catalog_visible": "enabled",
      "media_bottom_navigation_catalog_close_action": "navigate_to_catalog",
      "login_streak_comments_hidden": false,
      "login_streak_light_icon_style": "light-orange",
      "login_streak_dark_icon_style": "dark-ember",
      "login_streak_theme": "auto",
      "login_streak_others_personalization_disabled": false,
      "disable_autobookmark": false
    }
  }
}
```

## ошибки

- `401 Unauthorized` — отсутствует или недействителен токен.
- `403 Forbidden` — доступ запрещён.