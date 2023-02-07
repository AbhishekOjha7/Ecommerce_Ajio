const initialState = {
  HOME_DATA: [],
  CATEGORY_DATA: [],
};
const homeReducer = (
  state = initialState,
  action: {type: any; payload: any},
) => {
  const {type, payload} = action;

  switch (type) {
    case 'Home_Data':
      return {...state, HOME_DATA: payload};
    case 'Category_Data':
      return {...state, CATEGORY_DATA: payload};

    default:
      return state;
  }
};
export default homeReducer;
