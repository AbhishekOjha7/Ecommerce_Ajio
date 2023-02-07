import axios from 'axios';
export function getCategoryList(text: any) {
  return (dispatch: any) => {
    axios
      .get(`https://fakestoreapi.com/products/category/${text}`)
      .then(resp => {
        console.log('res', resp);
        dispatch({type: 'CategoryList', payload: resp.data});
      })
      .catch(err => {
        console.log('ERRORR', err);
      });
  };
}
