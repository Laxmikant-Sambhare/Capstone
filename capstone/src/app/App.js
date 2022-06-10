import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Adoption from "../Components/Adoption/Adoption";
import Home from "../Components/Home/Home";
import Rescue from "../Components/Rescue/Rescue";
import Productlisting from "../Components/Store/Productlisting";
import Store from "../Components/Store/Store";
import Veterinary from "../Components/Veterinary/Veterinary";
import Booking from "../Components/Veterinary/Booking";
import { Navbar } from "../Components/Navbar/Navbar";
import DogDescription from "../Components/Adoption/DogDescription";
import ConfirmBooking from "../Components/Veterinary/ConfirmBooking";
import Productdiscription from "../Components/Store/Productdiscription";
import Signup from "../Components/Signup/Signup";
import Login from "../Components/Signup/Login";
function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/rescue" element={<Rescue />} />
          <Route exact path="/adoption" element={<Adoption />} />
          <Route exact path="/adoption/:id" element={<DogDescription />} />

          <Route exact path="/store" element={<Store />} />
          <Route exact path="/store/:id" element={<Productlisting />} />
          <Route
            exact
            path="/store/:id/:tag"
            element={<Productdiscription />}
          />
          <Route exact path="/vet" element={<Veterinary />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/store/:id" element={<Productlisting />} />
          <Route exact path="/vet/:id" element={<Booking />} />
          <Route exact path="/confirmBooking" element={<ConfirmBooking />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
