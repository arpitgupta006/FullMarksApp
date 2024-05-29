import './App.css';
import AddSchool from './Users/School/AddSchool';
import School from './Users/School/School';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>

          <Route path= '/schools' element= {<School/>}></Route>
          <Route path= '/addschools' element= {<AddSchool/>}></Route>


        </Routes>
      </Router>
    </div>
  );
}

export default App;
