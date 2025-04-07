// 导入必要的模块
const express = require('express');
const router = express.Router();

// 设置路由，用于处理用户数据请求
router.get('/user', (req, res) => {
  // 模拟从数据库获取用户信息的代码
  const user = { id: '123456789', name: '张三' };
  res.json(user);
});

// 设置路由，用于处理上传文件请求
router.post('/upload', (req, res) => {
  // 模拟从服务器获取文件的代码
  const file = req.files.file;
  const filePath = `${__dirname}/uploads/${file.name}`;
  file.moment(file.path).save({
    path: filePath,
  });
  res.json({ message: '上传成功' });
});

// 设置路由，用于处理用户登录请求
router.post('/login', (req, res) => {
  // 模拟从服务器获取用户名和密码的代码
  const { username, password } = req.body;
  if (username === 'admin' && password === '123456') {
    res.json({ message: '登录成功' });
  } else {
    res.json({ message: '用户名或密码错误' });
  }
});

// 设置路由，用于处理用户注册请求
router.post('/register', (req, res) => {
  // 模拟从服务器获取用户名和邮箱的代码
  const { username, email } = req.body;
  if (username && email) {
    res.json({ message: '注册成功' });
  } else {
    res.json({ message: '请填写完整信息' });
  }
});

// 设置路由，用于处理用户个人信息请求
router.get('/user-info', (req, res) => {
  // 模拟从数据库获取用户信息的代码
  const user = { id: '123456789', name: '张三' };
  res.json(user);
});

// 启动服务器，监听指定端口
const app = express();
app.listen(3000, () => {
  console.log('服务器运行在 http://localhost:3000');
});
