# The Movie Database Challenge

This is a small app I made based on the [following specs](docs/specs.md). 

## Features

- [Live Demo](https://movie-db-challenge.vercel.app/)
- Uses redux
- Uses styled-components
- Uses redux-saga

## Initial setup

Run `yarn` in order to setup application & install dependencies

## Development server

1. Create an .env file with the following key `REACT_APP_MOVIE_DB_API_KEY`, it should be filled with you own API key

2. Run `yarn start` for a dev server.

## Deployment

First run `yarn build` to generate the bundle files

Then run the following commands to serve the files locally

```
npm install -g serve
serve -s build
```
