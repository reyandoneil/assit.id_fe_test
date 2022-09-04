import { Card, Button, styled } from '@mui/material';
export const TopContent = styled('div')`
  height: 59%;
  width: 100%;

`;
export const BottomContent = styled('div')`
  height: 35%;
  max-width: 100%;
  padding: 10px;
  border-radius: 4px;
  background-color: #d8e6dd;
  display:flex;
  flex-direction:column ;
`;

export const CustomCard = styled(Card)`
  height: 500px;
  width: 300px;
  padding: 10px;
  cursor: pointer;
  :hover {
    opacity: 80%;
  }
`;

export const TopButtonWrapper = styled('div')`
  height: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ProfileWrapper = styled('div')`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  align-items: center;
`;

export const Avatar = styled('img')`
  height: 100px;
  width: 100px;
  margin-bottom: 10px;
  border-radius: 100px;
  background-color: lightyellow;
  object-fit: cover;
`;

export const Name = styled('span')`
  font-size: 1.2rem;
  font-weight: 700;
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

export const Title = styled('span')` 
  color:gray ;
  font-size:0.8rem ;
`

export const Content = styled('span')` 
font-weight: 600 ;
margin-bottom: 5px ;
`
