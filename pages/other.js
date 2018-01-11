import React from "react";
import { bindActionCreators } from "redux";
import withRedux from "next-redux-wrapper";
import { store } from "../store";
import {
  startClock,
  addCount,
  serverRenderClock
} from "../redux/ducks/clock/index";
import Page from "../components/Page";

class Counter extends React.Component {
  static getInitialProps({ store, isServer }) {
    store.dispatch(serverRenderClock(isServer));
    store.dispatch(addCount());
  }

  componentDidMount() {
    this.timer = this.props.startClock();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return <Page title="Other Page" linkTo="/" />;
  }
}

Counter.propTypes = {
  startClock: PropTypes.func,
};

const mapDispatchToProps = dispatch => {
  return {
    startClock: bindActionCreators(startClock, dispatch)
  };
};

export default withRedux(initStore, null, mapDispatchToProps)(Counter);
