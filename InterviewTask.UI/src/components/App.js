const React = require('react');
import Header from './common/Header';
import {connect} from 'react-redux';

class App extends React.Component{
  render(){
    return (
        <div className="">
          <Header loading={this.props.loading} />

          {this.props.loading ==false ? 
              this.props.children : ''}
      </div>
    );
  }
}

App.propTypes = {
    children: React.PropTypes.object.isRequired,
    loading: React.PropTypes.bool.isRequired
};


function mapStateToProps(state, ownProps) {
  return {
    loading: state.loadingReducer > 0
  };
}
export default connect(mapStateToProps)(App);
