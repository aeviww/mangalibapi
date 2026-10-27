# сброс пароля

`POST https://auth.lib.social/auth/reset-password/email`

вход по почте и паролю.

## параметры

| параметр | тип | описание |
|---|---|---|
| `_token` | `string` | CSRF токен со страницы сайта |
| `email` | `string` | почта аккаунта |

