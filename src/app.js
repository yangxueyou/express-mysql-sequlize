const express = require("express");
const bodyParser = require("body-parser");
// express 实例
const app = express();
const port = 8888;
const models = require("../db/models");

// models是一个集合
// models.User
// modele.Sequlize
// models.sequlize

// for parsing application/json
app.use(express.json()); // 处理 express json 的
// for parsing application/xwww-form-urlencoded
app.use(express.urlencoded()); // 对 url 参数做 encode
// for parsing application/xwww-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); // 对 body 参数做 encode

/** 查询任务列表 */
app.get("/list/:status/:page", async (req, res, next) => {
  try {
    let { status, page } = req.params;
    let limit = 10; // 分页
    let offset = (page - 1) * limit; // 偏移量，开始读取数据的角标
    let where = {};
    if (status != -1) {
      where.status = status;
    }
    // next(new Error("发了错误，会被最后接住"));
    /**
     * 1. 状态： 1:表示代办 2:完成 3:删除 -1:全部
     * 2. 分页处理
     */
    // 查询并汇集总数
    let list = await models.Todo.findAndCountAll({
      where,
    });
    res.status(200).json({
      data: list.rows,
      success: true,
      message: 'ok'
    });
  } catch (error) {
    next(error);
  }
});

/** 创建或修改 一个 todo */
app.post("/create", async (req, res, next) => {
  try {
    // req.body 需要用中间件，否则是拿不到的  --  body-parser
    let { name, deadline, content, id } = req.body;
    let user;
    if (id) {
      let todo = await models.Todo.findOne({
        where: {
          id,
        },
      });
      if (todo) {
        // 执行更新
        user = await todo.update({
          name,
          deadline,
          content,
        });
      }
    } else {
      user = await models.Todo.create({
        name,
        deadline,
        content,
      });
    }
    res.json({
      user,
    });
  } catch (error) {
    // 把错误传递下去，这样能被全局的异常处理捕获到
    next(error);
  }
});

/** 修改或删除 的状态 */
app.post("/update_status", async (req, res, next) => {
  try {
    // req.body 需要用中间件，否则是拿不到的  --  body-parser
    let { id, status } = req.body;
    let todo = await models.Todo.findOne({
      where: {
        id,
      },
    });
    if (todo && todo.status != status) {
      // 执行更新
      todo = await todo.update({
        status,
      });
    }
    res.json({
      todo,
    });
  } catch (error) {
    next(error);
  }
});

// 所有的错误， http status === 500
// 放在最后进行 收口
app.use((err, req, res, next) => {
  if (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
