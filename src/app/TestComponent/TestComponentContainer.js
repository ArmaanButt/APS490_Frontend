import React from 'react';
import { connect } from 'react-redux';
import { addItem } from './actions/action_creators';


export class TestComponentContainer extends React.Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
  }

  addItem() {
    this.props.addItem('some item');
  }

  render() {
    return (
      <div>
        <div className="woo">Hello world!</div>
        <button onClick={() => this.addItem()}>Add</button>
      </div>
    );
  }
}

TestComponentContainer.propTypes = {
  addItem: React.PropTypes.func.isRequired,
};

export default connect(null, {
  addItem,
})(TestComponentContainer);

