import './App.css';
import AddSchool from './Users/School/AddSchool';
import School from './Users/School/School';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
<<<<<<< HEAD
      <AddStudent/>
=======
      <Router>
        <Routes>

          <Route path= '/schools' element= {<School/>}></Route>
          <Route path= '/addschools' element= {<AddSchool/>}></Route>


        </Routes>
      </Router>
>>>>>>> ea0bef0e734f09ba4aee87ef8701e2681835151f
    </div>
  );
}

export default App;
