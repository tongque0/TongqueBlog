const jwt =require('jsonwebtoken')
const config=require('../config')
const UserModel = require('../model/user')

class UserController {
    static async regUser(req, res, next) {
        try {
            const userinfo = req.query;
            if (!userinfo.username || !userinfo.password) {
                throw { status: 400, message: '用户名或密码不合法' };
            }
            const users = await UserModel.getUserByUsername(userinfo.username);
            if (users.length > 0) {
                throw { status: 400, message: '用户名已被占用，请更换用户名' };
            }
            const result = await UserModel.addUser(userinfo);
            if(result.affectedRows !== 1){
                throw { status: 500, message:'注册用户失败，请稍后再试'}
            }
            res.status(200).json({ status: 200, message: '注册成功' });
        } catch (error) {
            next(error);
        }
    }
    
    static async login(req, res, next) {
        try {
            const userinfo = req.query;
            const users = await UserModel.getUserForLogin(userinfo);
            if (users.length === 0) {
                throw { status: 400, message: '用户名或密码不正确' };
            }
            const user={...users[0],password:'',user_pic:''}
            const tokenStr=jwt.sign(user,config.jwtSecreKey,{expiresIn:config.expiresIn});
            res.json({ status: 200, message:'登录成功',token:'Bearer '+tokenStr });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = UserController;
