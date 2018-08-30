import Home from './Home';
import Posts from './Posts';
import HeaderContent from './Header';
import FooterContent from "./Footer";

export default (subcomponent,props)=>{
    switch(subcomponent){
        case 'Home':
        return Home(props)
        case 'Posts':
        return Posts(props)
    }
}

export { HeaderContent,FooterContent }