import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllEmployee } from '../../Store/action/employeAction';
import { CardEmployee, Header, Modal } from '../../Components';
import {
  EmployeePageContainer,
  MainContainer,
  LoadingContainer
} from './EmployeePageElements';
import { Container } from '@mui/material';

function EmployeePage() {
  const dispatch = useDispatch();
  const dataEmployee = useSelector(
    (state) => state?.employeeReducer?.dataEmployee
  );

  const reverseDataEmployee = [...dataEmployee].reverse()
  console.log(typeof (reverseDataEmployee), reverseDataEmployee);

  const isLoading = useSelector(
    (state) => state?.employeeReducer?.isLoading
  );

  useEffect(() => {
    dispatch(getAllEmployee());
  }, [dispatch]);

  return (
    <MainContainer>
      <Header />
      <Container>
        <EmployeePageContainer>
          {isLoading ?
            <LoadingContainer>
              <span>loading..</span>
            </LoadingContainer>
            :
            <>
              {reverseDataEmployee.map((employee, i) => {
                return (
                  <CardEmployee
                    nama={employee.nama}
                    provinsi={employee.provinsi}
                    kabupaten={employee.kabupaten}
                    kecamatan={employee.kecamatan}
                    kelurahan={employee.kelurahan}
                    id={employee.id}
                    key={i}
                  />
                );
              })}
            </>
          }
        </EmployeePageContainer>
      </Container>
      <Modal />
    </MainContainer>
  );
}

export default EmployeePage;
