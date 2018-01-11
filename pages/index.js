import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { store } from "../store";
import {
  startClock,
  addCount,
  serverRenderClock
} from "../redux/ducks/clock/index";
import { getProductDetails, fetchData } from "../redux/ducks/productDetails";
import withRedux from "next-redux-wrapper";
import Page from "../components/Page";

export class Counter extends Component {
  static getInitialProps({ store, isServer }) {
    store.dispatch(serverRenderClock(isServer));
    store.dispatch(addCount());
    store.dispatch(fetchData()) // comment for client side render
  }

  componentDidMount() {
    this.timer = this.props.startClock();
    // this.props.fetchData();  // uncomment for client side render
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return <Page title="Index Page" linkTo="/other" />;
  }
}

Counter.propTypes = {
  startClock: PropTypes.func
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: bindActionCreators(fetchData, dispatch),
    startClock: bindActionCreators(startClock, dispatch),
    getProductDetails: bindActionCreators(getProductDetails, dispatch)
  };
};

export default withRedux(store, null, mapDispatchToProps)(Counter);
