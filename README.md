# microservice-boilerplate

ECMAScript 2018 rest boilerplate with express

Boilerplate/Starter Project for building RESTful APIs and microservices using Node.js, Express and Knex

## Features

- No transpilers, just vanilla javascript
- ES2017 latest features like Async/Await
- CORS enabled
- Express + Knex
- Uses [helmet](https://github.com/helmetjs/helmet) to set some HTTP headers for security
- Load environment variables from .env files with [dotenv](https://github.com/rolodato/dotenv-safe)
- Gzip compression with [compression](https://github.com/expressjs/compression)
- Linting with [eslint](http://eslint.org)
- Tests with [mocha](https://mochajs.org), [chai](http://chaijs.com) and [sinon](http://sinonjs.org)
- Code coverage with [istanbul](https://istanbul.js.org) and [coveralls](https://coveralls.io)
- Logging with [morgan](https://github.com/expressjs/morgan)
- Authentication and Authorization with [passport](http://passportjs.org)
- API documentation geratorion with [apidoc](http://apidocjs.com)

## Requirements

- [Node v8.12](https://nodejs.org/)

## Getting Started

Clone the repo:

```bash
git clone https://github.com/sylvainlap/microservice-boilerplate
cd microservice-boilerplate
```

Install dependencies:

```bash
npm install
```

Set environment variables:

```bash
cp .env.example .env
```

## Running Locally

```bash
npm run dev
```

## Running in Production

```bash
npm start
```

## Lint

```bash
npm run lint
```

## Test

```bash
# run all tests with Mocha
yarn test

# run unit tests
yarn test:unit

# run integration tests
yarn test:integration

# run all tests and watch for changes
yarn test:watch

# open nyc test coverage reports
yarn coverage
```

## Documentation

```bash
npm run docs
```

## Inspirations

- [KunalKapadia/express-mongoose-es6-rest-api](https://github.com/KunalKapadia/express-mongoose-es6-rest-api)
- [diegohaz/rest](https://github.com/diegohaz/rest)
- [express-rest-es2017-boilerplate](https://github.com/danielfsousa/express-rest-es2017-boilerplate)

## License

[MIT License](README.md) - [Daniel Sousa](https://github.com/danielfsousa)
