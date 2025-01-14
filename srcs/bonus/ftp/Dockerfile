FROM debian:bullseye-slim

ARG FTP_PASSWORD

RUN apt-get update && apt-get install -y \
    vsftpd \
    openssl \
    && rm -rf /var/lib/apt/lists/*

RUN useradd -m ftpuser && \
    echo "ftpuser:${FTP_PASSWORD}" | chpasswd

RUN mkdir -p /home/ftpuser/wordpress && \
    chown -R ftpuser:ftpuser /home/ftpuser/wordpress

RUN mkdir -p /var/run/vsftpd/empty

EXPOSE 21

COPY vsftpd.conf /etc/vsftpd.conf

RUN echo "ftpuser" > /etc/vsftpd.userlist

CMD ["vsftpd", "/etc/vsftpd.conf"]

