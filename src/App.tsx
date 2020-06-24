import React from 'react';
import { Navbar } from './component/Navbar';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { TodoPage } from './pages/TaskPage';
import { AboutPage } from './pages/AbouPage';

const App: React.FC = () => {

  
  
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route component={TodoPage} path='/react-io' exact />
          <Route component={AboutPage} path='/about' />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
