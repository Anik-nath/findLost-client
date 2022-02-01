import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Navigation from "./Components/Shared/Navigation/Navigation";
import Footer from "./Components/Shared/Footer/Footer";
import ScrollToTop from "react-scroll-to-top";
import LatestAdd from "./Components/Pages/LatestAdd/LatestAdd";
import Login from "./Components/Pages/Login/Login";
import AuthProvider from "./Firebase/Context/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <ScrollToTop smooth />
          <Navigation></Navigation>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/latestadd" element={<LatestAdd></LatestAdd>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
