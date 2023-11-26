import { GlobalProvider } from "./context/GlobalState";
import { Routes, Route } from "react-router-dom";
import OS from "./components/OS";
import Home from './components/Home'
import About from "./components/About";
import Contact from "./components/Contact";
import Works from './components/Works'
import Skills from './components/Skills'
import { useEffect } from "react";
import Unatsi from './assets/Unatsi.jpg'
import Treasure from './assets/Treasure.jpg'
import MundoCurioso from './assets/mundo-curioso.jpg'
import Countries from './assets/countries.jpg'
import Canal from './assets/CanalYoutube.jpg'
import c from './assets/iconos/c-.png'
import css from './assets/iconos/css.png'
import firebase from './assets/iconos/firebase.png'
import Html from './assets/iconos/html-5.png'
import Js from './assets/iconos/js.png'
import mongo from './assets/iconos/mongodb.png'
import nodo from './assets/iconos/nodo-js.png'
import react from './assets/iconos/react-.png'
import unity from './assets/iconos/unity.png'

function App() {
  useEffect(() => {
    setTimeout(()=>{
      document.querySelector(".carga").style.display = "none";
    },4000)
    const handleLoad = () => {
      setTimeout(()=>{
        document.querySelector(".carga").style.display = "none";
      },1000)
      
    };
    window.addEventListener('load', handleLoad);
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <GlobalProvider>
      <OS />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/works" element={<Works />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </GlobalProvider>
  );
}

export default App;
