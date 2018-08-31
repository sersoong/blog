import 'App.css';
import Routes from 'routes';
import {mapStateToProps,initsite,articleList} from 'store';
import { connect } from 'react-redux';

const App = connect(mapStateToProps,{ initsite,articleList })(Routes)

export default App;
