import React from 'react';
import PortalContainer from '../Portal/PortalContainer';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  componentDidMount() {
    if (this.props.enableAuth) {
      // TODO: Do a fetch
    }
  }

  render() {
    return (
      <div>
        {this.state.isLoggedIn && (
          <div>
            {this.props.children}
          </div>
        )}
        {!this.state.isLoggedIn && (
          <PortalContainer />
        )}
      </div>
    );
  }
}

Home.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node,
  ]).isRequired,
  enableAuth: React.PropTypes.bool.isRequired,
};


export default Home;
