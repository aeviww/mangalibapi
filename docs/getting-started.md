# начало работы

этот раздел описывает общие правила запросов к неофициальному api mangalib и связанных сервисов.

## базовые хосты

| хост | назначение |
|---|---|
| `https://api.cdnrulib.link` | основные маршруты mangalib, slashlib, hentailib и ranobelib |
| `https://hapi.hentaicdn.org` | маршруты animelib |
| `https://api.imglib.info` | часть маршрутов ranobelib |
| `https://auth.lib.social` | вход и восстановление пароля mangalib и связанных сервисов |
| `https://auth.hentaicdn.org` | вход animelib |

## заголовки

| заголовок | обязательность | значение |
|---|---|---|
| `Site-id` | обязателен | id сервиса: `1` - mangalib, `2` - slashlib / yaoilib, `3` - ranobelib, `4` - hentailib, `5` - animelib ([константы](constants.md)) |
| `Referer` | рекомендуется | адрес сайта, например `https://mangalib.org/` |
| `Authorization` | зависит от маршрута | `Bearer <token>` для пользовательских и социальных методов |

## протокол

используйте HTTP/2. на момент проверки `29.10.2026` запросы по HTTP/1.1 через `curl` также выполнялись, однако поведение защиты может измениться. если HTTP/1.1 возвращает `403` или соединение сбрасывается, повторите запрос по HTTP/2.

## формат ответа

успешные ответы обычно имеют оболочку:

```json
{
  "data": {},
  "meta": {},
  "links": {},
  "server": "debian-php"
}
```

- `data` - полезная нагрузка: объект, массив или `null`;
- `meta` - pagination и служебные поля;
- `links` - ссылки пагинации;
- `server` - имя backend-сервера, может отсутствовать.

## авторизация

пользовательские методы требуют заголовок `Authorization: Bearer <token>`. токен выдаётся после входа через `https://auth.lib.social`.

без токена защищённые маршруты возвращают `401`:

```json
{
  "data": {
    "toast": {
      "type": "error",
      "message": "Вы не авторизованы"
    }
  }
}
```

## лимиты

ответы содержат заголовки:

```http
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 97
```

## минимальный запрос

```bash
curl --http2 -sS \
  -H "Site-id: 1" \
  -H "Referer: https://mangalib.org/" \
  -H "Accept: application/json" \
  "https://api.cdnrulib.link/api/manga/45638--hello-i-am-a-witch-and-my-crush-wants-me-to-make-a-love-potion"
```

фрагмент ответа:

```json
{
  "data": {
    "id": 45638,
    "rus_name": "Возлюбленный ведьмы попросил сварить приворотное зелье",
    "model": "manga",
    "slug_url": "45638--hello-i-am-a-witch-and-my-crush-wants-me-to-make-a-love-potion",
    "site": 1,
    "type": {
      "id": 1,
      "label": "Манга"
    },
    "status": {
      "id": 1,
      "label": "Онгоинг"
    }
  },
  "meta": {
    "country": "RU"
  }
}
```

## возникли проблемы?

если вы столкнулись с ошибкой, обнаружили неточность в документации или хотите предложить улучшение, создайте [issue](https://github.com/aeviww/mangalibapi/issues) в репозитории проекта.

при описании проблемы укажите:
- какой маршрут использовался;
- параметры запроса;
- HTTP-статус и текст ошибки;
- ожидаемое и фактическое поведение.

перед публикацией убедитесь, что отсутствуют ваши конфиденциальные данные.
