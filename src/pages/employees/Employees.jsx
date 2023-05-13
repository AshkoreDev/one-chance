import EmployeeList from './components/EmployeeList.jsx';
import EmployeeModal from './components/EmployeeModal.jsx';


function Employees() {

	return (

		<section className="content">
			{/*<EmployeeList/>*/}
			<EmployeeModal title="Agregar nuevo empleado" create={true}/>
		</section>

	);
};

export default Employees;