import './App.css';
import Dashboard from './Dashboard/Dashboard';
import AddSchool from './Users/School/AddSchool';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Dashboard/Header';



function App() {
  return (
    <div className="App">
      <Header/>
      <Dashboard/>
      <AddSchool/>
    </div>
  );
}

export default App;
