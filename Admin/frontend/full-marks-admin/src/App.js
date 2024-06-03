import './App.css';
import Dashboard from './Dashboard/Sidebar';
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
import Updateclasses from './Masterfilters/Classes/Updateclasses';
import Books from './Masterfilters/Books/Books';
import Addbooks from './Masterfilters/Books/Addbooks';
import Sections from './Masterfilters/Sections/Sections';
import Addsections from './Masterfilters/Sections/Addsections';
import Updatesections from './Masterfilters/Sections/Updatesections';
import Units from './Masterfilters/Units/Units';
import AddUnits from './Masterfilters/Units/AddUnits';
import UpdateUnits from './Masterfilters/Units/UpdateUnits';
import Chapters from './Masterfilters/Chapters/Chapters';
import AddChapters from './Masterfilters/Chapters/AddChapters';
import UpdateChapters from './Masterfilters/Chapters/UpdateChapters';
import Topic from './Masterfilters/Topic/Topic';
import AddTopic from './Masterfilters/Topic/AddTopic';
import UpdateTopic from './Masterfilters/Topic/UpdateTopic';


function App() {
  return (
    <div >
      <Header/>
      <Router>
        
        <Routes>
      
          <Route path= '/addschools' element= {<AddSchool/>}></Route>
          <Route path= '/addteachers' element= {<AddTeacher/>}></Route>
          <Route path= '/addstudents' element= {<AddStudent/>}></Route>
          <Route path= '/addbooks' element= {<Addbooks/>}></Route>
          <Route path= '/addsections' element= {<Addsections/>}></Route>
          <Route path= '/sections' element= {<Sections/>}></Route>
          <Route path= '/updatesections' element= {<Updatesections/>}></Route>
          <Route path= '/addunits' element= {<AddUnits/>}></Route>
          <Route path= '/units' element= {<Units/>}></Route>
          <Route path= '/updatechapters' element= {<UpdateChapters/>}></Route>
          <Route path= '/addchapters' element= {<AddChapters/>}></Route>
          <Route path= '/chapters' element= {<Chapters/>}></Route>
          <Route path= '/updatetopics' element= {<UpdateTopic/>}></Route>
          <Route path= '/addtopics' element= {<AddTopic/>}></Route>
          <Route path= '/topics' element= {<Topic/>}></Route>
          <Route path= '/updateunits' element= {<UpdateUnits/>}></Route>
          <Route path= '/schoollist' element= {<SchoolList/>}></Route>
          <Route path= '/teacherlist' element= {<TeacherList/>}></Route>
          <Route path= '/studentlist' element= {<StudentList/>}></Route>
          <Route path= '/books' element= {<Books/>}></Route>
          <Route path = '/addclasses' element = {<Addclasses/>}></Route>
          <Route path= '/classes' element = {<Classes/>}></Route>
          <Route path= '/updateclass/:id' element = {<Updateclasses/>}></Route>



        </Routes>
      </Router>
    </div>
  );
}

export default App;
