const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('express-jwt');
const config = require('./config');
const articleRouter = require('./router/article');
const userRouter = require('./router/user');

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configure JWT middleware before the routes
app.use(jwt.expressjwt({ secret: config.jwtSecreKey,algorithms: ["HS256"]}).unless({ path: [/^\/api\//] }))

app.use('/api', articleRouter);
app.use('/api', userRouter);

// Create a middleware for error handling
app.use((err, req, res, next) => {
  // If the error is due to token parsing failure
  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({
      status: 401,
      message: '身份验证失败'
    })
  }
  // If it's an error due to other reasons
  console.error(err); // log the error to console for more information
  res.status(500).json({
    status: 500,
    message: '未知的错误',
    error: err.message // include the error message in the response
  })
});


app.listen(3007, () => {
    console.log('API server running at http://127.0.0.1:3007')
});
