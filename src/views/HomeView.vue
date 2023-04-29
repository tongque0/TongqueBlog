<script setup lang="ts">
import HomeCover from "../components/HomeCover.vue"
import PostList from "../components/postlist.vue"
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
        </div>
    </div>
</template>

<style scoped>
.main {
    display: flex;
    padding: 40px 15% 0;
    margin: calc(100vh - 10px) auto auto 0px;
    animation: fadeInUp 1s;
}
.left{
    background-color: rgb(241, 247, 247);
    width: 75%;
}
.right{
    background-color: rgb(118, 189, 236);
    width:25%;
    
}
</style>
