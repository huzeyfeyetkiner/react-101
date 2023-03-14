import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Challenge from './components/Challenge';
import AccordionPage from './pages/AccordionPage';
function App() {
  return (
    <div className="App">

    <Routes>
      <Route path='/' element={ <MainLayout /> } > 
        <Route path='/' element={ <AccordionPage /> } />       
        <Route path='/challenge' element={ <Challenge /> } />       
      </Route>
    </Routes>



      
    </div>
  );
}

export default App;
