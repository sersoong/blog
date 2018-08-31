export default function getArticleListReducer(state={article_list:[]},action){
    switch(action.type){
        case 'ARTICLE_LIST':
            return {...state,article_list:action.payload.article_list}
        default:
            return state
    }
}