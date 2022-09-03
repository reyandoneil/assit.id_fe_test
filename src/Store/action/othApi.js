import axios from 'axios';
import {
  GET_PROVINISI,
  GET_KOTA,
  GET_KECAMATAN,
  GET_KELURAHAN
} from './index';

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
      onSuccess(getDataProvinsi);
    } catch (error) {
      console.error(error);
    }
  };
};

export const getKota = (idProvinsi) => {
  return async (dispatch) => {
    const onSuccess = (provinsi) => {
      dispatch({
        type: GET_KOTA,
        payload: provinsi.data.kota_kabupaten,
      });
    };
    try {
      const getKota = await axios.get(
        `https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${idProvinsi}`
      );
      onSuccess(getKota)
    } catch (error) {
      console.error(error);
    }
  };
};

export const getKecamatan = (idKota) => {
  return async (dispatch) => {
    const onSuccess = (kecamatan) => {
      dispatch({
        type: GET_KECAMATAN,
        payload: kecamatan.data.kecamatan,
      });
    };
    try {
      const getKecamatan = await axios.get(
        `https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=${idKota}`
      );
      onSuccess(getKecamatan)
    } catch (error) {
      console.error(error);
    }
  };
};

export const getKelurahan = (idKecamatan) => {
  return async (dispatch) => {
    const onSuccess = (kelurahan) => {
      dispatch({
        type: GET_KELURAHAN,
        payload: kelurahan.data.kelurahan,
      });
    };
    try {
      const getKelurahan = await axios.get(
        `https://dev.farizdotid.com/api/daerahindonesia/kelurahan?id_kecamatan=${idKecamatan}`
      );
      onSuccess(getKelurahan)
    } catch (error) {
      console.error(error);
    }
  };

}
