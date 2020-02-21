# react.portfolio
A portfolio in react that is hosted here https://mikemcmillan.dev

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

# Yarn - Docker
Build and Run this app in docker:
```
yarn docker-build
yarn docker-run
```

# Yarn - Local
Build and Run this app in docker:
```
yarn build
yarn start
```