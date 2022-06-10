import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Adoption from "../Components/Adoption/Adoption";
import Home from "../Components/Home/Home";
import Rescue from "../Components/Rescue/Rescue";
import Signin from "../Components/Signin/Signin";
import Productlisting from "../Components/Store/Productlisting";
import Store from "../Components/Store/Store";
<<<<<<< HEAD
import Booking from "../Components/Veterinary/Booking";
import Veterinary from "../Components/Veterinary/Veterinary"
import {Navbar} from '../Components/Navbar/Navbar'
=======
import Veterinary from "../Components/Veterinary/Veterinary";
import Booking from "../Components/Veterinary/Booking";
>>>>>>> 3ce4ba6ae52d80ed513b9bc9caf5ff85f2313ed9
function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/rescue" element={<Rescue />} />
          <Route exact path="/adoption" element={<Adoption />} />
          <Route exact path="/store" element={<Store />} />
          <Route exact path="/vet" element={<Veterinary />} />
<<<<<<< HEAD
          <Route exact path="/vet/bookings" element={< Booking/>} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/store/:id" element={<Productlisting />} />
=======
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/store/plp" element={<Productlisting />} />
          <Route exact path="/vet/booking" element={<Booking />} />
>>>>>>> 3ce4ba6ae52d80ed513b9bc9caf5ff85f2313ed9
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
