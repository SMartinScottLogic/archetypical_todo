# Setup
We will start off with a minimal ```package.json```
```js
{
    "description": "React/Redux/Immutable/TSX/Hammer todo",
    "private": true
}
```

npm install --save react-dom react-redux immutable
npm install --save redux-thunk
npm install --save isomorphic-fetch
npm install --save react-hammerjs

npm install --save babel-runtime
npm install --save-dev babel-plugin-transform-runtime babel-preset-es2015 babel-core

## Typescript
npm install --save-dev typings
./node_modules/.bin/typings init
./node_modules/.bin/typings install --save --global dt~react dt~react-dom dt~react-redux dt~redux dt~immutable dt~node dt~redux-thunk  dt~isomorphic-fetch
