import UserList from './components/UserList.jsx';
import UserModal from './components/UserModal.jsx';

function Users() {

	return (

		<section className="content">
			{/*<UserList/>*/}
			<UserModal title="Agregar nuevo usuario" create={true}/>
		</section>

	);
};

export default Users;