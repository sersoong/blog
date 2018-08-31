import Axios from "axios";

const getNavMenu = ()=>{
    return Axios.get("/nav_menu.json")
}

const getSiteConfig = ()=> {
    return Axios.get("/site_config.json")
}

export const getArticleList = (dispatch,action) => {
    Axios.get("/article/list.json",{headers:{"Content-Type": "application/json; charset=utf-8"}})
    .then(function(article_list){
        dispatch(action(article_list.data))
    }
    )


}

export const getSiteInfo = (dispatch,action) =>{
    Axios.all([getSiteConfig(),getNavMenu()])
    .then(Axios.spread(function (site_config,navs){
        dispatch(action(site_config.data,navs.data))
}))
}