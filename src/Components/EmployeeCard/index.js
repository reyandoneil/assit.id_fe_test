import {
  CustomCard,
  TopContent,
  BottomContent,
  TopButtonWrapper,
  ProfileWrapper,
  Avatar,
  Name,
  OutlinedButton,
  Title,
  Content
} from './EmployeCardElements';
import { useDispatch } from 'react-redux';
import { modal, modalName, dataEdit, deleteEmployee } from '../../Store/action/employeAction';
import {firstCapital} from '../../helper'

function EmployeeCard({ nama, id, provinsi, kabupaten, kecamatan, kelurahan }) {
  const dispatch = useDispatch();
  const imageSource = `https://avatars.dicebear.com/api/personas/${id}.svg`
  const deleteEmployeeHandler = (e) => {
    e.preventDefault();
    dispatch(deleteEmployee(id))
  };
  const editEmployee = () => {
    dispatch(dataEdit({
      nama, id, provinsi, kabupaten, kecamatan, kelurahan
    }))
    dispatch(modal(true));
    dispatch(modalName('editEmployee'));
  };
  return (

    <CustomCard>
      <TopContent>
        <TopButtonWrapper>
          <OutlinedButton
            variant="outlined"
            disableRipple
            cn="edit"
            onClick={editEmployee}
          >
            Edit
          </OutlinedButton>
          <OutlinedButton
            variant="outlined"
            disableRipple
            cn="delete"
            onClick={deleteEmployeeHandler}
          >
            Delete
          </OutlinedButton>
        </TopButtonWrapper>
        <ProfileWrapper>
          <Avatar
            src={imageSource}
          />
          <Name>{firstCapital(nama)}</Name>
        </ProfileWrapper>
      </TopContent>
      <BottomContent>
        <Title>Provinsi</Title>
        <Content>{provinsi}</Content>
        <Title>Kabupaten/Kota</Title>
        <Content>{kabupaten}</Content>
        <Title>Kecamatan</Title>
        <Content>{kecamatan}</Content>
        <Title>Kelurahan</Title>
        <Content>{kelurahan}</Content>
      </BottomContent>
    </CustomCard>
  );
}

export default EmployeeCard;
