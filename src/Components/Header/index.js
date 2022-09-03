import { HeaderContainer, CustomButton } from './HeaderElements';
import { useDispatch } from 'react-redux';
import { modal, modalName } from '../../Store/action/employeAction';

function Header() {
  const dispatch = useDispatch();
  const openModal = () => {
    dispatch(modal(true));
    dispatch(modalName('addEmployee'));
  };
  return (
    <>
      <HeaderContainer>
        <CustomButton onClick={openModal}>Add employee</CustomButton>
      </HeaderContainer>
      ;
    </>
  );
}

export default Header;
