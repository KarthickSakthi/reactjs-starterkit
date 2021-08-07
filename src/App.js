
import './App.css';
import {BrowserRouter as Router,Route,Link,NavLink,Switch} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Joinus from './components/Joinus'
import NotFound from './NotFound'

function App(){
  return (
    <div className="App">
      <Router>
        <h1>Working with React Router</h1>
        <h3>NavLink Example</h3>
        <ul>
           <li>
             <NavLink to='/' exact activeStyle={{color:"red"}}>Home</NavLink>
           </li>
           <li>
           <NavLink to='/about' exact activeStyle={{color:"red"}}>About</NavLink>
           </li>
           <li>
           <NavLink to='/Joinus' exact activeStyle={{color:"red"}}>Joinus</NavLink>
           </li>
         </ul>
        <h3>Link Example</h3>
         <ul>
           <li>
             <Link to='/'>Home</Link>
           </li>
           <li>
             <Link to='/about'>About</Link>
           </li>
           <li>
             <Link to='/Joinus'>Joinus</Link>
           </li>
         </ul>
         <Switch>
         <Route exact path="/" component={Home}/>
          <Route  path="/about" component={About}/>
          <Route  path="/Joinus" component={Joinus}/>
          <Route component={NotFound}></Route>
         </Switch>
          
        
      </Router>
    </div>
  );
}

export default App;
