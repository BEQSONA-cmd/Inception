FROM debian:bullseye-slim

RUN apt-get update && apt-get install -y \
	net-tools \
	nginx \
	curl \
	openssl && \
	rm -rf /var/lib/apt/lists/*

COPY nginx.conf /etc/nginx/nginx.conf
#COPY ./ssl/nginx.key /etc/nginx/ssl/nginx.key
#COPY ./ssl/nginx.crt /etc/nginx/ssl/nginx.crt

EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
