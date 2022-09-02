import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllEmployee } from '../../Store/action/employeAction'
import { CardEmployee } from '../../Components'
import { EmployeePageContainer } from './EmployeePageElements'
import { Container } from '@mui/material'

function EmployeePage() {
    const dispatch = useDispatch()
    const dataEmployee = useSelector((state) => state.employeeReducer.dataEmployee)

    useEffect(() => {
        dispatch(getAllEmployee())
    }, [dispatch])
    return (
        <Container>
            <EmployeePageContainer>
                {dataEmployee.map((employee, i) => {
                    return (
                        <CardEmployee
                            nama={employee.nama}
                            key={i}
                        />
                    )
                })}
            </EmployeePageContainer>
        </Container>
    )
}

export default EmployeePage