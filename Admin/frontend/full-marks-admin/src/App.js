import './App.css';
import Dashboard from './Dashboard/Dashboard';
import AddSchool from './Users/School/AddSchool';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import Header from './Dashboard/Header';

=======
import AddTeacher from './Users/Teachers/AddTeacher';
import AddStudent from './Users/Students/AddStudent';
>>>>>>> dc5b3b6b96fd09f6d459687c73cc452ef1d986e7


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
