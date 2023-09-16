import { Routes, Route } from "react-router-dom"
import {Portfolio} from "./pages/portfolio/Portfolio";
import {Home} from "./pages/home/Home";
import {About} from "./pages/about/About";
import {Navbar} from "./pages/navbar/Navbar";

function App() {
  return (
      <div className="App">
          < Navbar />
        <Routes>
          <Route path="HValokuvaus/" element={ <Home/> } />
          <Route path="HValokuvaus/about" element={ <About/> } />
          <Route path="HValokuvaus/portfolio" element={ <Portfolio/> } />
        </Routes>
      </div>
  )
}

export default App