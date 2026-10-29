# animelib

- **`site_id`:** `5`
- **базовый хост:** `https://hapi.hentaicdn.org`
- **хост авторизации:** `https://auth.hentaicdn.org`
- **сайт:** `https://v5.animelib.org`
- **модель тайтла:** `anime`

animelib использует собственный хост и собственную модель данных: вместо глав - эпизоды, вместо обложек манги - кадры и постеры, вместо `volume` - номер эпизода.

## маршруты

| метод | путь | назначение |
|---|---|---|
| `GET` | `/api/anime` | каталог и поиск |
| `GET` | `/api/anime/{slug_url}` | карточка, требуется токен |
| `GET` | `/api/anime/{slug_url}/covers` | обложки |
| `GET` | `/api/anime/{slug_url}/similar` | похожие |
| `GET` | `/api/anime/{slug_url}/relations` | связанные |
| `GET` | `/api/anime/{slug_url}/stats` | статистика |
| `GET` | `/api/episodes?anime_id=` | список эпизодов |
| `GET` | `/api/episodes/{id}` | эпизод и плееры |
| `GET` | `/api/calendar/month?year=&month=` | календарь |
| `GET` | `/api/media/top-views?time=` | топ просмотров |
| `GET` | `/api/collections`, `/api/collections/{id}` | коллекции |
| `GET` | `/api/news` | новости |
| `GET` | `/api/teams`, `/api/people`, `/api/character`, `/api/franchise`, `/api/publisher` | справочники сообщества |
| `GET` | `/api/forum/discussion` | обсуждения |
| `GET` | `/api/comments`, `/api/comments/sticky` | комментарии |

## пример запроса

```http
GET /api/episodes?anime_id=22061 HTTP/2
Host: hapi.hentaicdn.org
Site-id: 5
Referer: https://v5.animelib.org/
Accept: application/json
```

## эпизоды и плееры

`/api/episodes/{id}` возвращает `players[]`:

```json
{
  "player": "Kodik",
  "translation_type": { "id": 2, "label": "Озвучка" },
  "team": { "id": 32412, "name": "AniLibria.TV" },
  "src": "//kodikplayer.com/seria/0000000/00000000000000000000000000000000/720p",
  "video_domain": "main"
}
```

`src` – протокол-относительный адрес, полный адрес получается добавлением `https:`. озвучка выбирается по `translation_type` и `team`.


### будет дополнено позже
