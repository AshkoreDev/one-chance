import { Route, Switch } from 'wouter';
import MenuBar from './components/menuBar/MenuBar.jsx';
import Home from './pages/home/Home.jsx';
import Pets from './pages/pets/Pets.jsx';
import Adopters from './pages/adopters/Adopters.jsx';
import Employees from './pages/employees/Employees.jsx';

function App() {

  return (

    <>
      <MenuBar/>
      
      <Switch>
      	<Route path="/" component={Home}/>
      	<Route path="/pets" component={Pets}/>
      	<Route path="/adopters" component={Adopters}/>
      	<Route path="/employees" component={Employees}/>
      	{/*<Route path="/users" component={Users}/>*/}
      	{/*<Route path="/profile" component={Settings}/>*/}
      	{/*<Route path="/:rest*" component={ErrorPage}/>*/}
      </Switch>
    </>

  );
};

export default App;