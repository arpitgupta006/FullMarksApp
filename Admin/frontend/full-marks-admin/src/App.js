import './App.css';
import Dashboard from './Dashboard/Dashboard';
import AddSchool from './Users/School/AddSchool';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from './Dashboard/Header';
import SchoolList from './Users/School/SchoolList';


import AddTeacher from './Users/Teachers/AddTeacher';
import AddStudent from './Users/Students/AddStudent';




function App() {
  return (
    <div>
      <Header/>
      <Router>
        <Routes>
      
          <Route path= '/addschools' element= {<AddSchool/>}></Route>
          <Route path= '/addteachers' element= {<AddTeacher/>}></Route>
          <Route path= '/addstudents' element= {<AddStudent/>}></Route>
          <Route path= '/schoollist' element= {<SchoolList/>}></Route>






        </Routes>
      </Router>
    </div>
  );
}

export default App;
