# Introduction

This project demonstrates how to setup a simple graphql-api-server using **Koa**.

# Setup project

First clone the project.

```shell
git clone https://github.com/merlinsbook/graphql-api-server.git
cd graphql-api-server
```

# Install and run demo 

Now install and run the demo.

### npm

```shell
npm install
npm start
```

### yarn

```shell
yarn install
yarn start
```

### Test the API

Make sure the server is running and navigate to http://localhost:3000/graphiql.

Query the string below:

```js
{
  users {
    name,
    posts {
      id,
      title,
      content,
    }
  }
}
```

[read more about KOA...](http://koajs.com/)
[read more about GraphQl...](http://graphql.org/learn/)
