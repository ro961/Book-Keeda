
import './App.css';
import Home from './screens/home'
import Abt from './screens/Abt'
import {Routes,Route} from 'react-router-dom';
import Header from './Components/Header';


function App() {
  <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path = "/About" element={<Abt/>}/>
      </Routes>
  return (
    <div>
      <Header/>
      <Home/>

    </div>
  );
}

export default App;
