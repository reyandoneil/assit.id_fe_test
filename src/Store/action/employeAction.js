import axios from 'axios';
import {
  GET_EMPLOYEE,
  IS_LOADING,
  IS_MODAL,
  MODAL_NAME,
  DATA_EDIT,
  IS_MESSAGE,
  MESSAGE,
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

export const isMessage = (payload) => {
  return {
    type: IS_MESSAGE,
    payload,
  };
};

export const message = (payload) => {
  return {
    type: MESSAGE,
    payload,
  };
};

export const isDelate = (payload) => {
  
}

export const modalName = (payload) => {
  return {
    type: MODAL_NAME,
    payload,
  };
};

export const dataEdit = (payload) => {
  return {
    type: DATA_EDIT,
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
      const getDataEmployee = await axios.get(
        'https://61601920faa03600179fb8d2.mockapi.io/pegawai'
      );
      return onSuccess(getDataEmployee);
    } catch (error) {
      console.error(error);
    }
  };
};

export const addEmployee = (data) => {
  return async (dispatch) => {
    const { nama, provinsi, kabupaten, kecamatan, kelurahan } = data;
    const onSuccess = (employee) => {
      dispatch(getAllEmployee());
      dispatch(isLoading(false));
      dispatch(isMessage(true))
      dispatch(message('Success add employee to db'))
    };
    try {
      dispatch(isLoading(true));
      const getDataEmployee = await axios.post(
        'https://61601920faa03600179fb8d2.mockapi.io/pegawai',
        {
          nama,
          provinsi,
          kabupaten,
          kecamatan,
          kelurahan,
        }
      );
      return onSuccess(getDataEmployee);
    } catch (error) {
      dispatch(isMessage(true))
      dispatch(message('Error add employee to db'))
      console.error(error);
    }
  };
};

export const deleteEmployee = (employeeId) => {
  return async (dispatch) => {
    const onSuccess = (deleteEmployee) => {
      dispatch(getAllEmployee());
      dispatch(isLoading(false));
      dispatch(isMessage(true))
      dispatch(message('Success delete employee from db'))
    };
    try {
      dispatch(isLoading(true));
      const deleteEmployee = await axios.delete(
        `${employeeApi}/${employeeId}`
      );
      return onSuccess(deleteEmployee);
    } catch (error) {
      console.error(error);
      dispatch(isMessage(true))
      dispatch(message('Error delete employee from db'))
    }
  };
};

export const updateEmployee = (dataEmployee) => {
  const { id, nama, provinsi, kabupaten, kecamatan, kelurahan } =
    dataEmployee;
  return async (dispatch) => {
    const onSuccess = (employee) => {
      dispatch(getAllEmployee());
      dispatch(isLoading(false));
      dispatch(isMessage(true))
      dispatch(message('Success update employee from db'))
    };
    try {
      dispatch(isLoading(true));
      const updateEmployee = await axios.put(`${employeeApi}/${id}`, {
        nama,
        provinsi,
        kabupaten,
        kecamatan,
        kelurahan,
      });
      return onSuccess(updateEmployee);
    } catch (error) {
      console.error(error);
      dispatch(isMessage(true))
      dispatch(message('Error update employee from db'))
    }
  };
};
