<script setup lang="ts">
import { marked } from 'marked'


const markdownText = 'This is a **bold** text.';

const htmlText = marked(markdownText);
console.log(htmlText); // <p>This is a <strong>bold</strong> text.</p>
</script>

<template>
    <h1>111</h1>
</template>

<style scoped></style>
