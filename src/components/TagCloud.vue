<script setup lang="ts">
import {ref,onMounted} from 'vue'
    const props=defineProps({
        posts:Array
    })
    const tags=ref([])
    const tagArray =[]
    onMounted(() => {
    });

</script>

<template>
    <h1> 你好 今天！</h1>
</template>

<style scoped></style>
