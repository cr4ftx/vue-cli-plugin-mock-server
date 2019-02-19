# vue-cli-plugin-effisoft

This plugin will install and configure a json-server for your Vue project.

Your API will be exposed on <http://localhost:3000/api>.

Your webpack dev server will proxy any request going on /api to the API.

For futher information about json-server see <https://github.com/typicode/json-server>.

## Installation

```bash
vue add effisoft
```

## In your project

### Run the mock server on port 3000

```bash
npm run mock
```

### Run the mock server and serve your Vue app concurrently

```bash
npm run dev
```
