const initialState = {
  dataProvinsi: [],
  dataKota_kabupaten: [],
  dataKecamatan: [],
  dataKelurahan: []
};

function Reducer(state = initialState, { type, payload }) {
  switch (type) {
    case 'GET_PROVINISI':
      return { ...state, dataProvinsi: payload };
    case 'GET_KOTA':
      return { ...state, dataKota_kabupaten: payload };
    case 'GET_KECAMATAN':
      return { ...state, dataKecamatan: payload };
    case 'GET_KELURAHAN':
  
      return { ...state, dataKelurahan: payload };
    default:
      return state;
  }
}

export default Reducer;
