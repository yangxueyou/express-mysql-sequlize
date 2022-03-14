## 技术栈

后端 express + mysql + sequelize

前端 umijs

知识点：https://yangxueyou.github.io/xueyou-nodejs/#/src/0007?id=expressmysqlsequlize

## 启动命令

1. 安装 mysql

```js
// mac
$ brew install mysql
$ brew services start mysql
mysql> create database `todo_development` character set utf8mb4 collate utf8mb4_croatian_ci;
```

2. 持久化数据库 

```js
$ cd db
$ npx sequelize db:migrate
```

3. 启动 API 服务

```js
1. pm2 start ecosystem.config.js
2. pm2 log
3. pm2 restart ecosystem.config.js
```

4. 启动前端

```js
$ cd front
$ npm i
$ npm start
```
