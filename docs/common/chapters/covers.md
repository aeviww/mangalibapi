# обложки манги

`GET https://api.cdnrulib.link/api/manga/{slug_url}/covers`

для animelib используется аналогичный маршрут `/api/anime/{slug_url}/covers`.

возвращает список обложек манги с информацией об изображениях и пользователях, которые их добавили. не требует авторизации


## заголовки

| заголовок | значение |
|---|---|
| `Accept` | `application/json` |

## пример запроса

```http
GET /api/manga/45638--hello-i-am-a-witch-and-my-crush-wants-me-to-make-a-love-potion/covers HTTP/2
Host: api.cdnrulib.link
Accept: application/json
```

## пример ответа

```json
{
  "data": [
    {
      "id": 318089,
      "cover": {
        "filename": "604e7365-c788-4644-9b01-13babcca97b7",
        "thumbnail": "https://cover.cdnrulib.link/uploads/cover/hello-i-am-a-witch-and-my-crush-wants-me-to-make-a-love-potion/cover/604e7365-c788-4644-9b01-13babcca97b7_thumb.jpg",
        "default": "https://cover.cdnrulib.link/uploads/cover/hello-i-am-a-witch-and-my-crush-wants-me-to-make-a-love-potion/cover/604e7365-c788-4644-9b01-13babcca97b7.jpg",
        "md": "https://cover.cdnrulib.link/uploads/cover/hello-i-am-a-witch-and-my-crush-wants-me-to-make-a-love-potion/cover/604e7365-c788-4644-9b01-13babcca97b7_md.jpg",
        "orig": "https://cover.cdnrulib.link/uploads/cover/hello-i-am-a-witch-and-my-crush-wants-me-to-make-a-love-potion/cover/604e7365-c788-4644-9b01-13babcca97b7_orig.jpg"
      },
      "info": "1",
      "order": 0,
      "user": {
        "id": 5034,
        "username": "LSTR-512",
        "avatar": {
          "filename": "BPyLKDJWs1cP.gif",
          "url": "https://cover.imglib.info/uploads/users/5034/BPyLKDJWs1cP.gif"
        },
        "premium": {
          "enabled": true
        }
      }
    },
    {
      "id": 318088,
      "cover": {
        "filename": "63c14c27-b539-44c8-8565-5a936e08cd74",
        "thumbnail": "https://cover.cdnrulib.link/uploads/cover/hello-i-am-a-witch-and-my-crush-wants-me-to-make-a-love-potion/cover/63c14c27-b539-44c8-8565-5a936e08cd74_thumb.jpg",
        "default": "https://cover.cdnrulib.link/uploads/cover/hello-i-am-a-witch-and-my-crush-wants-me-to-make-a-love-potion/cover/63c14c27-b539-44c8-8565-5a936e08cd74.jpg",
        "md": "https://cover.cdnrulib.link/uploads/cover/hello-i-am-a-witch-and-my-crush-wants-me-to-make-a-love-potion/cover/63c14c27-b539-44c8-8565-5a936e08cd74_md.jpg",
        "orig": "https://cover.cdnrulib.link/uploads/cover/hello-i-am-a-witch-and-my-crush-wants-me-to-make-a-love-potion/cover/63c14c27-b539-44c8-8565-5a936e08cd74_orig.jpg"
      },
      "info": "2",
      "order": 1,
      "user": {
        "id": 5034,
        "username": "LSTR-512",
        "premium": {
          "enabled": true
        }
      }
    }
  ]
}
```