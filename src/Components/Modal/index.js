import {
  Modal,
  TextField,
  Autocomplete,
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  ModalContainer,
  OutlinedButton,
  TitleWrapper,
  DelateModalContainer,
  WarningMessage,
  Name,
} from './ModalElements';
import {
  modal,
  modalName,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} from '../../Store/action/employeAction';
import {
  getProvinsi,
  getKota,
  getKecamatan,
  getKelurahan,
} from '../../Store/action/othApi';
import { useEffect, useState } from 'react';

function ModalComponent() {
  const dispatch = useDispatch();
  const employeeInitialState = {
    nama: '',
    provinsi: '',
    kabupaten: '',
    kecamatan: '',
    kelurahan: '',
  };

  const [addEmployeeValue, setAddEmployeeValue] = useState(
    employeeInitialState
  );

  const isModal = useSelector(
    (state) => state.employeeReducer.isModal
  );

  const name = useSelector(
    (state) => state.employeeReducer.modalName
  );

  const provinsi = useSelector((state) => state?.oth?.dataProvinsi);
  const kota_kabupaten = useSelector(
    (state) => state?.oth?.dataKota_kabupaten
  );
  const kecamatan = useSelector((state) => state?.oth?.dataKecamatan);
  const kelurahan = useSelector((state) => state?.oth.dataKelurahan);
  const dataEdit = useSelector(
    (state) => state?.employeeReducer?.dataEditEmployee
  );
  const [kota, setKota] = useState(0);

  const [edit, setEdit] = useState();

  useEffect(() => {
    setEdit(dataEdit);
  }, [dataEdit]);

  useEffect(() => {
    dispatch(getProvinsi());
    dispatch(getKota(kota));
  }, [dispatch, kota]);

  const provinsiChangeHandler = (e, value) => {
    setKota(value.id);
    setAddEmployeeValue({
      ...addEmployeeValue,
      provinsi: value.nama,
    });
  };

  const kota_kabupatenChangeHandler = (e, value) => {
    dispatch(getKecamatan(value.props.id));
    setAddEmployeeValue({
      ...addEmployeeValue,
      kabupaten: value.props.value,
    });
  };

  const kecamatanChangeHandler = (e, value) => {
    dispatch(getKelurahan(value.props.id));
    setAddEmployeeValue({
      ...addEmployeeValue,
      kecamatan: value.props.value,
    });
  };

  const kelurahanChangeHandler = (e, value) => {
    setAddEmployeeValue({
      ...addEmployeeValue,
      kelurahan: value.props.value,
    });
  };

  const onChangeHandler = (e) => {
    const { value } = e.target;
    setAddEmployeeValue({ ...addEmployeeValue, nama: value });
  };

  const editProvinsiChangeHandler = (e, value) => {
    setKota(value.id);
    setEdit({ ...edit, provinsi: value.nama });
  };

  const editKota_kabupatenChangeHandler = (e, value) => {
    dispatch(getKecamatan(value.props.id));
    setEdit({ ...edit, kabupaten: value.props.value });
  };

  const editKecamatanChangeHandler = (e, value) => {
    dispatch(getKelurahan(value.props.id));
    setEdit({ ...edit, kecamatan: value.props.value });
  };

  const editKelurahanChangeHandler = (e, value) => {
    setEdit({ ...edit, kelurahan: value.props.value });
  };

  const editOnChangeHandler = (e) => {
    const { value } = e.target;
    setEdit({ ...edit, nama: value });
  };

  const closeModal = () => {
    dispatch(modal(false));
    dispatch(modalName(''));
  };

  const createEmployeeHandler = (e) => {
    e.preventDefault();
    dispatch(addEmployee(addEmployeeValue));
    setAddEmployeeValue(employeeInitialState);
    dispatch(modal(false));
  };

  const editEmployeeHandler = (e) => {
    e.preventDefault();
    dispatch(updateEmployee(edit));
    dispatch(modal(false));
  };

  const delateEmployeeById = (e) => {
    e.preventDefault();
    dispatch(modal(false));
    dispatch(deleteEmployee(dataEdit.id));
  };

  switch (name) {
    case 'delateEmployee':
      return (
        <Modal open={isModal} onClose={closeModal}>
          <DelateModalContainer>
            <WarningMessage>
              Are you sure that you want to permanently remove
              <Name> {dataEdit.nama} </Name> from database??
            </WarningMessage>
            <OutlinedButton
              variant="outlined"
              disableRipple
              cn="delete"
              type="submit"
              onClick={delateEmployeeById}
            >
              Ok
            </OutlinedButton>
          </DelateModalContainer>
        </Modal>
      );
    case 'addEmployee':
      return (
        <>
          <Modal open={isModal} onClose={closeModal}>
            <ModalContainer
              className={'form_Add'}
              onSubmit={createEmployeeHandler}
              autoComplete="off"
            >
              <TitleWrapper>Add Employee</TitleWrapper>
              <TextField
                fullWidth
                id="nama"
                label="nama"
                // value={addEmployeeValue.nama}
                variant="outlined"
                onChange={onChangeHandler}
                style={{ marginBottom: '30px' }}
                required={true}
              />
              <Autocomplete
                id="provinsi"
                fullWidth
                style={{ marginBottom: '30px' }}
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
                      label="provinsi"
                      variant="outlined"
                      required
                    />
                  );
                }}
              />
              <FormControl fullWidth>
                <InputLabel id="kota_kabupaten">
                  Kota/Kabupaten
                </InputLabel>
                <Select
                  labelId="kota_kabupaten"
                  id="kota_kabupaten"
                  style={{ marginBottom: '30px' }}
                  input={<OutlinedInput label="Kota/Kabupaten" />}
                  onChange={kota_kabupatenChangeHandler}
                  value={addEmployeeValue.kabupaten}
                  required
                >
                  {kota_kabupaten.map((data) => (
                    <MenuItem
                      key={data.id}
                      value={data.nama}
                      id={data.id}
                    >
                      {data.nama}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id="kecamatan">Kecamatan</InputLabel>
                <Select
                  labelId="kecamatan"
                  id="kecamatan"
                  style={{ marginBottom: '30px' }}
                  input={<OutlinedInput label="kecamatan" />}
                  onChange={kecamatanChangeHandler}
                  value={addEmployeeValue.kecamatan}
                  required
                  // MenuProps={MenuProps}
                >
                  {kecamatan.map((data) => (
                    <MenuItem
                      key={data.id}
                      value={data.nama}
                      id={data.id}
                    >
                      {data.nama}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id="kelurahan">Kelurahan</InputLabel>
                <Select
                  labelId="kelurahan"
                  id="kelurahan"
                  style={{ marginBottom: '30px' }}
                  input={<OutlinedInput label="kelurahan" />}
                  onChange={kelurahanChangeHandler}
                  value={addEmployeeValue.kelurahan}
                  required
                  // MenuProps={MenuProps}
                >
                  {kelurahan.map((data) => (
                    <MenuItem
                      key={data.id}
                      value={data.nama}
                      id={data.id}
                    >
                      {data.nama}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <OutlinedButton
                variant="outlined"
                disableRipple
                cn="edit"
                type="submit"
              >
                Submit
              </OutlinedButton>
            </ModalContainer>
          </Modal>
        </>
      );

    case 'editEmployee':
      return (
        <>
          <Modal open={isModal} onClose={closeModal}>
            <ModalContainer
              className="editModal"
              onSubmit={editEmployeeHandler}
              autoComplete="off"
            >
              <TitleWrapper>Edit Data Employee</TitleWrapper>
              <TextField
                fullWidth
                id="nama"
                label="nama"
                defaultValue={dataEdit.nama}
                variant="outlined"
                onChange={editOnChangeHandler}
                style={{ marginBottom: '30px' }}
              />
              <Autocomplete
                id="provinsi"
                fullWidth
                style={{ marginBottom: '30px' }}
                options={provinsi}
                defaultValue={{ nama: dataEdit.provinsi }}
                isOptionEqualToValue={(option, value) =>
                  option.nama === value.nama
                }
                getOptionLabel={(option) => option.nama}
                onChange={editProvinsiChangeHandler}
                renderInput={(params) => {
                  return (
                    <TextField
                      {...params}
                      label="provinsi"
                      variant="outlined"
                    />
                  );
                }}
              />
              <FormControl fullWidth>
                <InputLabel id="kota_kabupaten">
                  Kota/Kabupaten
                </InputLabel>
                <Select
                  labelId="kota_kabupaten"
                  id="kota_kabupaten"
                  style={{ marginBottom: '30px' }}
                  input={<OutlinedInput label="Kota/Kabupaten" />}
                  onChange={editKota_kabupatenChangeHandler}
                  defaultValue=""
                  // value={edit?.kabupaten?.length ? edit?.kabupaten : ''}
                  // MenuProps={MenuProps}
                >
                  {kota_kabupaten.map((data) => (
                    <MenuItem
                      key={data.id}
                      value={data.nama}
                      id={data.id}
                    >
                      {data.nama}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id="kecamatan">Kecamatan</InputLabel>
                <Select
                  labelId="kecamatan"
                  id="kecamatan"
                  style={{ marginBottom: '30px' }}
                  input={<OutlinedInput label="kecamatan" />}
                  onChange={editKecamatanChangeHandler}
                  defaultValue=""
                  // value={""}
                >
                  {kecamatan.map((data) => (
                    <MenuItem
                      key={data.id}
                      value={data.nama}
                      id={data.id}
                    >
                      {data.nama}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id="kelurahan">Kelurahan</InputLabel>
                <Select
                  labelId="kelurahan"
                  id="kelurahan"
                  style={{ marginBottom: '30px' }}
                  input={<OutlinedInput label="kelurahan" />}
                  onChange={editKelurahanChangeHandler}
                  defaultValue=""
                  // value={""}
                  // MenuProps={MenuProps}
                >
                  {kelurahan.map((data) => (
                    <MenuItem
                      key={data.id}
                      value={data.nama}
                      id={data.id}
                    >
                      {data.nama}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <OutlinedButton
                variant="outlined"
                disableRipple
                cn="edit"
                type="submit"
              >
                Save
              </OutlinedButton>
            </ModalContainer>
          </Modal>
        </>
      );
    default:
      <></>;
  }
}

export default ModalComponent;
