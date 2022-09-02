import { CardEmployee } from './Components';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { getAllEmployee } from './Store/action/employeAction';
import { useEffect } from 'react';
function App() {
  const dataEmployee = useSelector(
    (state) => state.employeeReducer.dataEmployee
  );
  console.log(dataEmployee);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllEmployee());
  }, []);
  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 8, md: 12 }}
      >
        {dataEmployee.map((employee, i) => {
          console.log(employee.nama);
          return (
            <Grid item xs={2} sm={4} md={4} key={i}>
              <CardEmployee nama={employee.nama} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default App;
