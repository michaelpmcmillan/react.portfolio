# mcmillanmichael.github.io
A portfolio in react, which is hosted here: https://mikemcmillan.dev/

# Steps

Create the react app template with:
```
npx create-react-app portfolio
```

Install packages:
```
npm install -g react-create
npm install --save react-router-dom
npm install --save react-fontawesome
npm install --save gh-pages
```

Generate components:
```
react-create component Home
react-create component Portfolio
```

Run in Dev:
```
npm install
npm start
```

Deploy:
```
npm run-script build
```
Then just push changes to github.

# Yarn
Build and Run this app in docker:
```
yarn dev
```

# Docker

```
docker build . --rm -t portfolio:latest
docker run --rm -d -p 80:80/tcp portfolio:latest
```