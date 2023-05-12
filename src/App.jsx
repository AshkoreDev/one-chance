import { Route, Switch } from 'wouter';
import MenuBar from './components/menuBar/MenuBar.jsx';
import Home from './pages/home/Home.jsx';
import Pets from './pages/pets/Pets.jsx';
import Adopters from './pages/adopters/Adopters.jsx';

function App() {

  return (

    <>
      <MenuBar/>
      
      <Switch>
      	<Route path="/home" component={Home}/>
      	<Route path="/pets" component={Pets}/>
      	<Route path="/adopters" component={Adopters}/>
      	{/*<Route path="/employees" component={'employees'}/>*/}
      	{/*<Route path="/users" component={'users'}/>*/}
      	{/*<Route path="/profile" component={'profile'}/>*/}
      	{/*<Route path="/:rest*" component={'ErrorPage'}/>}}*/}
      </Switch>
    </>

  );
};

export default App;