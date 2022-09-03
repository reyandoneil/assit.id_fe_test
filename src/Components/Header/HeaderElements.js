import { Button, styled } from '@mui/material';

export const HeaderContainer = styled('div')`
  height: 40px;
  padding: 20px;
  width: 100%;
  background-color: #8ca494;
  position: fixed;
  top: 0;
  z-index: 3;
`;
export const CustomButton = styled(Button)`

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


