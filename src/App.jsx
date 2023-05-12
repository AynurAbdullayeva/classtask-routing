
import Navbar from "./Components/Navbar/Navbar"
import { BrowserRouter } from "react-router-dom";
import Drivers from "./Pages/Drivers"
import Favorites from "./Pages/Favorites"
import {Route, Routes} from "react-router-dom"

function App() {
 

  return (
    <>
    <Navbar/>
    
    <Routes>
   <Route path="/" element={<Drivers/>}/>
   <Route path="/favorites" element={<Favorites/>}/>
    </Routes>
   </> 
  );
}

export default App
