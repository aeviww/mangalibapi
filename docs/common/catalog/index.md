# каталог и поиск

каталог и поиск тайтлов используют один маршрут:

`GET https://api.cdnrulib.link/api/manga`

для animelib - `GET https://hapi.hentaicdn.org/api/anime`.

| страница | назначение |
|---|---|
| [каталог тайтлов](list.md) | фильтры, сортировка, пагинация |
| [поиск тайтлов](search.md) | поиск по строке `q` |

## структура элемента каталога

```json
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
```

## заголовки

| заголовок | значение |
|---|---|
| `Site-id` | `1` для mangalib ([константы](../../constants.md)) |
| `Referer` | `https://mangalib.org/` |
| `Accept` | `application/json` |
