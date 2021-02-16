import logo from './logo.svg';
import PersonList from './GetData';
import {Link,BrowserRouter as Router,Route} from 'react-router-dom'
import './App.css';
import NavBar from './View/NavigationBar'
import Persons from './View/Persons'

function App() {
  return (
    <div className="App">
      <div className="reactLovingColor">
      <NavBar/>
      </div>
      <header className="App-header">
      <Persons/>
      {/* <PersonList /> */}
      </header>
    </div>
  );
}

export default App;
