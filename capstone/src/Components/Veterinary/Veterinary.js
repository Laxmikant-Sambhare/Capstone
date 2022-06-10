import React from "react";
import { useNavigate } from "react-router-dom";
import { Services } from "./Data/Services";
import {
  Text,
  Container,
  Containers,
  MobileVet,
  Header,
} from "./Veterinary.styling";
const Veterinary = () => {
  const navigate = useNavigate();
  return (
    <MobileVet>
      <Header>Header</Header>
      <Containers>
        {Services.map((data, index) => {
          return (
            <>
              {data.id === 1 ? (
<<<<<<< HEAD
                <Container onClick={(e) => navigate("/vet/bookings")}>
=======
                <Container onClick={(e) => navigate("/vet/booking")}>
>>>>>>> 3ce4ba6ae52d80ed513b9bc9caf5ff85f2313ed9
                  <img src={data.image} alt="" />
                  <Text>
                    {data.service}
                    <br></br>
                    Help Line No: x
                  </Text>
                </Container>
              ) : (
<<<<<<< HEAD
                <Container onClick={(e) => navigate("/vet/bookings")}>
=======
                <Container onClick={(e) => navigate("/vet/booking")}>
>>>>>>> 3ce4ba6ae52d80ed513b9bc9caf5ff85f2313ed9
                  <img src={data.image} alt="" />
                  <Text>{data.service}</Text>
                </Container>
              )}
            </>
          );
        })}
      </Containers>
    </MobileVet>
  );
};

export default Veterinary;
