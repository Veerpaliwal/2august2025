
//1. import area
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import './App.css'
import Layout from "./components/layouts/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";



//2. function definaction area
function App() {

  //2.1 hook variable / state variable
  
  //2.2 function defanction area

  //2.3 return statement area

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="blogs" element={<Blogs/>}/>
            <Route path="contact" element={<Contact />} />
          </Route>
           <Route path="*" element={<NoPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

//3. export area
// name export
// dafult area
export default App
