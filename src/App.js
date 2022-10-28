
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Collection from "./components/Collections/Collection";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/MainPage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import Subscribe from "./components/Subscribe/Subscribe";



const App = () => {
  return (
    
      <BrowserRouter>   
        <div>
          <Navbar/>
          <HomePage/>
          <Collection/>
          <Subscribe/>
          <Footer/>
        </div>
      </BrowserRouter>
    
  );
}

export default App;