import axios from 'axios';
import { GET_PROVINISI } from './index';

export const getProvinsi = () => {
  return async (dispatch) => {
    const onSuccess = (provinsi) => {
      dispatch({
        type: GET_PROVINISI,
        payload: provinsi.data.provinsi,
      });
    };
    try {
      const getDataProvinsi = await axios.get(
        `https://dev.farizdotid.com/api/daerahindonesia/provinsi`
      );
      return onSuccess(getDataProvinsi);
    } catch (error) {
      console.error(error);
    }
  };
};

export const getKota = (idProvinsi) => {
  return async (dispatch) => {
    try {
      const getDataProvinsi = await axios.get(
        `https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${idProvinsi}`
      );
      console.log(getDataProvinsi);
    } catch (error) {
      console.error(error);
    }
  };
};

export const getKecamatan = () => {};
