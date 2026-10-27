# получение главы

`GET https://api.cdnrulib.link/api/manga/{slug_url}/chapter`

для ranobelib получение главы описано отдельно: [получение ранобэ](../../services/ranobelib/ranobe/get-ranobe.md).

возвращает информацию о главе манги, включая список страниц, данные о просмотрах, лайках и оценке качества перевода.

## параметры

| параметр | тип | описание |
|---|---|---|
| `volume` | `integer` | Номер тома |
| `number` | `integer` | Номер главы |

## пример запроса

```http
GET /api/manga/45638--hello-i-am-a-witch-and-my-crush-wants-me-to-make-a-love-potion/chapter?volume=1&number=1 HTTP/2
Host: api.cdnrulib.link
Accept: application/json
```

## пример ответа

```json
{
  "data": {
    "id": 964051,
    "model": "chapter",
    "volume": "1",
    "number": "1",
    "number_secondary": "1",
    "name": "",
    "slug": "964051",
    "branch_id": null,
    "manga_id": 45638,
    "created_at": "2020-10-12T14:52:41.000000Z",
    "expired_at": null,
    "moderated": {
      "id": 1,
      "label": "Принято модерацией"
    },
    "likes_count": 2831,
    "is_liked": false,
    "is_viewed": false,
    "is_viewed_last_at": null,
    "expired_type": 0,
    "teams": [],
    "bundle_id": null,
    "bundle": null,
    "publish_at": null,
    "translation_quality_rating": {
      "average": "7",
      "averageFormated": "7.0",
      "votes": 5,
      "rated_chapters": 1,
      "can_rate": true,
      "categories": {
        "translation_accuracy": "8",
        "readability_adaptation": "8.4",
        "editing_formatting": "10"
      },
      "user": {
        "average": "0",
        "averageFormated": "0",
        "translation_accuracy": 0,
        "readability_adaptation": 0,
        "editing_formatting": 0
      }
    },
    "type": "chapter",
    "pages": [
      {
        "id": 9696229,
        "image": "1_rAEo.png",
        "slug": 1,
        "external": 0,
        "chunks": 0,
        "chapter_id": 964051,
        "created_at": "2020-10-12T21:52:41.000000Z",
        "updated_at": "2024-03-08T09:46:54.000000Z",
        "height": 1478,
        "width": 1040,
        "url": "//manga/hello-i-am-a-witch-and-my-crush-wants-me-to-make-a-love-potion/chapters/964051/1_rAEo.png",
        "ratio": "0.7037"
      },
      {
        "id": 9696230,
        "image": "2_byFm.png",
        "slug": 2,
        "external": 0,
        "chunks": 0,
        "chapter_id": 964051,
        "created_at": "2020-10-12T21:52:41.000000Z",
        "updated_at": "2024-03-08T09:46:54.000000Z",
        "height": 1478,
        "width": 2080,
        "url": "//manga/hello-i-am-a-witch-and-my-crush-wants-me-to-make-a-love-potion/chapters/964051/2_byFm.png",
        "ratio": "1.4073"
      }
    ]
  }
}
```

## получение изображений через CDN

поле `pages[].url` содержит относительный путь к изображению. чтобы получить прямую ссылку на страницу, необходимо добавить перед ним домен CDN.

например, если API вернул:

```text
//manga/hello-i-am-a-witch-and-my-crush-wants-me-to-make-a-love-potion/chapters/964051/1_rAEo.png
```

ссылка на изображение через CDN:

```text
https://img3.cdnrulib.link//manga/hello-i-am-a-witch-and-my-crush-wants-me-to-make-a-love-potion/chapters/964051/1_rAEo.png
```