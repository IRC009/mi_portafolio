import { Globalprovider } from "./context/GlobalState";
import { Routes, Route } from "react-router-dom";
import OS from "./components/OS";
import Home from './components/Home'
import About from "./components/About";
import Contact from "./components/Contact";
import Works from './components/Works'
import { useEffect } from "react";

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
    <Globalprovider>
      <OS />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/works" element={<Works />} />
      </Routes>
    </Globalprovider>
  );
}

export default App;
