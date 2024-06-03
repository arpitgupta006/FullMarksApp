import './App.css';
import Dashboard from './Dashboard/Dashboard';
import AddSchool from './Users/School/AddSchool';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from './Dashboard/Header';
import SchoolList from './Users/School/SchoolList';
import StudentList from './Users/Students/StudentList';
import TeacherList from './Users/Teachers/TeacherList';
import AddTeacher from './Users/Teachers/AddTeacher';
import AddStudent from './Users/Students/AddStudent';
import Classes from './Masterfilters/Classes/Classes';
import Addclasses from './Masterfilters/Classes/Addclasses';
import Sidebar from './Dashboard/Sidebar';
import Updateclasses from './Masterfilters/Classes/Updateclasses';



function App() {
  return (
    <div >
      <Header/>
      <Router>
        
        <Routes>
      
          <Route path= '/addschools' element= {<AddSchool/>}></Route>
          <Route path= '/addteachers' element= {<AddTeacher/>}></Route>
          <Route path= '/addstudents' element= {<AddStudent/>}></Route>
          <Route path= '/schoollist' element= {<SchoolList/>}></Route>
          <Route path = '/addclasses' element = {<Addclasses/>}></Route>
          <Route path= '/classes' element = {<Classes/>}></Route>
          <Route path= '/updateclass/:id' element = {<Updateclasses/>}></Route>



        </Routes>
      </Router>
    </div>
  );
}

export default App;
