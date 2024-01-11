
import axios from '../../utils/axios';

import {
  SINGLE_PRODUCT_SUCCESS,
  GET_PRODUCT_SUCCESS,
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
} from './actionType';

export const getProducts = (paramObj, page) => dispatch => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .get('product/list',{
      params: {
        page,
        limit: 20
      }
    })
    .then(res => {
      dispatch({
        type: GET_PRODUCT_SUCCESS,
        payload: res.data.message,
        totalProducts: 1//res.headers['x-total-count'],
      });
    })
    .catch(err => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};

export const singleProductfunc = id => dispatch => {
  dispatch({ type: PRODUCT_REQUEST });
  console.log('sghdgassdj');
  return axios
    .get(`https://viridian-confusion-henley.glitch.me/products/${id}`)
    .then(res => {
      dispatch({ type: SINGLE_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};
