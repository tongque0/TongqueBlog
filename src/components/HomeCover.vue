<script setup lang="ts">
const scrollToContent = () => {
    let h = document.getElementsByClassName("cover")[0].scrollHeight;
    window.scrollTo({ top: h, behavior: "smooth" });
};
</script>

<template>
    <div class="cover">
        <div class="cover-word-container">
            <h1 class="cover-title">Tongque Blog</h1>
            <div class="cover-content">
                <typewriter />
            </div>
        </div>
        <button style="font-size: 30px" class="arrow-down" @click="scrollToContent" >!</button>
    </div>
</template>

<style scoped>
.cover {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
    background: url("https://upload.linkstarted.top/config/690cd550b6f59b2613974a3804a01d42.jpg");
    background-size: cover;
    background-attachment: fixed;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
}
</style>

