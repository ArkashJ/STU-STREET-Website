import React from 'react';
import Header from './components/Header';
import LandingPage from "./components/LandingPage";
import Values from "./components/Values";
import Podcasts from "./components/Podcasts";
import About from "./components/About";
import Logos from "./components/Logos";


const App = () => {
  return (
    <main class="box-border">
      <Header/> 
      <LandingPage/>
      <Logos/>
      <Podcasts/>
      <Values />
      <About/>
    </main>
  )
}

export default App