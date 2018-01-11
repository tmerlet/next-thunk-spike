import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addCount } from '../redux/ducks/clock/index'
import PropTypes from "prop-types";

const AddCount = ({count, addCount}) => {
    return (
      <div>
        <style jsx>{`
          div {
            padding: 0 0 20px 0;
          }
      `}</style>
        <h1>AddCount: <span>{count}</span></h1>
        <button onClick={addCount}>Add To Count</button>
      </div>
    )
};

const mapStateToProps = ({ clock }) => ({ count: clock.count });

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: bindActionCreators(addCount, dispatch)
  }
};

AddCount.propTypes = {
  count: PropTypes.number,
  addCount: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCount)
