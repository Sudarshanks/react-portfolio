import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Menu from "./component/Menu"
import About from "./component/About";
import Resume from "./component/Resume";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import Pnf from "./component/Pnf";
import Home from "./component/Home";

function App(props){
  return(
    <BrowserRouter>
      <Menu/>

      <Routes>
        <Route path={`/`} element={<Home/>}/>
        <Route path={`/about`} element={<About/>}/>
        <Route path={`/resume`} element={<Resume/>}/>
        <Route path={`/projects`} element={<Projects/>}/>
        <Route path={`/contact`} element={<Contact/>}/>
        <Route path={`/*`} element={<Pnf/>}/>
      </Routes>
    </BrowserRouter>
    )
}

export default App