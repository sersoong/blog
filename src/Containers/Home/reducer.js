export default function initSiteReducer(state={site_config:{title:""},navs:[]},action){
    switch(action.type){
        case 'INIT_SITE':
            return {...state,site_config:action.payload.site_config,navs:action.payload.navs}
        default:
            return state
    }
}