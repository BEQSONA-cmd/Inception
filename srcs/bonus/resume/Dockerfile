FROM debian:bullseye-slim

RUN apt-get update && apt-get install -y \
    curl \
    && curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY ./app /app

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
