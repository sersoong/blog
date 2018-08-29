import Axios from "axios";

export const getNavMenu = ()=>{
    return Axios.get("/nav_menu.json")
}

export const getSiteConfig = ()=> {
    return Axios.get("/site_config.json")
}

export const getSiteInfo = (dispatch,action) =>{
    Axios.all([getSiteConfig(),getNavMenu()])
    .then(Axios.spread(function (site_config,navs){
      dispatch(action(site_config.data,navs.data))
}))
}