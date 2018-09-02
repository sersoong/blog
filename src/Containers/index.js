import Home from './Home';
import Posts from './Posts';
import HeaderContent from './Header';
import FooterContent from "./Footer";
import Post from './Post';

export default (subcomponent,props)=>{
    switch(subcomponent){
        case 'Home':
        return Home(props)

        case 'Posts':
        return Posts(props)

        default:
        return '<div></div>'
    }
}

export { HeaderContent,FooterContent,Post }