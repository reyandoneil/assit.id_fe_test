import {
  HeaderContainer,
  CustomButton,
  MessageWrapper,
} from './HeaderElements';
import { useDispatch, useSelector } from 'react-redux';
import {
  modal,
  modalName,
  isMessage,
  message,
} from '../../Store/action/employeAction';
import delay from '../../helper/delay';

function Header() {
  const isMessageReducer = useSelector(
    (state) => state.employeeReducer.isMessage
  );
  const messageReducer = useSelector(
    (state) => state.employeeReducer.message
  );
  const dispatch = useDispatch();
  const openModal = () => {
    dispatch(modal(true));
    dispatch(modalName('addEmployee'));
  };

  if (isMessage) {
    delay(5000).then(() => {
      dispatch(isMessage(false));
      dispatch(message(''));
    });
  }

  return (
    <>
      <HeaderContainer>
        {isMessageReducer && (
          <MessageWrapper>{messageReducer}</MessageWrapper>
        )}
        <CustomButton
          variant="outlined"
          disableRipple
          cn={'addEmployee'}
          onClick={openModal}
        >
          Add employee
        </CustomButton>
      </HeaderContainer>
      ;
    </>
  );
}

export default Header;
