# mangalib

- **`site_id`:** `1`
- **базовый хост:** `https://api.cdnrulib.link`
- **хост авторизации:** `https://auth.lib.social`
- **сайт:** `https://mangalib.org`
- **модель тайтла:** `manga`

## пример запроса

```http
GET /api/manga?site_id[]=1&page=1&sort_by=rate_avg HTTP/2
Host: api.cdnrulib.link
Site-id: 1
Referer: https://mangalib.org/
Accept: application/json
```
