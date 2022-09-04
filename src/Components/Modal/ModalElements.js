import { styled, Button } from '@mui/material';

export const ModalContainer = styled('form')`
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 20px;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: max-content;
  width: 400px;
  background-color: white;
`;


export const OutlinedButton = styled(Button)`
width:100% ;
margin-bottom: 30px ;
  ${(props) => {
    if (props.cn === 'edit') {
      return `
        color: #8CA494 ;
        border-color:#8CA494 ;
        :hover{
            color: white ;
            background-color :#C1DCCA ;
            border-color:#8CA494 ;
        }
        `;
    } else if (props.cn === 'delete') {
      return `
        color: #FE6D90 ;
        border-color:#FE6D90 ;
        :hover{
            color: gray ;
            background-color :#FFE9EE ;
            border-color:#FE6D90 ;
        }
        `;
    }
  }}
`;

export const TitleWrapper =styled('div')` 
width:100% ;
height: 60px ;
display: flex;
justify-content: center;
align-items: center ;
font-size: 2rem ;
font-weight: 600 ;
margin-bottom: 20px ;
color:#FE6D90 ;

`