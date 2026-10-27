# авторизация

`POST https://auth.lib.social/auth/login`

вход по почте и паролю.

## параметры

| параметр | тип | описание |
|---|---|---|
| `_token` | `string` | CSRF токен со страницы сайта |
| `login` | `string` | почта аккаунта |
| `password` | `string` | пароль |

