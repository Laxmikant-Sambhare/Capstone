import React from "react";
import { Link } from "react-router-dom";
import { Services } from "./Data/Services";
import { Text, Maincontainer, Container, Vet } from "./Veterinary.styling";
const Veterinary = () => {
  return (
    <Vet>
      <Container>
        {Services.map((data, index) => {
          return (
            <>
              {data.id === 1 ? (
                <Link
                  to={`/vet/${data.id}`}
                  state={data}
                  style={{ textDecoration: "none" }}
                  key={index}
                >
                  <Maincontainer key={index}>
                    <img src={data.image} alt="" />

                    <Text>
                      {data.service}
                      <br></br>
                      Help Line No: x
                    </Text>
                  </Maincontainer>
                </Link>
              ) : (
                <Link
                  to={`/vet/${data.id}`}
                  state={data}
                  style={{ textDecoration: "none" }}
                  key={index}
                >
                  <Maincontainer key={index}>
                    <img src={data.image} alt="" />

                    <Text>{data.service}</Text>
                  </Maincontainer>
                </Link>
              )}
            </>
          );
        })}
      </Container>
    </Vet>
  );
};

export default Veterinary;
