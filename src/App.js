import 'App.css';
import React, { Component } from 'react';
import { Provider} from "react-redux";
import Store,{ store } from 'store';
import { LocaleProvider } from "antd";
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from "moment";
import 'moment/locale/zh-cn';
import 'github-markdown-css'

moment.locale('zh-cn')
class App extends Component {
    render(){
        return(
            <LocaleProvider locale={zhCN}>
            <Provider store={store}>
                <Store />
            </Provider>
            </LocaleProvider>
            
        )
    }
}

export default App;
