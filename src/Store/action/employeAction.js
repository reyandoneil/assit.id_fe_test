import axios from 'axios';
import { GET_EMPLOYEE, IS_LOADING } from './index';
const employeeApi =
  'https://61601920faa03600179fb8d2.mockapi.io/pegawai';

export const isLoading = (payload) => {
  return {
    type: IS_LOADING,
    payload,
  };
};

export const getAllEmployee = () => {
  return async (dispatch) => {
    const onSuccess = (employee) => {
      console.log(employee.data);
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
