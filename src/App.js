
import './App.css';
import Navbar from './Components/Navbar/navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Footer from './Components/Footer/footer';
import { BrowserRouter,Routes,Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
<BrowserRouter>
      <Navbar/>
      <Routes>  
      <Route path="/" element={<Home/>}></Route> 
      <Route path="/about" element={<About/>}></Route> 
      </Routes>
  </BrowserRouter>
      <Footer/> 
    </div>
  );
}

export default App;
