module.exports = {
  apps : [
    {
      name: 'todo_api', // 名字不要重复
      script: 'src/app.js', // 启动脚本
      instances: 1, // 启动实例个数，六核 起 4个
      autorestart: true,  // 当我们服务发生异常，帮我自动的重启
      watch: false, // 开发环境用
      max_memory_restart: '1G', // 重启的时候，最大的重启内存是多少
    }
  ],
};
