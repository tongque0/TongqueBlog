<script setup lang="ts">
import { getArticle, getArticles } from "@/api/article";
import type { Ref } from 'vue';
import { marked } from 'marked'
// import marked from 'marked'


const props = defineProps({
    id: String,
})
const id = props.id || '';
interface Post {
  id: number;
  title: string;
  content: string;
  author_id :string;
  tag:string;
  is_delete:boolean;
}
const { posts }: { posts: Ref<Post[]> } = getArticle(id);
</script>

<template>
    
    <div v-for="post in posts" :key="post.id" class="post-item">
        <h3>{{ post.title }}</h3> 
        <!-- <h3>{{ post.id }}</h3>   
        <h3>{{ post.author_id }}</h3> -->
        <div v-html="marked(post.content)">
        </div>
    </div>
</template>

<style scoped>
    .post-item{
        margin-top: 10vh;
        margin-left: 10vw;
        margin-right: 40vw;
    }

</style>
