import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Adoption from "./Components/Adoption/Adoption";
import Home from "./Components/Home/Home";
import Rescue from "./Components/Rescue/Rescue";
import Store from "./Components/Store/Store";
import Booking from "./Components/Veterinary/Booking";
import Veterinary from "./Components/Veterinary/Veterinary";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/rescue" element={<Rescue />} />
          <Route exact path="/adoption" element={<Adoption />} />
          <Route exact path="/store" element={<Store />} />
          <Route exact path="/vet" element={<Veterinary />} />
          <Route exect path="/Booking" element={<Booking />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
