import React, {PropTypes} from 'react';

class LoadingSpinner extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.interval = setInterval(() => {

    }, this.props.interval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <div className="loader"></div>;
  }
}

LoadingSpinner.defaultProps = {
  interval: 300
};

LoadingSpinner.propTypes = {
  interval: PropTypes.number
};

export default LoadingSpinner;
