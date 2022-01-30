import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./components/layout/Navbar";
import Header from "./components/layout/header";
import Features from './components/layout/Features';
import Steps from './components/layout/Steps';
import Footer from './components/layout/Footer';

const App = () => {
  return (
    <div>
      <NavbarComp />
      <Header/>
      <Features />
      <Steps/>

      <Footer/>
    </div>
  );
};

export default App;
