docker-build: 
	docker build . --rm -t mikemcmillan/portfolio:master
docker-run: 
	docker run --rm -d -p 80:80/tcp mikemcmillan/portfolio:master
docker-push:
	docker login
	docker push mikemcmillan/portfolio:master