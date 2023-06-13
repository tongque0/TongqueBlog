<template>
    <div class="login">

        <form>
            <div>
                <h1>登录</h1>
                <label>用户名:</label>
                <input type="text" v-model="username" />
            </div>
            <div>
                <label>密码:</label>
                <input type="password" v-model="password" />
            </div>
            <div>
                <button type="button" @click="handleLogin">登录</button>
            </div>
        </form>
    </div>
</template>
    
<script lang="ts">
import { defineComponent } from 'vue';
import { login } from '@/api/user';
import { userStore } from '@/stores';

export default defineComponent({
    name: 'Login',
    data() {
        return {
            username: '',
            password: '',
        };
    },
    methods: {
        async handleLogin() {
            const response = await login(this.username, this.password);
            // console.log("responese", response);//这句话没执行
            const token = response.data.token;
            localStorage.setItem('token', token);
            console.log(localStorage.getItem('token'));
            if (token) {
                // 登录成功后跳转到首页
                alert('登录成功！')
                userStore().isLogin = true;
                this.$router.push('/');
            } else {
                console.error('登录失败：没有获取到 token');
            }
        }
    }
},
);
</script>
    
<style scoped>
.login {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family: Arial, sans-serif;
}

.login h1 {
    margin-bottom: 30px;
    text-align: center;
    font-size: 36px;
    font-weight: bold;
}

.login form {
    margin: auto;
    max-width: 600px;
    border-radius: 10px;
    padding: 40px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    transform: translateZ(40px);
}

.login form div {
    margin-bottom: 20px;
}

.login form div label {
    display: block;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
}

.login form div input[type="text"],
.login form div input[type="password"] {
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    padding: 10px;
    width: 100%;
}

.login form div input[type="text"]:focus,
.login form div input[type="password"]:focus {
    outline: none;
    border-color: #333;
}

.login form div button {
    background-color: #333;
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
    padding: 10px;
    width: 100%;
}

.login form div button:hover {
    background-color: #555;
}
</style>
    