import 'App.css';
import Routes from 'routes';
import {AppConnect,mapStateToProps,add,initsite} from 'store';
import { connect } from 'react-redux';

const App = connect(mapStateToProps,{ add,initsite })(Routes)

export default App;
