import React, { useState } from "react";
import Header from "./components/Header"
import NavBar from "./components/NavBar";
import Main from "./components/Main"
function App() {
  
  document.body.style = 'background: STEELBLUE;';
  return (
    <div>
     <NavBar/>
     <Header/>
     </div>

  );
}

export default App;
