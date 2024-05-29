import './App.css';
import AddSchool from './Users/School/AddSchool';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddTeacher from './Users/Teachers/AddTeacher';
import AddStudent from './Users/Students/AddStudent';


function App() {
  return (
    <div>
      
      <Router>
        <Routes>

          <Route path= '/addschools' element= {<AddSchool/>}></Route>
          <Route path= '/addteachers' element= {<AddTeacher/>}></Route>
          <Route path= '/addstudents' element= {<AddStudent/>}></Route>




        </Routes>
      </Router>
    </div>
  );
}

export default App;
