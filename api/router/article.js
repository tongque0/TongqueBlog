const express=require("express")
const router=express.Router();
//导入文章路由处理函数模块
const articleHandler = require('../controllers/article');

router.get('/getArticle', articleHandler.getArticle);
router.get('/getArticles', articleHandler.getArticles);
router.post('/addArticle', articleHandler.addArticle);

module.exports=router;
