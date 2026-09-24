# Env Vars PROXY Status

Расширение VS Code показывает зелёный индикатор в статус-баре, если установлены значения ВСЕХ переменных окружения из списка:

- HTTP_PROXY
- HTTPS_PROXY
- ALL_PROXY
- NO_PROXY
- http_proxy
- https_proxy
- all_proxy
- no_proxy

Если не установлено значение какой-либо переменной выводится красный индикатор.

## Разработка

```sh
npm install
npm run build
```

Для проверки запустите расширение в Extension Development Host из VS Code и задайте переменную до запуска VS Code:

```sh
HTTP_PROXY=http://proxy.example:8080 code .
```
