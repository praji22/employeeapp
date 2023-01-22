import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Employeeform from './Components/Employeeform';
import Home from './Components/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/employeeform' exact element={<Employeeform/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
