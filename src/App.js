import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Cars from './components/car_list/car-list';
import CarAdd from './components/car_form/car-add';
import CarEdit from './components/car_form/car-edit';

function App() {
  return (
    <Router>
      <div>
        <Switch>
            <Route exact path='/' render={() => <Redirect to='/cars'/>} />
            <Route exact path='/cars' component={Cars}/>
            <Route exact path='/cars/new' component={CarAdd}/>
            <Route exact path='/cars/edit/:id' component={CarEdit}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
