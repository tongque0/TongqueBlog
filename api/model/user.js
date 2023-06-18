const db=require('../db/index')

class UserModel {
    static async getUserByUsername(username) {
        const sqlStr = 'select * from users where username = ?';
        const [users] = await db.promise().query(sqlStr, username);
        return users;
    }

    static async addUser(userinfo) {
        const [result] = await db.promise().query('insert into users set ?', userinfo);
        return result;
    }

    static async getUserForLogin(userinfo) {
        const sqlStr = 'SELECT * FROM users WHERE username = ? AND password = ?';
        const [users] = await db.promise().query(sqlStr, [userinfo.username, userinfo.password]);
        return users;
    }
}

module.exports = UserModel;
