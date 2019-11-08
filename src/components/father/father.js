import React, { Component } from 'react';
import Child from '../child';
import {connect} from 'react-redux';
import styles from './father.module.css';

class Father extends Component {
  render() {
    console.log(this.props)
    return (
      <div className={styles.container}>
        <div>Father Counter: {this.props.fatherCounter}</div>
        <div className={styles.children}>
          <Child
            childNumber={'1'}
            plusLabel='click me for plus'
            minusLabel='click me for minus'

          />
          <Child
            childNumber={'2'}
            plusLabel='click me for plus'
            minusLabel='click me for minus'

          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    fatherCounter: state.counter
  }
}



export default connect(mapStateToProps)(Father);
