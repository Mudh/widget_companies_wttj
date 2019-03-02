// npm import
import { connect } from 'react-redux';

// component
import AppComponent from '../components/App';

// actions
import { changeMessage, apiCall } from '../store/actions';

// === State (données) ===
const mapStateToProps = state => ({
  message: state.app.message,
  data: state.api.data,
});

// === Dispatch (actions) ===
const mapDispatchToProps = dispatch => ({
  apiCall: () => {
    dispatch(apiCall());
  },
  onClickChangeMessage: () => {
    dispatch(changeMessage('Hello John!'));
  },
});

// Container - connect
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent);

// Export
export default App;
