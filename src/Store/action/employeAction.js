import axios from 'axios';
import {
  GET_EMPLOYEE,
  IS_LOADING,
  IS_MODAL,
  MODAL_NAME,
} from './index';
const employeeApi =
  'https://61601920faa03600179fb8d2.mockapi.io/pegawai';

export const isLoading = (payload) => {
  return {
    type: IS_LOADING,
    payload,
  };
};

export const modal = (payload) => {
  return {
    type: IS_MODAL,
    payload,
  };
};
export const modalName = (payload) => {
  return {
    type: MODAL_NAME,
    payload,
  };
};

export const getAllEmployee = () => {
  return async (dispatch) => {
    const onSuccess = (employee) => {
      dispatch(isLoading(false));
      dispatch({
        type: GET_EMPLOYEE,
        payload: employee.data,
      });
    };
    try {
      dispatch(isLoading(true));
      const getDataEmployee = await axios.get(employeeApi);
      return onSuccess(getDataEmployee);
    } catch (error) {
      console.error(error);
    }
  };
};

export const addEmployee = () => {
  return async (dispatch) => {
    const onSuccess = (employee) => {
      dispatch(isLoading(false));
      dispatch({
        type: GET_EMPLOYEE,
        payload: employee.data,
      });
    };
    try {
      dispatch(isLoading(true));
      const getDataEmployee = await axios.get(employeeApi);
      return onSuccess(getDataEmployee);
    } catch (error) {
      console.error(error);
    }
  };
};

export const deleteEmployee = (employeeId) => {
  return async (dispatch) => {
    const onSuccess = (deleteEmployee) => {
      dispatch(getAllEmployee());
      dispatch(isLoading(false));
    };
    try {
      dispatch(isLoading(true));
      const deleteEmployee = await axios.delete(
        `${employeeApi}/${employeeId}`
      );
      return onSuccess(deleteEmployee);
    } catch (error) {
      console.error(error);
    }
  };
};

export const updateEmployee = (dataEmployee) => {
  const { id, nama, provinsi, kabupaten, kecamatan, kelurahan } =
    dataEmployee;
  return async (dispatch) => {
    const onSuccess = (employee) => {
      dispatch(getAllEmployee());

      dispatch({
        type: GET_EMPLOYEE,
        payload: employee.data,
      });
    };
    try {
      dispatch(isLoading(true));
      const updateEmployee = await axios.put(`${employeeApi}/${id}`, {
        headers: {},
        id,
        nama,
        provinsi,
        kabupaten,
        kecamatan,
        kelurahan,
      });
      return onSuccess(updateEmployee);
    } catch (error) {
      console.error(error);
    }
  };
};
