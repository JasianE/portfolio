import './styles/App.scss';
import React from 'react'
import Intro from './components/Intro'
import ProjectCardContainer from './components/ProjectCardContainer'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Intro />
      <ProjectCardContainer />
      <Contact />
    </div>
  );
}

export default App;
