export const INIT_SITE = 'INIT_SITE';
export const ADD = 'ADD'


export const Init_Site = (site_config,navs)=>{
    return {
        type:INIT_SITE,
        payload:{site_config:site_config,navs:navs}
      }
}

export const Add = () => {
    return {
        type:ADD,
        payload:{add:1}
    }
}