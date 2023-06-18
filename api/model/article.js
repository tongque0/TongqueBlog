const db=require('../db/index')

module.exports = {
    getArticles: function () {
        return new Promise((resolve, reject) => {
            const sqlStr = 'select * from article';
            db.query(sqlStr, (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results);
            });
        });
    },

    getArticle: function (id) {
        return new Promise((resolve, reject) => {
            const sqlStr = 'select * from article where id = ?';
            db.query(sqlStr, [id], (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results);
            });
        });
    },

    addArticle: function (title, content, tagsObj) {
        return new Promise((resolve, reject) => {
            const sqlStr1 = `INSERT INTO article (id, title, content, is_delete, date, author_id, tag, img) VALUES (NULL, ?, ?, '0', NULL, NULL, ?,'')`
            db.query(sqlStr1, [title, content, JSON.stringify(tagsObj)], (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results);
            });
        });
    },
};
