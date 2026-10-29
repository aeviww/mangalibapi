# константы

значения ниже получены из `GET https://api.cdnrulib.link/api/constants` и из параметров каталога. 

## `Site-id`

идентификатор сервиса, используемый в заголовке `Site-id`:

| id | сервис |
|---|---|
| `1` | mangalib |
| `2` | slashlib / yaoilib |
| `3` | ranobelib |
| `4` | hentailib |
| `5` | animelib |

## получение констант

`GET https://api.cdnrulib.link/api/constants`

| параметр | тип | описание |
|---|---|---|
| `fields[]` | `string` | какие справочники вернуть: `types`, `genres`, `tags`, `scanlateStatus`, `status`, `format`, `ageRestriction`, `ageRestrictionAnime`, `mediaCountry`, `imageServers` |

```http
GET /api/constants?fields%5B%5D=types&fields%5B%5D=status&fields%5B%5D=ageRestriction HTTP/2
Host: api.cdnrulib.link
Site-id: 1
Referer: https://mangalib.org/
Accept: application/json
```

```json
{
  "data": {
    "types": [
      { "id": 1, "label": "Манга", "site_ids": [1, 4, 2] },
      { "id": 5, "label": "Манхва", "site_ids": [1, 4, 2] }
    ],
    "status": [
      { "id": 1, "label": "Онгоинг", "site_ids": [0, 1, 2, 3, 4, 5] }
    ],
    "ageRestriction": [
      { "id": 3, "label": "16+", "site_ids": [1, 3, 2, 5] }
    ]
  }
}
```

`site_ids` показывает, для каких сервисов действует значение. `0` в этом списке - служебное значение.

## типы тайтлов

| id | label | сервисы |
|---|---|---|
| `0` | Неизвестный | - |
| `1` | Манга | mangalib, hentailib, slashlib |
| `4` | OEL-манга | mangalib, hentailib, slashlib |
| `5` | Манхва | mangalib, hentailib, slashlib |
| `6` | Маньхуа | mangalib, hentailib, slashlib |
| `8` | Руманга | mangalib, hentailib, slashlib |
| `9` | Комикс | mangalib, hentailib, slashlib |
| `16` | TV Сериал | animelib |
| `17` | Фильм | animelib |
| `18` | Короткометражка | animelib |
| `19` | Спешл | animelib |
| `20` | OVA | animelib |
| `21` | ONA | animelib |
| `22` | Клип | animelib |

для ranobelib используются отдельные значения (`10` - Япония, `11` - Корея, `12` - Китай, `13` - Английский, `14` - Авторский, `15` - Фанфик). 

## статус выпуска

| id | label |
|---|---|
| `1` | Онгоинг |
| `2` | Завершён |
| `3` | Анонс |
| `4` | Приостановлен |
| `5` | Выпуск прекращён |

## статус перевода

| id | label |
|---|---|
| `1` | Продолжается |
| `2` | Завершён |
| `3` | Заморожен |
| `4` | Заброшен |
| `5` | Анонсировано |
| `6` | Выходит |
| `7` | Вышло |

значения `5`-`7` относятся к animelib. для каталога mangalib используются `1`-`4`.

## возрастное ограничение

| id | label |
|---|---|
| `1` | 6+ |
| `2` | 12+ |
| `3` | 16+ |
| `4` | 18+ |
| `5` | 18+ (RX) |

для animelib справочник `ageRestrictionAnime` может отличаться; запросите его отдельно через `fields[]`.

## формат

| id | slug | name |
|---|---|---|
| `1` | `4-koma` | 4-кома (Ёнкома) |
| `2` | `anthology` | Сборник |
| `3` | `doujinshi` | Додзинси |
| `4` | `colored` | В цвете |
| `5` | `oneshot` | Сингл |
| `6` | `web` | Веб |
| `7` | `webtun` | Вебтун |
| `8` | `web-novel` | Веб-новелла |
| `9` | `light-novel` | Лайт-новелла |
| `10` | `novel` | Роман |

## страна

| id | label |
|---|---|
| `JP` | Япония |
| `KR` | Южная Корея |
| `CN` | Китай |
| `TW` | Тайвань |
| `HK` | Гонконг |
| `RU` | Россия |
| `UA` | Украина |
| `BY` | Беларусь |
| `KZ` | Казахстан |
| `US` | США |
| `FR` | Франция |
| `DE` | Германия |
| `IN` | Индия |
| `GB` | Великобритания |
| `CA` | Канада |
| `BE` | Бельгия |
| `IT` | Италия |
| `ES` | Испания |
| `TH` | Таиланд |
| `VN` | Вьетнам |
| `ID` | Индонезия |
| `PH` | Филиппины |

## сортировка каталога

| `sort_by` | описание |
|---|---|
| `rating_score` | по популярности |
| `rate_avg` | по рейтингу |
| `views` | по просмотрам |
| `chap_count` | по количеству глав |
| `releaseDate` | по дате релиза |
| `last_chapter_at` | по дате последней главы |
| `created_at` | по дате добавления |
| `name` | по названию (A-Z) |
| `rus_name` | по названию (А-Я) |

направление задаётся `sort_type=asc` или `sort_type=desc`.

## серверы изображений

для mangalib и ranobelib справочник `imageServers` содержит:

| id | label | url |
|---|---|---|
| `main` | Первый | `https://img2.imglib.info` |
| `secondary` | Второй | `https://img2.imglib.info` |
| `compress` | Сжатия | `https://img3.cdnrulib.link` |
| `download` | Скачивание | `https://img3.cdnlibs.org` |
| `crop` | Crop pages | `https://crops.mangalib.me` |

лучше не хардкодьте cdn: получайте актуальный список через `GET /api/constants?fields[]=imageServers`.
