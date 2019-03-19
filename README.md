# vue-cli-plugin-mock-server

This plugin install a json-server for your Vue project.

The API will be exposed on <http://localhost:3000>.

webpack-dev-server will proxy any request from /api to <http://localhost:3000>.

For futher information about json-server see <https://github.com/typicode/json-server>.

## Installation

```bash
git clone https://github.com/swanncastel/vue-cli-plugin-mock-server

# On your project
npm install -D /absolute/path/to/vue-cli-plugin-mock-server
vue invoke mock-server
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
