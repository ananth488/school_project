
import './App.css';
import Navbar from './Components/Navbar/navbar';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/footer';


function App() {
  return (
    <div className="App">
    <Navbar/>
      <Home/>
      <Footer/> 
    </div>
  );
}

export default App;
