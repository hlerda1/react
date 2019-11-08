import React, { Component } from 'react';
import Button from '../button'
import {connect} from 'react-redux';
import {plusCounterAction, minusCounterAction} from '../../store'
import styles from './child.module.css'

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handlerPlusCounter = () => {
    this.props.plusCounterAction()
    this.setState({
      count: this.state.count + 1
    });
  };

  handlerMinusCounter = () => {
    this.props.minusCounterAction()
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    const { plusLabel, minusLabel, childNumber } = this.props
    return (
      <div className={styles.container}>
        <div>Child Nº {childNumber}</div>
        <div>Child Counter: {this.state.count}</div>
        <Button
          plusLabel={plusLabel}
          minusLabel={minusLabel}
          plusCounter={this.handlerPlusCounter}
          minusCounter={this.handlerMinusCounter}
        />
      </div>
    );
  }
}

const mapDispatchToProp = {
  plusCounterAction,
  minusCounterAction
}

export default connect(null, mapDispatchToProp, )(Child);
