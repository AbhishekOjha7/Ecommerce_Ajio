const initialState = {
  CategoryList: [],
};
const categoryReducer = (
  state = initialState,
  action: {type: any; payload: any},
) => {
  const {type, payload} = action;
  // console.log('type payload', type, payload);

  switch (type) {
    case 'CategoryList':
      return {...state, CategoryList: payload};

    default:
      return state;
  }
};
export default categoryReducer;
