# Развертывание общего портала ПРОМЕТ

## Логин и пароль
- Логин: `promet`
- Пароль: `PROMET-2026`

Пароль защищает весь сайт через Nginx Basic Auth, а не через HTML/JavaScript.

## Быстрая установка на сервере

```bash
sudo mkdir -p /var/www/promet-company
sudo rsync -av --delete ./ /var/www/promet-company/

sudo cp /var/www/promet-company/deploy/.htpasswd /etc/nginx/.htpasswd-promet-company
sudo chown root:www-data /etc/nginx/.htpasswd-promet-company
sudo chmod 640 /etc/nginx/.htpasswd-promet-company

sudo cp /var/www/promet-company/deploy/nginx-promet-company-portal.conf /etc/nginx/sites-available/promet-company
sudo ln -s /etc/nginx/sites-available/promet-company /etc/nginx/sites-enabled/promet-company
sudo nginx -t
sudo systemctl reload nginx
```

В файле `/etc/nginx/sites-available/promet-company` замените `your-domain.ru` на реальный домен.

## HTTPS
После привязки домена:

```bash
sudo certbot --nginx -d your-domain.ru -d www.your-domain.ru
```

## Структура
- `/index.html` — общий стартовый экран выбора товарного направления.
- `/wardrobe/` — готовый раздел «Гардеробная система» из приложенного архива.
- Остальные папки — заготовки под будущие направления.
