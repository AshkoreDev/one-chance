import { Route, Switch } from 'wouter';
import MenuBar from './components/menuBar/MenuBar.jsx';
import Home from './pages/home/Home.jsx';
import Pets from './pages/pets/Pets.jsx';

function App() {

  return (

    <>
      <MenuBar/>
      
      <Switch>
      	<Route path="/" component={Home}/>
      	<Route path="/pets" component={Pets}/>
      	{/*<Route path="/adopters" component={'adopters'}/>
      	<Route path="/employees" component={'employees'}/>
      	<Route path="/users" component={'users'}/>
      	<Route path="/profile" component={'profile'}/>
      	<Route path="/:rest*" component={'ErrorPage'}/>}*/}
      </Switch>
    </>

  );
};

export default App;