import {
  CustomCard,
  TopContent,
  BottomContent,
  TopButtonWrapper,
  ProfileWrapper,
  Avatar,
  Name,
  OutlinedButton,
} from './EmployeCardElements';
import { useDispatch } from 'react-redux';
import { modal, modalName } from '../../Store/action/employeAction';

function EmployeeCard({ nama, id }) {
  const dispatch = useDispatch();
  const deleteEmployee = () => {};
  const editEmployee = () => {
    dispatch(modal(true));
    dispatch(modalName('editEmployee'));
  };
  return (
    <>
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
              onClick={deleteEmployee}
            >
              Delete
            </OutlinedButton>
          </TopButtonWrapper>
          <ProfileWrapper>
            <Avatar
              src={`https://avatars.dicebear.com/api/personas/${id}.svg`}
            />
            <Name>{nama}</Name>
          </ProfileWrapper>
        </TopContent>
        <BottomContent>Bottom</BottomContent>
      </CustomCard>
    </>
  );
}

export default EmployeeCard;
