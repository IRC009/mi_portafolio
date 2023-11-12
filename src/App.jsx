import { Globalprovider } from "./context/GlobalState";
import { Routes, Route } from "react-router-dom";
import OS from "./components/OS";
import About from "./components/About";
import { useEffect } from "react";

function App() {
  useEffect(() => {
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
          <Route path="/about" element={<About />} />
        </Routes>
    </Globalprovider>
  );
}

export default App;
