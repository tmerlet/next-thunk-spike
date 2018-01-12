import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { store } from "../store";
import { getProductDetails, fetchData } from "../redux/ducks/productDetails";
import withRedux from "next-redux-wrapper";
import Page from "../components/Page";

export class Counter extends Component {
  static async getInitialProps({ store, isServer }) {
    await store.dispatch(await fetchData()) // comment for client side render
  }

  componentDidMount() {
    // this.props.fetchData();  // uncomment for client side render
  }


  render() {
    return <Page title="Index Page"/>;
  }
}


const mapDispatchToProps = dispatch => {
  return {
    fetchData: bindActionCreators(fetchData, dispatch),
    getProductDetails: bindActionCreators(getProductDetails, dispatch)
  };
};

export default withRedux(store, null, mapDispatchToProps)(Counter);
