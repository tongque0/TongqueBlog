<template>
    <div class="main">
        <div class="one"></div>
        <div class="two"></div>
        <div class="three"></div>
        <div class="two"></div>

    </div>
</template>
<script setup>

</script>
<style scoped>


.main{
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: pink;
  display: flex;
  flex-direction:row;
  flex-wrap: wrap;
}
.one{
  height: 20vh;
  width: 100%;
  background-color: black;
}
.two{
  height: 20vh;
  width:50%;
  background-color: aqua;
}
.three{
  height: 20vh;
  width:50%;
  background-color: rgb(57, 158, 112);
}
</style>