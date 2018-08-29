export default function addReducer(state={count:0},action){
    const count = state.count
    switch(action.type){
        case 'ADD':
            return {...state,count:count+action.payload.add}
        default:
            return state
    }
}