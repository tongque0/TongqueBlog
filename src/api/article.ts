import {ref} from "vue"
import axios from "axios"

const getArticles =()=>{
    const posts=ref([]);
    const load=async ()=>{
        try{
            const {data}=await axios.get('http://127.0.0.1:3007/api/getArticles')
            // console.log(data)
            posts.value=data
        }catch(error){
            console.log(error);
        }
    }
    load()

    return {posts}
}
const getArticle =(id: string)=>{
    const posts=ref([]);
    const load=async ()=>{
        try{
            const {data}=await axios.get('http://127.0.0.1:3007/api/getArticle?id='+id)
            // console.log(data)
            posts.value=data
        }catch(error){
            console.log(error);
        }
    }
    load()

    return {posts}
}

const addArticle = (title: any, content: any) => {
    const load = async () => {
      try {
        const status: any=await axios.post('http://127.0.0.1:3007/api/getArticle', { title, content });
      } catch (error) {
        console.log(error);
      }
    };
    load();
  
    return status;
  };
  
export { getArticles, getArticle,addArticle };

