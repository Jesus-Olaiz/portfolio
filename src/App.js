
import './App.css';
import Cover from './components/Cover';

import Hero from './components/Hero.js'
import Nav from './components/Nav'
import Storyboard from './components/Storyboard';
import Toolkit from './components/Toolkit';

function App() {
  return (
    <div className="App">
    <Nav />
    <Hero />
    <Toolkit />
    <Storyboard />
    <Cover />
      
    </div>
  );
}

export default App;
