// npm import
import { connect } from 'react-redux';

// component
import WidgetComponent from '../components/Widget';

// Actions
import { apiCall } from '../store/actions';

// === State (données) ===
const mapStateToProps = state => ({
  dataCompany: state.widget.dataCompany,
});

// === Dispatch (actions) ===
const mapDispatchToProps = dispatch => ({
  apiCall: () => {
    dispatch(apiCall());
  },
});

// Container - connect
const Widget = connect(
  mapStateToProps,
  mapDispatchToProps
)(WidgetComponent);

// Export
export default Widget;
