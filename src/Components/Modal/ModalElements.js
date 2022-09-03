import { styled } from '@mui/material';

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
