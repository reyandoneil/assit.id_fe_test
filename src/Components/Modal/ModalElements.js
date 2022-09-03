import { styled, Button } from '@mui/material';

export const ModalContainer = styled('div')`
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