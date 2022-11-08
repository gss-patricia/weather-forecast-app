
## Getting Started

**Running the project**

*Tested with Node >=14.17.0 <16.3.1

```bash
git clone https://github.com/gss-patricia/weather-forecast-app.git

cd weather-forecast-app/

yarn

yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## API

[API routes]can be accessed on [http://localhost:3000/api/regions](http://localhost:3000/api/regions) and [http://localhost:3000/api/forecast/{id}](http://localhost:3000/api/forecast/{id}).

**Additional Notes**
- I´ve created dependency Inversion for client api, if in the future we want to replace the axios for another http client we can do the replacement easily.

Other Commands:
```
yarn dev - Runs next dev to start Next.js in development mode
yarn build - Runs next build to build the application for production usage
yarn start - Runs next start to start a Next.js production server
yarn lint - Runs next lint to set up Next.js' built-in ESLint configuration
```

## Unit Tests
running the tests:

```
yarn test: runs all tests.
```

## Improvements for the future
- Improve error handling
- Add husky for pre-commit hooks
- Create unit tests and integration tests
- Improve the UX, e.g: Loading...

## Deploy on Vercel
Demo: https://weather-forecast-app.vercel.app/

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
