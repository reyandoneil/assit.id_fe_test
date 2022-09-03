import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllEmployee } from '../../Store/action/employeAction';
import { CardEmployee, Header, Modal } from '../../Components';
import {
  EmployeePageContainer,
  MainContainer,
} from './EmployeePageElements';
import { Container } from '@mui/material';

function EmployeePage() {
  const dispatch = useDispatch();
  const dataEmployee = useSelector(
    (state) => state.employeeReducer.dataEmployee
  );

  useEffect(() => {
    dispatch(getAllEmployee());
  }, [dispatch]);
  return (
    <MainContainer>
      <Header />
      <Container>
        <EmployeePageContainer>
          {dataEmployee.map((employee, i) => {
            return (
              <CardEmployee
                nama={employee.nama}
                id={employee.id}
                key={i}
              />
            );
          })}
        </EmployeePageContainer>
      </Container>
      <Modal />
    </MainContainer>
  );
}

export default EmployeePage;
