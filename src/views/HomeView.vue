<script setup lang="ts">
import { ref, computed } from 'vue';
import HomeCover from "../components/HomeCover.vue"
import PostList from "../components/postlist.vue"
import NavFoot from "@/components/NavFoot.vue";
import TagCloud from "../components/TagCloud.vue"
import { getArticles, getArticle } from "@/api/article";

const posts = ref(getArticles().posts);;
const searchTerm = ref('');
const filteredPosts = computed(() => {
  if (searchTerm.value === '') {
    return posts.value;
  }
  return posts.value.filter((post: { title: string; }) =>
    post.title.toLowerCase().includes(searchTerm.value.toLowerCase())
  );
});
const post =filteredPosts;

</script>

<template>
    //首页封面
    <HomeCover></HomeCover>
    //主题内容
    <div class="main">
        <div class="left">
            <input type="text"  class="search-input" v-model="searchTerm" placeholder="Search" />
            <PostList :posts="post"/>
        </div>
        <div class="right">
            <img src="../assets/images/arrow-down.svg">
            <TagCloud :posts="post"></TagCloud>
        </div>
    </div>

    <NavFoot></NavFoot>

</template>

<style scoped>
@import url(../assets/sousuo.css);
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
