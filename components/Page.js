import Link from "next/link";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Page = ({ clock, title, linkTo, productDetails }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>debug info</h2>
      <div>{productDetails.debug}</div>
    </div>
  );
};

Page.propTypes = {
  clock: PropTypes.shape({
    lastUpdate: PropTypes.number,
    light: PropTypes.boolean
  }),
  title: PropTypes.string,
  linkTo: PropTypes.string,
  productDetails: PropTypes.string,
};

export default connect(state => state)(Page);
