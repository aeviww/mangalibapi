
import re
from getpass import getpass

import requests

AUTH_URL = "https://auth.lib.social/auth/login"
LOGIN_URL = "https://lib.social/login"

session = requests.Session()
session.headers["Referer"] = AUTH_URL

response = session.get(AUTH_URL)
response.raise_for_status()

match = re.search(
    r'<input[^>]+name=["\']_token["\'][^>]+value=["\']([^"\']+)',
    response.text,
)

if not match:
    raise RuntimeError("csrf токен не найден")

token = match.group(1)

email = input("почта: ")
password = getpass("пароль: ")

response = session.post(
    LOGIN_URL,
    data={
        "_token": token,
        "login": email,
        "password": password,
        "remember": "on",
    },
    headers={"Referer": AUTH_URL},
    allow_redirects=False,
)

print(f"\nHTTP: {response.status_code}")
print("Location:", response.headers.get("Location"))

print("\ncookies:")
for cookie in session.cookies:
    print(f"{cookie.name}={cookie.value}")
