import axios from 'axios';
import {useDispatch} from 'react-redux';
import ENDPOINTS from '../../../utils/endPoints';
import endPoints from '../../../utils/endPoints';
import {GET_API_CALL} from '../../../utils/service';

export function getHomeApi(callback: Function, ErrorCallback: Function) {
  return (dispatch: any) => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then(resp => {
        dispatch({type: 'Home_Data', payload: resp.data});
        callback(resp);
      })
      .catch(err => {
        console.log('ERRORR', err);
        ErrorCallback(err);
      });
  };
}

export function getCategoryApi(callback: Function, ErrorCallback: Function) {
  return (dispatch: any) => {
    axios
      .get(`https://fakestoreapi.com/products/categories`)
      .then(resp => {
        dispatch({type: 'Category_Data', payload: resp?.data});
        callback(resp);
      })
      .catch(err => {
        console.log('ERRORR', err);
        ErrorCallback(err);
      });
  };
}

// export const getCategoryApi = (callBack: Function) => {
//   return (dispatch: any, getState: any) => {
//     GET_API_CALL(`${ENDPOINTS.CATEGORY.GETCATEGORY}`, (response: any) => {
//       console.log('ACTION_APII>>>>>', response?.isSuccess);
//       if (response?.isSuccess == true) {
//         dispatch({type: 'Category_Data', payload: response?.data});
//       } else {
//         console.log('errpr at Api call');
//       }
//       callBack(response);
//     });
//   };
// };
