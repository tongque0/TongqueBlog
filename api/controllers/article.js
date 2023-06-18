const ArticleModel = require('../model/article');

exports.getArticles = async (req, res) => {
    try {
        const articles = await ArticleModel.getArticles();
        return res.json(articles);
    } catch (err) {
        return res.status(500).json({ status: 500, message: '服务器内部错误' });
    }
}

exports.getArticle = async (req, res) => {
    try {
        const id = req.query.id;
        const articles = await ArticleModel.getArticle(id);
        if (articles.length > 0) {
            const is_delete = articles[0].is_delete;
            if (is_delete !== 0) {
                return res.json("文章已删除")
            }
            return res.json(articles);
        }
    } catch (err) {
        return res.status(500).json({ status: 500, message: '服务器内部错误' });
    }
}

exports.addArticle = async (req, res) => {
    try {
        const title = req.body.title;
        const content = req.body.content;
        const tagsObj = { tags: req.body.tags };
        await ArticleModel.addArticle(title, content, tagsObj);
        return res.json({ status: 200, message: '文章添加成功' });
    } catch (err) {
        return res.status(500).json({ status: 500, message: '服务器内部错误' });
    }
}
