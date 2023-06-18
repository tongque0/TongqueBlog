<script setup lang="ts">
import { onMounted,ref } from 'vue';
const scrollToContent = () => {
    let h = document.getElementsByClassName("cover")[0].scrollHeight;
    window.scrollTo({ top: h, behavior: "smooth" });
};

//打字机效果
const messages = [
  "君子一眼，便知道一切!",
  "静以修身，俭以养德!",
  "非淡泊无以明志，非宁静无以致远!",
  "天行健，君子以自强不息。",
  "地势坤，君子以厚德载物。",
  "长风破浪会有时，直挂云帆济沧海。"
];
const message = messages[Math.floor(Math.random() * messages.length)];
let counter = 0;
let intervalId: number | undefined;

const demoText = ref("");

const startTyping = () => {
  intervalId = setInterval(() => {
    counter++;
    const typedMessage = message.substring(0, counter);
    demoText.value = typedMessage;
    if (counter === message.length) clearInterval(intervalId);
  }, 200);
};

onMounted(() => {
  startTyping();
});

</script>

<template>
    <div class="cover">
        <div class="cover-word-container">

            <h1 class="cover-title"> 
                <!-- <img class="logo-icon" src="../assets/images/纸飞机.png"> //图标 -->
              Tonque Blog
            </h1>
            <h2 id="demo" class="cover-title1">{{ demoText }}</h2>
            <div class="cover-content">

            </div>
        </div>
        <button style="" class="down" @click="scrollToContent">
            <img src="../assets/images/arrow-down.png" alt="arrow">
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

.logo-icon {
    width: 48px;
    height: 48px;
    z-index: 10;
    /* 确保图标位于标题前面 */
}

.logo-icon img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.cover-title {
    font-size: 48px;
    color: #eeeeee;
}

.cover-title1 {
    font-size: 18px;
    color: #eeeeee;
}

.down {
    position: absolute;
    top: calc(50% + 10vw);
    left: 48%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    width: 80px;
    height: 80px;
    border: none;
    background-color: transparent;
    animation: bounce 1.5s infinite;
}

@keyframes bounce {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }
}

.down img {
    width: 100%;
    height: 100%;
}

.down:hover {
    opacity: 0.8;
}
</style>

