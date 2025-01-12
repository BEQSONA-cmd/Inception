
up:
	cp -r $(HOME)/Desktop/secrets ./ && cd ./srcs && cp -r ../secrets/.env ./ && cd ../
	docker-compose -f srcs/docker-compose.yml up --build -d

down:
	rm -rf ./secrets && cd ./srcs && rm -rf .env && cd ../
	docker-compose -f srcs/docker-compose.yml down

up_b:
	cp -r $(HOME)/Desktop/secrets ./ && cd ./srcs && cp -r ../secrets/.env ./ && cd ../
	docker-compose -f srcs/docker-compose_bonus.yml up --build -d

down_b:
	rm -rf ./secrets && cd ./srcs && rm -rf .env && cd ../
	docker-compose -f srcs/docker-compose_bonus.yml down


re: down up

build:
	cd srcs && docker-compose build --no-cache && cd ../

clean:
	docker stop $(docker ps -qa); docker rm $(docker ps -qa); docker rmi -f $(docker images -qa); docker volume rm $(docker volume ls -q); docker network rm $(docker network ls -q) 2>/dev/null
