export const GET_PRODUCT_DETAILS = "GET_PRODUCT_DETAILS";
export const GET_PRODUCT_DETAILS_SUCCESS = "GET_PRODUCT_DETAILS_SUCCESS";

import getProductsApiCall from "../../../api";

export const getProductDetails = () => ({ type: GET_PRODUCT_DETAILS });

export const getProductDetailsSuccess = productDetails => ({
  type: GET_PRODUCT_DETAILS_SUCCESS,
  payload: { productDetails }
});

export function fetchData() {
  return dispatch => {
    dispatch(getProductDetails());
    getProductsApiCall()
      .then(data => {
        dispatch(getProductDetailsSuccess(data));
      })
      .catch(err => console.log("err:", err));
  };
}

export const productDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PRODUCT_DETAILS: {
      return {
        ...state,
        isFetching: true,
        debug: "GET_PRODUCT_DETAILS action"
      };
    }
    case GET_PRODUCT_DETAILS_SUCCESS: {
      console.log("in success");
      const { productDetails } = action.payload;
      console.log("productDetails", productDetails);
      return {
        ...state,
        ...productDetails,
        isFetching: false,
        debug: "SUCCESSS"
      };
    }
    default:
      return state;
  }
};
