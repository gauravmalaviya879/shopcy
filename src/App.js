import React, { createContext, useState } from "react";
import Header from "./cmponets/Header";
import { Routes, Route } from "react-router-dom"
import Cart from "./cmponets/Cart";
import Home from "./cmponets/Home";
import './App.css'
import HookstoIntro from "./cmponets/HookstoIntro";
import Other from "./cmponets/Other";


// create context -detaails use usecontext hook (provider )
export const DataContext = createContext()
const App = () => {
  const [user, setUser] = useState("gaurav");


  return (
    <div>
      {/* <DataContext.Provider value={user}>
      <HookstoIntro/>
      <Other/>
      </DataContext.Provider> */}

      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
