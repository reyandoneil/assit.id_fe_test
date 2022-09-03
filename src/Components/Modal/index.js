import { Modal, TextField, Autocomplete } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { ModalContainer } from './ModalElements';
import { modal, modalName } from '../../Store/action/employeAction';
import { getProvinsi, getKota } from '../../Store/action/othApi';
import { useEffect } from 'react';
import { useState } from 'react';

function ModalComponent() {
  const dispatch = useDispatch();

  const isModal = useSelector(
    (state) => state.employeeReducer.isModal
  );

  const name = useSelector(
    (state) => state.employeeReducer.modalName
  );

  const provinsi = useSelector((state) => state.oth.dataProvinsi);

  const [kota, setKota] = useState(0);

  useEffect(() => {
    dispatch(getProvinsi());
    dispatch(getKota(kota));
  }, [dispatch, kota]);

  const provinsiChangeHandler = (e, value) => {
    setKota(value.id);
  };

  const closeModal = () => {
    dispatch(modal(false));
    dispatch(modalName(''));
  };
  console.log(kota, '<--di komponen');
  switch (name) {
    case 'addEmployee':
      return (
        <>
          <Modal open={isModal} onClose={closeModal}>
            <ModalContainer>
              <TextField
                fullWidth
                freeSolo
                name="nama"
                label="nama"
                variant="outlined"
                style={{ marginBottom: '30px' }}
              />
              <Autocomplete
                fullWidth
                options={provinsi}
                isOptionEqualToValue={(option, value) =>
                  option.id === value.id
                }
                getOptionLabel={(option) => option.nama}
                onChange={provinsiChangeHandler}
                renderInput={(params) => {
                  return (
                    <TextField
                      {...params}
                      name="provinsi"
                      label="provinsi"
                      variant="outlined"
                    />
                  );
                }}
              />
            </ModalContainer>
          </Modal>
        </>
      );

    case 'editEmployee':
      return (
        <>
          <Modal open={isModal} onClose={closeModal}>
            <ModalContainer>
              <TextField
                name="edit"
                label="edit"
                variant="outlined"
              />
            </ModalContainer>
          </Modal>
        </>
      );

    default:
      <></>;
  }
}

export default ModalComponent;
