import {
  CustomCard,
  TopContent,
  BottomContent,
  TopButtonWrapper,
  ProfileWrapper,
  Avatar,
  Name,
  OutlinedButton
} from './EmployeCardElements'
import avtr from '../../Assets/avtr.svg'
function index({ nama }) {
  return (
    <>
      <CustomCard>
        <TopContent>
          <TopButtonWrapper>
            <OutlinedButton variant='outlined' disableRipple cn='edit'>Edit</OutlinedButton>
            <OutlinedButton variant='outlined' disableRipple cn='delete'>Delete</OutlinedButton>
          </TopButtonWrapper>
          <ProfileWrapper>
            <Avatar src={avtr} />
            <Name>{nama}</Name>
          </ProfileWrapper>
        </TopContent>
        <BottomContent>
          Bottom
        </BottomContent>
      </CustomCard>
    </>
  );
}

export default index;
