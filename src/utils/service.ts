import axios from 'axios';
import store from '../redux/store';
import {Category_Data} from './actionTypes';
import {showSnackbar} from './commonFunction';
const $http = axios.create({
  timeout: 30000,
  baseURL: 'https://fakestoreapi.com/products/',
  headers: {
    'Content-Type': 'application/json',
  },
});

let status_code = {
  success: 200,
  successAction: 201,
  notFound: 204,
  badRequest: 400,
  Unauthorized: 401,
  invalid: 400,
  timeout: 408,
  userDelete: 410,
  serverError: 500,
};

const successCodes = [200, 201];

export const GET_API_CALL = (endPoint: string, callback: Function) => {
  $http
    .get(endPoint)
    .then((response: any) => {
      if (
        response &&
        response?.status &&
        successCodes.includes(response?.status)
      ) {
        callback({
          isSuccess: true,
          data: response?.data?.data || response?.data,
        });
      } else {
        showSnackbar(response?.response?.data?.message);
        callback({isSuccess: false, data: response?.response?.data});
      }
    })
    .catch((error: any) => {
      if (
        error?.message?.statusCode === 404 ||
        error?.message?.statusCode === 401 //Session expire
      ) {
        showSnackbar('session expired');
        callback({isSuccess: false, data: {}});
        store.dispatch({type: Category_Data, payload: {sessionExpired: true}});
      } else {
        showSnackbar('something went wrong, please try again.');
        callback({isSuccess: false, data: {}});
      }
    });
};
