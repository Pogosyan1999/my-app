import './App.css';
import Layouts from './components/layouts/Layouts';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Routes>
       <Route path='/' index element = {<Layouts/>}>
       
       </Route>
    </Routes>
  );
}

export default App;
