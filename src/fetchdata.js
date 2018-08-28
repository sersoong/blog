import axios from "axios";

export const getNavMenu = ()=>{
    return axios.get("/nav_menu.json")
}

export const getSiteConfig = ()=> {
    return axios.get("/site_config.json")
}