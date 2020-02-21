import React, { useState } from "react";
import Header from "./components/Header"
import NavBar from "./components/NavBar";
import Main from "./components/Main";

import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab,  } from '@fortawesome/free-brands-svg-icons'
import {faLocationArrow, faEnvelope, faPhoneAlt, } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faLocationArrow, faEnvelope, faPhoneAlt, )
function App() {
  
  document.body.style = 'background: LIGHTSTEELBLUE;';
  return (
    <div>
     <NavBar/>
     <Header/>
     <Main/>
     
     </div>

  );
}

export default App;
