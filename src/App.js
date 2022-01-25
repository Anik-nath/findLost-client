import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Navigation from './Components/Shared/Navigation/Navigation';
import Footer from './Components/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navigation></Navigation>
     <Routes>
       <Route path="/" element={<Home></Home>}></Route>
       <Route path="/home" element={<Home></Home>}></Route>
     </Routes>
     <Footer></Footer>
     </BrowserRouter>
    </div>
  );
}

export default App;
