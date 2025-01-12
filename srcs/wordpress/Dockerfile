FROM debian:bullseye-slim

RUN apt-get update && apt-get install -y \
    php-redis \
    redis-tools \
    mariadb-client \
    php7.4-fpm \
    php7.4-mysql \
    wget \
    tar \
    nano \
    net-tools \
    curl && \
    rm -rf /var/lib/apt/lists/*

RUN mkdir -p /var/www

RUN wget https://wordpress.org/latest.tar.gz && \
    tar -xzf latest.tar.gz -C /var/www/ && \
    rm latest.tar.gz

RUN mkdir -p /run/php && \
    sed -i "s/;daemonize = yes/daemonize = no/" /etc/php/7.4/fpm/php-fpm.conf

RUN chown -R www-data:www-data /var/www/wordpress

RUN echo "listen = 9000" >> /etc/php/7.4/fpm/pool.d/www.conf

#COPY wp-config.php /var/www/wordpress

EXPOSE 9000

CMD ["php-fpm7.4", "-F"]

