FROM debian:bullseye-slim

ENV ADMINER_VERSION 4.8.1

RUN apt-get update && apt-get install -y \
    php-cli \
    php-mysqli \
    php-pgsql \
    php-sqlite3 \
    php-json \
    php-curl \
    php-mbstring \
    php-intl \
    php-bz2 \
    php-xml \
    php-zip \
    curl \
    unzip \
    && rm -rf /var/lib/apt/lists/*

RUN mkdir -p /var/www/html && \
    curl -L -o /var/www/html/adminer.php https://github.com/vrana/adminer/releases/download/v${ADMINER_VERSION}/adminer-${ADMINER_VERSION}.php && \
    chmod -R 755 /var/www/html

RUN mkdir -p /var/www/html && \
    chmod -R 755 /var/www/html && \
    chown -R www-data:www-data /var/www/html

RUN echo "<?php header('Location: /adminer.php'); exit; ?>" > /var/www/html/index.php


EXPOSE 8000

CMD ["php", "-S", "0.0.0.0:8000", "-t", "/var/www/html"]

