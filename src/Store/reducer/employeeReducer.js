const initialState = {
  dataEmployee: [],
  isLoading: false,
  isModal: false,
  modalName: '',
  dataEditEmployee: [],
  isMessage: false,
  message: '',
};

function Reducer(state = initialState, { type, payload }) {
  switch (type) {
    case 'GET_EMPLOYEE':
      return { ...state, dataEmployee: payload };
    case 'IS_LOADING':
      return { ...state, isLoading: payload };
    case 'IS_MODAL':
      return { ...state, isModal: payload };
    case 'MODAL_NAME':
      return { ...state, modalName: payload };
    case 'DATA_EDIT':
      return { ...state, dataEditEmployee: payload };
      case 'IS_MESSAGE':
      return { ...state, isMessage: payload };
    case 'MESSAGE':
      return { ...state, message: payload };
    default:
      return state;
  }
}

export default Reducer;
