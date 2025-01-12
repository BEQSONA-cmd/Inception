FROM debian:bullseye-slim

RUN apt-get update && apt-get install -y \
    g++ \
    make \
    libstdc++6 \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY main.cpp index.html /app/

RUN c++ main.cpp -o server

EXPOSE 8080

CMD ["./server"]
