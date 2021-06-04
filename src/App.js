import {HashRouter as Router,Route,Switch} from 'react-router-dom';
import Contacts from './Components/contacts/Contacts';
import Header from './Components/layout/Header';
import AddContact from './Components/contacts/AddContact';
import EditContact from './Components/contacts/EditContact';
import About from './Components/Pages/About';
import NotFound from './Components/Pages/NotFound';
import Test from './Components/test/Test';

import {Provider} from './Context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    
    <Provider>
      <Router>
    <div className="App">
      
        <Header branding="Contact Manager" />
        <div className="Container">
          <Switch>

            <Route exact path="/" component={Contacts} />
            <Route exact path="/Contact/add" component={AddContact} />
            <Route exact path="/Contact/edit/:id" component={EditContact} />
            <Route exact path="/about" component={About} />
             <Route exact path ="/test" component={Test} /> 
             <Route component ={NotFound} />
          </Switch>
        
                  
        
          </div>
        
        
      
    </div>
    </Router>
   
    </Provider>
    
  );
}

export default App;
