<script setup lang="ts">
import HomeCover from "../components/HomeCover.vue"
import PostList from "../components/postlist.vue"
import NavFoot from "@/components/NavFoot.vue";
// import getArticles from "../api/article"
import { getArticles, getArticle } from "@/api/article";

const {posts} = getArticles();
</script>

<template>
    //首页封面
    <HomeCover></HomeCover>
    //主题内容
    <div class="main">
        <div class="left">
            <PostList :posts="posts"/>
        </div>
        <div class="right">
            <img src="../assets/images/arrow-down.svg">
            <h1>你好，今天！</h1>

            <h2>你好，明天！</h2>
        </div>
    </div>

    <NavFoot></NavFoot>

</template>

<style scoped>
.main {
    display: flex;
    padding: 40px 15% 0;
    margin: calc(100vh - 10px) auto auto 0px;
    animation: fadeInUp 1s;
}
.left{
    width: 75%;
}
.right{
    /* background-color: rgb(118, 189, 236); */
    width:25%;
    
}

.right img{
    
    border-radius: 50%;
}
</style>
