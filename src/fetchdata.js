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

export const getArticle = (dispatch,action) => {
    Axios.get("/article/posts.json")
    .then(function(article_info){
        if(article_info.data.content_path!==""){
            getArticleContent(dispatch,action,article_info.data)
        }else{
            dispatch(action(article_info))
        }
    }
    )
}
export const getArticleContent = (dispatch,action,payload) => {
    Axios.get("/posts/0.md")
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