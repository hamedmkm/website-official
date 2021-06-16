import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from './components/navbar'
import {Homepage,Detail} from './pages'
import {BrowserRouter,Switch,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
<Navbar/>
<div className="container">
  <BrowserRouter>
  <Switch>
<Route exact path='/'>
<Homepage/>
</Route>

<Route path='/detail/:id'>
<Detail/>
</Route>

  </Switch>
  </BrowserRouter>


</div>
    </div>
  );
}

export default App;
