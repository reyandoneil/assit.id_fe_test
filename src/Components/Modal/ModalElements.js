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
  width: 100%;
  margin-bottom: 30px;
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

export const TitleWrapper = styled('div')`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: #fe6d90;
`;

export const DelateModalContainer = styled('div')`
  background-color: white;
  height: 150px;
  width: 350px;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 20px;
`;

export const WarningMessage = styled('span')`
  height: 50%;
  width: 100%;
  font-size: 1.1rem;
  margin-bottom: 30px;
`;

export const Name = styled('span')`
  font-size: 1.1rem;
  font-weight: 700;
  
`
