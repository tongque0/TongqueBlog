<script setup lang="ts">
import { computed } from "vue";
interface Post {
  id: number;
  title: string;
  content: string;
  author_id :string;
  tag:string;
  is_delete:boolean;
}
defineProps<{
  posts: Post[];
}>();

</script>

<template>
    <div class="post-list">
        <div v-for="post in posts" :key="post.id" class="post-item">
            <routerLink :to="{name:'Detail',params:{id:post.id}}">
                <h3>{{ post.title }}</h3>
            </routerLink>
            <p>{{ post.content.substring(0, 100) + "..." }}</p>
        </div>
    </div>
</template>

<style scoped></style>
