const initialState = {
  dataEmployee: [],
  isLoading: false,
};

function Reducer(state = initialState, { type, payload }) {
  switch (type) {
    case 'GET_EMPLOYEE':
      return { ...state, dataEmployee: payload };
    case 'IS_LOADING':
      return { ...state, isLoading: payload };
    default:
      return state;
  }
}

export default Reducer;
