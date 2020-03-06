docker-build: 
	yarn docker-build
docker-run: 
	yarn docker-run
github-pages:
	yarn build
	cp -r dist/* docs/