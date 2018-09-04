import Axios from "axios";

const getNavMenu = ()=>{
    return Axios.get("/nav_menu.json")
}

const getSiteConfig = ()=> {
    return Axios.get("/site_config.json")
}

export const getArticleList = (dispatch,action) => {
    Axios.get("/article/list.json")
    .then(function(article_list){
        dispatch(action(article_list.data))
    }
    )
}

export const getArticle = (dispatch,action,id) => {
    Axios.get("/article/posts.json")
    .then(function(article_info){
        if(article_info.data.content_path!==""){
            var content_path = "/posts/"+id+".md"
            getArticleContent(dispatch,action,content_path,article_info.data[id])
        }else{
            dispatch(action(article_info.data[id]))
        }
    }
    )
}

export const getArticleContent = (dispatch,action,url,payload) => {
    Axios.get(url)
    .then(function(article){
        payload.content = article.data
        dispatch(action(payload))
    }
    )
}

export const getSiteInfo = (dispatch,action) =>{
    Axios.all([getSiteConfig(),getNavMenu()])
    .then(Axios.spread(function (site_config,navs){
        dispatch(action(site_config.data,navs.data))
}))
}