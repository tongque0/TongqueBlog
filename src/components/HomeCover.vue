<script setup lang="ts">
const scrollToContent = () => {
    let h = document.getElementsByClassName("cover")[0].scrollHeight;
    window.scrollTo({ top: h, behavior: "smooth" });
};
</script>

<template>
    <div class="cover">
        <div class="cover-word-container">
            <h1 class="cover-title">Tonque Blog</h1>
            <h2 class="cover-title1">金风玉露一相逢，便胜却，人间无数！</h2>
            <div class="cover-content">
                
            </div>
        </div>
        <button style="font-size: 30px" class="down" @click="scrollToContent">
            <svg width="66" height="66">
                <img src="../assets/images/arrow-down.svg" alt="">
            </svg>
        </button>

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

.cover-title {
    font-size: 48px;
    color:#eeeeee;
}
.cover-title1 {
    font-size: 18px;
    color:#eeeeee;
}

.down {
    position: absolute;
    bottom: 20%;
    cursor: pointer;
    color: rgb(255, 255, 255);
    transition: color 0.2s;
    background-color: transparent;
    /* 透明 */
    animation: bounce 4s infinite;
}

.down:hover {
    color: rgba(255, 255, 255, 0.8);
    transition: color 0.2s;
}
</style>

