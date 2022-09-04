import { Button, styled } from '@mui/material';
import { keyframes } from '@emotion/react';

const slideInLeft = keyframes`
  from {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`;

export const HeaderContainer = styled('div')`
  height: 40px;
  padding: 20px;
  width: 97vw;
  background-color: #8ca494;
  justify-content: space-around;
  position: fixed;
  display: flex;
  flex-direction: row;
  top: 0;
  z-index: 3;
`;
export const CustomButton = styled(Button)`
  right: 10px;
  ${(props) => {
    if (props.cn === 'addEmployee') {
      return `
        color: white ;
        border-color:white ;
        :hover{
            color: white ;
            background-color :#C1DCCA ;
            border-color:#8CA494 ;
        }
        `;
    }
  }}
`;

export const MessageWrapper = styled('div')`
  height: 100%;
  width: 300px;
  background-color: white;
  display: block;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #8ca494;
  animation: ${slideInLeft} 0.2s forwards;
`;
