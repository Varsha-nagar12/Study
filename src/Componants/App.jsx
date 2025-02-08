import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar" ;
import Home from "./Home" ;
import About from "./About";
import Books from "./Books"
import Login from "./Login";
export default function App()
{ 
    return <>
    <NavBar/>
   

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/books" element={<Books/>}/>

      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<></>}></Route>

    </Routes>
    </>
}
