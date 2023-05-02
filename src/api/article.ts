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

const addArticle = async (title: any, content: any,tags:any) => {
    const data = { title, content,tags}
    const response = await axios.post('http://127.0.0.1:3007/api/addArticle', data, { responseType: 'json' })
    return response
   
  };
  
export { getArticles, getArticle,addArticle };

