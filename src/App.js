import './App.css';
import Sidenavbar from './components/Sidenavbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import JobRoles from './pages/JobRoles';
import JobSectors from './pages/JobSectors';
import JobSkills from './pages/JobSkills';
import Home from './pages/Home';
import Questions from './pages/Questions';
import Header from './components/Header';


function App() {
  return (
    <BrowserRouter>
      <Header />
       <Sidenavbar>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/jobroles" element={<JobRoles/>}/>
            <Route path="/jobsectors" element={<JobSectors/>}/>
            <Route path="/jobskills" element={<JobSkills/>}/>
            <Route path="/questions" element={<Questions/>}/>
          </Routes>
        </Sidenavbar>
       
     
    </BrowserRouter>
  );
}

export default App;
