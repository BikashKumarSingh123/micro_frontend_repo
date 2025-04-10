
import './App.css';
import ContainerPage from './Components/Containers';
import { Route, Router, Routes } from 'react-router-dom';
import HomePage from 'homepage/HomePage';
import CourseCube from 'coursecube/CourseCube';

function App() {

  return (
    <>
      <div>
          <Router>
            <nav>
              <ul>
                <li>
                  <link href="/" >Home </link>
                </li>
                <li>
                  <link href="/Corces" >Home </link>
                </li>
              </ul>
            </nav>
            <Routes>
              <Route path='/homepage' element={<HomePage />} />
              <Route path='/coursecube' element={<CourseCube />} />
            </Routes>
          </Router>
      </div>
    </>
  );
}
export default App;

