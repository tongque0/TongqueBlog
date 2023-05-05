<script setup lang="ts">
import { ref } from "vue"
import {addArticle} from '../api/article'
import { useRouter } from "vue-router"
import Nav from "../components/NavBackground.vue"
const title = ref("")
const content = ref("")
const save = () => {
  console.log("Save method called");
};
const imgAdd=()=>{
    console.log('imgadd method called')
}

const tags: any = ref([])
const tag = ref("")
const router = useRouter()
//添加标签
const handleKeydown = () => {
    const trimmedTag = tag.value.trim()
    if (trimmedTag && !tags.value.includes(trimmedTag)) {
        tags.value.push(trimmedTag)
        tag.value = ''
    } else {
        tag.value = ''
    }
}

//向服务端发送请求
const handleSubmit: any = async () => {
    let post = {
        title: title.value,
        content: content.value,
        tags: tags.value,
    }

    const data = await addArticle(post.title, post.content,post.tags)
    //如果发布成功，跳转到首页
    if(data.data.status===200){
        alert('发布成功')
        router.push("/")
    }
}
</script>

<template>

    <Nav></Nav>
    <div class="create">
      <div class="create-left">
        <form @submit.prevent="handleSubmit">
          <label for="title">标题</label>
          <input type="text" v-model="title" required />
          <label for="tag">标签:</label>
          <input
            type="text"
            v-model="tag"
            placeholder="按下回车添加标签"
            @keydown.enter.prevent="handleKeydown"
          />
          <!-- 显示标签 -->
          <div v-for="tag in tags" class="pill">{{ tag }}</div>
          <button>发布</button>
        </form>
      </div>
      <div class="create-right">
        <label for="content">内容</label>
        <mavon-editor :ishljs="true" v-model="content" ref="md" @save="save" @imgAdd="imgAdd" style="min-height: 70vh; " />
        
      </div>
    </div>
  </template>
  
  <style scoped>
  .create {
    margin-top: 3vh;
    display: flex;
  }
  
  .create-left {
    margin-left: 8vw;
    flex-basis: 20%;
    padding-right: 20px;
    box-sizing: border-box;
  }
  
  .create-right {
    flex-grow: 1;
    margin-right: 8vw;
  }
  
  form {
    text-align: left;
    max-width: 100%;
  }
  
  input,
  textarea {
    display: block;
    margin: 10px 0;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid #eee;
  }
  
  textarea {
    height: 160px;
  }
  
  label {
    display: inline-block;
    margin-top: 30px;
    position: relative;
    font-size: 20px;
    margin-bottom: 10px;
  }
  
  button {
    display: block;
    margin-top: 30px;
    background: #ff8800;
    color: white;
    border: none;
    padding: 8px 16px;
    font-size: 18px;
  }
  button:active {
    background-color: #ff6600;
    transform: translateY(2px);
  }
  
  .pill {
    display: inline-block;
    margin: 10px 10px 0 0;
    color: #444;
    background: #ddd;
    padding: 8px;
    border-radius: 20px;
    font-size: 14px;
  }
  </style>
  