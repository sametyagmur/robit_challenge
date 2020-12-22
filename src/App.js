import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Main from "./components/Main/Main";
import Platform from "./components/Platform/Platform";
import Footer from "./components/Footer/Footer";
import './App.css';


function App() {
  return (
    <div className="App">
 <Navbar />
 <Banner />
 <Main />
 <Platform />
 <Footer />
    </div>
  );
}

export default App;
