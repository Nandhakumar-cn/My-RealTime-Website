import React, { useState } from "react";
import Contact from "./Contact";
import Form from "./Home";
import Education from "./Education";
import Save from "./Save";
// import Home from "./Home";
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Footer from "./Footer";
// import { MaterialUISwitch } from "./Switch";
import {AiTwotoneHome} from 'react-icons/ai'
import {BiPaperPlane}from 'react-icons/bi'
import {RiTeamFill}from 'react-icons/ri'
import {IoIosContacts}from 'react-icons/io'
import {AiFillGitlab} from 'react-icons/ai'
import Styled,{ ThemeProvider } from "styled-components";
import { LightTheme,DarkTheme,GlobalStyles} from "./theme";
import { Switch } from "@mui/material";
// import { Checkbox } from "@mui/material";
import "C:/My-React-Project/Real-Time-Website/web/src/App.css" 


const StyledApp= Styled.div`
color:${(props)=>props.theme.fontColor};
`;
 
export default function  Hello(){

 
const [theme,settheme] =useState("light");
const toogletheme= () =>{
  theme === "light" ? settheme("dark") : settheme("light")
}


  return (
  <ThemeProvider theme={theme === 'light'? LightTheme : DarkTheme }>
    <GlobalStyles/>
    <StyledApp>
    
  <div className="Container" id="containall">
    <Router>
   
     

      <nav  class="navbar  bg-info justify-content-center sticky-top" id="navbars">
     
    
    
    
      <div class="container-fluid">
        

            <p class="nav-itam" id="home"><Link to="/" ></Link><AiTwotoneHome/>&nbsp;Home</p>
          <p class="nav-item" ><Link to="/About-Us"><BiPaperPlane/>&nbsp;About-us</Link></p>
          <h1 id="head"><AiFillGitlab id="icon"/>Codenatives-Karur<AiFillGitlab id="icon"/></h1>
          <p class="nav-itam" ><Link to="/Our-Teams" ><RiTeamFill/>&nbsp; Our-Teams</Link></p>
          <p class="nav-itam" ><Link to="/Contact-Us" ><IoIosContacts/>&nbsp;Contact-Us</Link></p>
          <Switch
 
  onChange={toogletheme}
  inputProps={{ 'aria-label': 'controlled' }}></Switch>
</div>

          
          </nav> 
          <br></br>
          

           
      <Routes>
        <Route path="/" element={<Form/>} />
        <Route path="/About-Us" element={<Education/>} />
        <Route path="/Our-Teams" element={<Save/>} />
        <Route path="/Contact-Us" element={<Contact/>} />

      
              
      </Routes>
     


  

    </Router>
    <div>
   
    </div>
    <br></br>
    <br></br>

<Footer />

  </div>
  </StyledApp>
  </ThemeProvider>

  )
}

