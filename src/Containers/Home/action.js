export const Init_Site = (site_config,navs)=>{
    return {
        type:'INIT_SITE',
        payload:{site_config:site_config,navs:navs}
      }
}