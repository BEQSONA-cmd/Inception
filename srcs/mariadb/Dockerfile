FROM debian:bullseye-slim

RUN apt-get update && apt-get install -y \
    mariadb-server \
    mariadb-client \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

RUN mkdir -p /var/lib/mysql /var/run/mysqld && \
    chown -R mysql:mysql /var/lib/mysql /var/run/mysqld

RUN sed -i "s/^bind-address\s*=.*$/bind-address=0.0.0.0/" /etc/mysql/mariadb.conf.d/50-server.cnf

#COPY ./conf/ mariadb:/etc/mysql/mariadb.conf.d/

EXPOSE 3306

CMD ["mysqld"]

