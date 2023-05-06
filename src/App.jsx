import { Route, Switch } from 'wouter';
import MenuBar from './components/menuBar/MenuBar.jsx';

function App() {

  return (

    <>
      <MenuBar/>
      
      <Switch>
      	<Route path="/" component={'home'}/>
      	<Route path="/users" component={'users'}/>
      	<Route path="/employees" component={'employees'}/>
      	<Route path="/adopters" component={'adopters'}/>
      </Switch>
    </>
  );
};

export default App;