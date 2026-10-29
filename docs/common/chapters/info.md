# получение информации о тайтле

`GET https://api.cdnrulib.link/api/manga/{slug_url}`

для animelib используется `/api/anime/{slug_url}` 

## заголовки

| заголовок | значение |
|---|---|
| `Site-id` | `1` для mangalib ([константы](../../constants.md)) |
| `Referer` | `https://mangalib.org/` |
| `Accept` | `application/json` |
| `Authorization` | `Bearer <token>` - только если тайтл требует авторизации |

## параметры

| параметр | тип | описание |
|---|---|---|
| `slug_url` | `string` | идентификатор тайтла, например `45638--hello-i-am-a-witch-and-my-crush-wants-me-to-make-a-love-potion` |
| `fields[]` | `string[]` | дополнительные поля ответа |

## базовые поля

без `fields[]` ответ содержит:

`id`, `name`, `rus_name`, `eng_name`, `model`, `slug`, `slug_url`, `cover`, `ageRestriction`, `site`, `type`, `is_licensed`, `content_marking`, `status`, `releaseDateString`.

## дополнительные поля

| `fields[]` | ключ в ответе | тип | описание |
|---|---|---|---|
| `background` | `background` | `object` | фоновое изображение |
| `eng_name` | `eng_name` | `string` | английское название (уже есть в базовом ответе) |
| `otherNames` | `otherNames` | `string[]` | альтернативные названия |
| `summary` | `summary` | `object` | описание в формате документа |
| `releaseDate` | `releaseDate` | `string` | год или дата релиза |
| `country` | `country` | `object` | страна происхождения |
| `views` | `views` | `object` | просмотры: `total`, `short`, `formated` |
| `close_view` | `close_view` | `boolean` | закрыт ли просмотр |
| `rate_avg` | `rating` | `object` | средняя оценка и голоса |
| `rate` | `rating` | `object` | то же, что `rate_avg` |
| `genres` | `genres` | `array` | жанры |
| `tags` | `tags` | `array` | теги |
| `teams` | `teams` | `array` | команды перевода |
| `user` | `user` | `object?` | пользовательские данные, если доступны |
| `franchise` | `franchise` | `array` | франшиза |
| `authors` | `authors` | `array` | авторы |
| `publisher` | `publisher` | `array` | издатели |
| `moderated` | `moderated` | `object` | статус модерации |
| `metadata` | `metadata` | `object` | метаданные, включая `count` и `close_comments` |
| `translation_quality_rating` | `translation_quality_rating` | `object` | оценка качества перевода |
| `chap_count` | `items_count` | `object` | `{ uploaded, total }` |
| `status_id` | `scanlateStatus` | `object` | статус перевода |
| `extra_release_status` | `extraReleaseStatus` | `object?` | дополнительный статус релиза |
| `artists` | `artists` | `array` | художники |
| `format` | `format` | `array` | форматы издания |

`fields[]` добавляет поля к базовому ответу, а не заменяет его. некоторые запрошенные поля могут отсутствовать, если у тайтла нет данных. неизвестное поле возвращает `422`.

## пример запроса

```http
GET /api/manga/45638--hello-i-am-a-witch-and-my-crush-wants-me-to-make-a-love-potion?fields%5B0%5D=summary&fields%5B1%5D=genres&fields%5B2%5D=views&fields%5B3%5D=rate_avg&fields%5B4%5D=chap_count HTTP/2
Host: api.cdnrulib.link
Site-id: 1
Referer: https://mangalib.org/
Accept: application/json
```

## пример ответа

```json
{
  "data": {
    "id": 45638,
    "name": "Doumo, Suki na hito ni Horegusuri wo Iraisareta Majo desu.",
    "rus_name": "Возлюбленный ведьмы попросил сварить приворотное зелье",
    "eng_name": "Hello, I am a Witch and my Crush Wants me to Make a Love Potion!",
    "model": "manga",
    "slug": "hello-i-am-a-witch-and-my-crush-wants-me-to-make-a-love-potion",
    "slug_url": "45638--hello-i-am-a-witch-and-my-crush-wants-me-to-make-a-love-potion",
    "cover": {
      "filename": "ad4dfd89-b71a-4d57-a93a-cbe014c92dca",
      "thumbnail": "https://cover.cdnrulib.link/uploads/cover/hello-i-am-a-witch-and-my-crush-wants-me-to-make-a-love-potion/cover/ad4dfd89-b71a-4d57-a93a-cbe014c92dca_thumb.jpg",
      "default": "https://cover.cdnrulib.link/uploads/cover/hello-i-am-a-witch-and-my-crush-wants-me-to-make-a-love-potion/cover/ad4dfd89-b71a-4d57-a93a-cbe014c92dca.jpg",
      "md": "https://cover.cdnrulib.link/uploads/cover/hello-i-am-a-witch-and-my-crush-wants-me-to-make-a-love-potion/cover/ad4dfd89-b71a-4d57-a93a-cbe014c92dca.jpg"
    },
    "ageRestriction": {
      "id": 3,
      "label": "16+"
    },
    "site": 1,
    "type": {
      "id": 1,
      "label": "Манга"
    },
    "is_licensed": false,
    "content_marking": [
      {
        "id": 2,
        "label": "Содержит упоминание наркотиков",
        "formulation": "Незаконное потребление наркотических средств, психотропных веществ, их аналогов причиняет вред здоровью, их незаконный оборот запрещен и влечет установленную законодательством ответственность"
      }
    ],
    "status": {
      "id": 1,
      "label": "Онгоинг"
    },
    "releaseDateString": "2020 г.",
    "summary": {
      "type": "doc",
      "content": [
        {
          "type": "paragraph",
          "content": [
            {
              "type": "text",
              "text": "Сердце юной ведьмы было разбилось вдребезги, когда её возлюбленный попросил сварить для него приворотное зелье. Однако она решила хотя бы напоследок провести с ним побольше времени, собирая ингредиенты для зелья. Чем же закончится эта история?"
            }
          ]
        }
      ]
    },
    "genres": [
      { "id": 43, "name": "Драма", "adult": false, "alert": false },
      { "id": 45, "name": "История", "adult": false, "alert": false },
      { "id": 56, "name": "Романтика", "adult": false, "alert": false },
      { "id": 59, "name": "Сёдзё", "adult": false, "alert": false },
      { "id": 69, "name": "Фэнтези", "adult": false, "alert": false }
    ],
    "views": {
      "total": 314910,
      "short": "314.9 K",
      "formated": "314 910"
    },
    "rating": {
      "average": "9.51",
      "averageFormated": "9.5",
      "votes": 1102,
      "votesFormated": "1.1 K",
      "user": 0
    },
    "items_count": {
      "uploaded": 44,
      "total": 0
    }
  },
  "meta": {
    "country": "RU"
  }
}
```
