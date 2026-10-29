# связанные тайтлы

`GET https://api.cdnrulib.link/api/manga/{slug_url}/relations`

для animelib используется аналогичный маршрут `/api/anime/{slug_url}/relations`.

возвращает связи тайтла: первоисточник, адаптации и другие связанные работы. авторизация не требуется.

## заголовки

| заголовок | значение |
|---|---|
| `Site-id` | `1` для mangalib ([константы](../../constants.md)) |
| `Referer` | `https://mangalib.org/` |
| `Accept` | `application/json` |

## параметры

| параметр | тип | описание |
|---|---|---|
| `slug_url` | `string` | идентификатор тайтла, например `45638--hello-i-am-a-witch-and-my-crush-wants-me-to-make-a-love-potion` |

## пример запроса

```http
GET /api/manga/45638--hello-i-am-a-witch-and-my-crush-wants-me-to-make-a-love-potion/relations HTTP/2
Host: api.cdnrulib.link
Site-id: 1
Referer: https://mangalib.org/
Accept: application/json
```

## пример ответа

```json
{
  "data": [
    {
      "order": 0,
      "related_type": {
        "id": 2,
        "label": "Источник"
      },
      "media": {
        "id": 27046,
        "name": "Doumo, Suki na hito ni Horegusuri wo Iraisareta Majo desu. (Novel)",
        "rus_name": "Я ведьма, которую возлюбленный попросил создать любовное зелье (WN)",
        "eng_name": "I am a Witch Requested by My Crush to Make Love Potion",
        "model": "manga",
        "slug": "domo-sukinahito-ni-horegusuri-o-irai-sa-reta-majodesu-novel",
        "slug_url": "27046--domo-sukinahito-ni-horegusuri-o-irai-sa-reta-majodesu-novel",
        "cover": {
          "filename": "lLmkTH0Ibuix",
          "thumbnail": "https://cover.cdnrulib.link/uploads/cover/domo-sukinahito-ni-horegusuri-o-irai-sa-reta-majodesu-novel/cover/lLmkTH0Ibuix_thumb.jpg",
          "default": "https://cover.cdnrulib.link/uploads/cover/domo-sukinahito-ni-horegusuri-o-irai-sa-reta-majodesu-novel/cover/lLmkTH0Ibuix_250x350.jpg",
          "md": "https://cover.cdnrulib.link/uploads/cover/domo-sukinahito-ni-horegusuri-o-irai-sa-reta-majodesu-novel/cover/lLmkTH0Ibuix_250x350.jpg"
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
          "id": 2,
          "label": "Завершён"
        },
        "edition": {
          "id": 8,
          "slug": "web-novel",
          "name": "Веб-новелла",
          "short_name": "WN"
        },
        "releaseDateString": ""
      }
    }
  ]
}
```
