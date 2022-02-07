import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './components/Home'
import About from './components/About';
import Posts from './components/Posts';
import Currencyconvertor from './components/Currencyconvertor';
import ButtonParent from './components/PostButton';
import TableChild from './components/PostTable';
import PostButton from './components/PostButton';
import PostTable from './components/PostTable';
import PostDetail from './components/PostDetail';

function App() {
  return (
    <Router>
      <div className="App">
        App Component DImple
      <NavBar/>
      <br></br>
      <br></br>
      <p>Currency Convertor</p>
      <Currencyconvertor/>
      
      <Switch>
        <Route exact path="/about" component={About}></Route>
        
        <Route exact path="/" component={PostButton}></Route>
        <Route exact path="/posts" component={PostTable}></Route>

        <Route exact path="/posts/:id" component={PostDetail}></Route>
      </Switch>
    </div>
    </Router>
    
  );
}

export default App;
