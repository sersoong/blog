export default function getArticleReducer(state={article:{
    title:"",
    date:"",
    tags:[],
    avatar:"",
    author:"",
    words:"",
    reads:"",
    comments:"",
    likes:"",
    content:"",
    id:-1
}},action){
    switch(action.type){
        case 'ARTICLE':
            return {...state,article:action.payload.article}
        default:
            return state
    }
}