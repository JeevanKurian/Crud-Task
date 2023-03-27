import React,{useState} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Read from "./Components/Read";
import Create from "./Components/Create";
// import Read from "./Components/Read";
// import Update from "./Components/Update";
const App=()=> {

    return (
      <div className="container">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Read/>}></Route>
          <Route exact path="/create" element={<Create />}></Route>
          {/* <Route path="/read" element={<Read />}></Route>
          <Route path="/update" element={<Update />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
    )
  
}

export default App



