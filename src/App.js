import 'App.css';
import React, { Component } from 'react';
import { Provider} from "react-redux";
import Store,{ store } from 'store';

class App extends Component {
    render(){
        return(
            <Provider store={store}>
                <Store />
            </Provider>
        )
    }
}

export default App;
