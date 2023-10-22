import { Route, Routes } from "react-router-dom";

import "./App.css";

import Home from "./components/Home";
import Nav from "./components/Nav";
import About from './components/About'

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  );
}

export default App;
