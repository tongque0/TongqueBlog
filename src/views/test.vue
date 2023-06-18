<template>
  <h1>文件下载</h1>
  <input type="text" v-model="fileName" placeholder="请输入文件名称">
  <button @click="downloadFile">下载</button>
</template>

<script setup>
import axios from 'axios'
import {ref} from 'vue'
const fileName=ref('')
const downloadFile = async () => {
  try {
    // 使用axios从服务器获取文件，将响应类型设为'blob'，这样我们就可以得到一个可以在浏览器中直接下载的文件Blob对象
    const response = await axios.get(`http://localhost:14771/api/FileDownload/D%3A%5C%E6%96%87%E4%BB%B6%E4%B8%8B%E8%BD%BD%5C${fileName.value}`, { responseType: 'blob' })
    //这里采用拼串的方式，因为文件没有指定目录，传入的时候需要传入路径，在前端这样写可以在指定目录下载。
    //D%3A%5C%E6%96%87%E4%BB%B6%E4%B8%8B%E8%BD%BD%5C这个就表示了d:\文件下载\SSS


    // 从Blob对象创建一个URL
    const url = window.URL.createObjectURL(new Blob([response.data]))
    // 创建一个新的<a>元素，并设置其href属性为Blob URL，这样模拟点击该链接就可以下载文件
    const link = document.createElement('a')
    link.href = url
    // 设置下载的文件名
    link.setAttribute('download', 'file.txt') // or any other extension
    // 将这个<a>元素添加到页面上，注意，这个元素不会真的被展示在页面中
    document.body.appendChild(link)
    // 模拟用户点击这个<a>元素，开始下载文件
    link.click()
  } catch (err) {
    console.error(err)
  }
}
</script>
