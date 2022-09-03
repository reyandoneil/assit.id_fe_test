const initialState = {
  dataProvinsi: [],
};

function Reducer(state = initialState, { type, payload }) {
  switch (type) {
    case 'GET_PROVINISI':
      return { ...state, dataProvinsi: payload };

    default:
      return state;
  }
}

export default Reducer;
