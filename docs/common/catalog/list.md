# каталог тайтлов

`GET https://api.cdnrulib.link/api/manga`

для animelib используется `GET https://hapi.hentaicdn.org/api/anime`.

возвращает постраничный список тайтлов с фильтрами и сортировкой. авторизация не требуется.

## заголовки

| заголовок | значение |
|---|---|
| `Site-id` | `1` для mangalib ([константы](../../constants.md)) |
| `Referer` | `https://mangalib.org/` |
| `Accept` | `application/json` |

## параметры

| параметр | тип | обязателен | описание |
|---|---|---|---|
| `site_id[]` | `integer[]` | да | id сервиса; без него `data` пустой |
| `page` | `integer` | нет | номер страницы, по умолчанию `1` |
| `q` | `string` | нет | поисковая строка |
| `genres[]` | `integer[]` | нет | id жанров |
| `tags[]` | `integer[]` | нет | id тегов |
| `types[]` | `integer[]` | нет | id типов тайтлов |
| `status[]` | `integer[]` | нет | id статуса выпуска |
| `scanlate_status[]` | `integer[]` | нет | id статуса перевода |
| `country[]` | `string[]` | нет | код страны, например `JP` |
| `year_min` | `integer` | нет | минимальный год выпуска |
| `year_max` | `integer` | нет | максимальный год выпуска |
| `sort_by` | `string` | нет | поле сортировки |
| `sort_type` | `string` | нет | `asc` или `desc` |
| `fields[]` | `string[]` | нет | дополнительные поля ответа |

значения `types[]`, `status[]`, `scanlate_status[]`, `country[]` и `sort_by` перечислены в разделе [константы](../../constants.md).

## пример запроса

```http
GET /api/manga?site_id%5B0%5D=1&genres%5B0%5D=43 HTTP/2
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
      "id": 29916,
      "name": "Ag-yeog-ui ending-eun jug-eumppun",
      "rus_name": "Единственный исход злодейки — смерть",
      "eng_name": "Villains Are Destined to Die",
      "model": "manga",
      "slug": "ag-yeog-uiending-eunjug-eumppun",
      "slug_url": "29916--ag-yeog-uiending-eunjug-eumppun",
      "cover": {
        "filename": "7540ad2e-2957-4bf4-bf78-12f25de8e640",
        "thumbnail": "https://cover.cdnrulib.link/uploads/cover/ag-yeog-uiending-eunjug-eumppun/cover/7540ad2e-2957-4bf4-bf78-12f25de8e640_thumb.jpg",
        "default": "https://cover.cdnrulib.link/uploads/cover/ag-yeog-uiending-eunjug-eumppun/cover/7540ad2e-2957-4bf4-bf78-12f25de8e640.jpg",
        "md": "https://cover.cdnrulib.link/uploads/cover/ag-yeog-uiending-eunjug-eumppun/cover/7540ad2e-2957-4bf4-bf78-12f25de8e640.jpg"
      },
      "ageRestriction": {
        "id": 4,
        "label": "18+"
      },
      "site": 1,
      "type": {
        "id": 5,
        "label": "Манхва"
      },
      "rating": {
        "average": "9.78",
        "averageFormated": "9.8",
        "votes": 86347,
        "votesFormated": "86.3 K",
        "user": 0
      },
      "content_marking": [],
      "status": {
        "id": 2,
        "label": "Завершён"
      },
      "releaseDateString": ""
    }
  ],
  "links": {
    "first": "http://api.cdnrulib.link/api/manga?page=1",
    "last": null,
    "prev": null,
    "next": "http://api.cdnrulib.link/api/manga?page=2"
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "path": "http://api.cdnrulib.link/api/manga",
    "per_page": 60,
    "to": 60,
    "page": 1,
    "has_next_page": true,
    "seed": "1ce168e2e0a78abc2273ebe984882ad7"
  }
}
```

в примере `data` сокращён до одного элемента. фактический ответ содержит 60 элементов.
