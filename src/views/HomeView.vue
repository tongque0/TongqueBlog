<script setup lang="ts">
import HomeCover from "../components/HomeCover.vue"
</script>

<template>
    //首页封面
    <HomeCover></HomeCover>
    //主题内容
    <div class="main">
        <div class="left">
            <p>ssssss</p>
            <p>sss</p>
        </div>
        <div class="right">

        </div>
    </div>
</template>

<style scoped>
.main {
    display: flex;
    padding: 40px 15% 0;
    display: flex;
    margin: calc(100vh - 10px) auto auto 0px;
    animation: fadeInUp 1s;
}
</style>
