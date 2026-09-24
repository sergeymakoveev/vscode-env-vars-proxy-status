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

## Установка PROXY environment variables и aliases для его использования в .zshrc

```
# HOST proxy
local proxy='http://proxy.host'

# Исключения для proxy
local no_proxy='localhost,127.0.0.1,10.0.0.0/8,.figma.com,.google.com,.googleapis.com'

# Установка PROXY environment variables
proxy-env() {
    export http_proxy="$proxy"
    export https_proxy="$proxy"
    export all_proxy="$no_proxy"
    export no_proxy="$no_proxy"

    export HTTP_PROXY="$proxy"
    export HTTPS_PROXY="$proxy"
    export ALL_PROXY="$proxy"
    export NO_PROXY="$no_proxy"
}

# Определения алиаса для использования PROXY environment variables
alias code.proxy='proxy-env && code'
```

## Установка расширения в VSCode

Из интерфейса:

```
wget https://github.com/sergeymakoveev/vscode-env-vars-proxy-status/raw/refs/heads/main/env-vars-proxy-status-0.0.5.vsix
[Cmd+Shift+P / Ctrl+Shift+P] -> [Extensions: Install from VSIX...] -> [Choose http-proxy-status-0.0.5.vsix] -> [Restart Extensions]
```

Из командной строки:

```
wget https://github.com/sergeymakoveev/vscode-env-vars-proxy-status/raw/refs/heads/main/env-vars-proxy-status-0.0.5.vsix
code --install-extension http-proxy-status-0.0.5.vsix
```
