docker-build: 
	docker build . --rm -t portfolio:master
docker-run: 
	docker run --rm -d -p 80:80/tcp portfolio:master
docker-push:
	docker push mikemcmillan/portfolio:master