import React from 'react';
import Header from './components/Header'
import Home from './components/Home';
import Project from './components/project';
import About from './components/About';
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <Project/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
