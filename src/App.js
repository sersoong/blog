import 'App.css';
import Routes from 'routes';
import {mapStateToProps,initsite} from 'store';
import { connect } from 'react-redux';

const App = connect(mapStateToProps,{ initsite })(Routes)

export default App;
