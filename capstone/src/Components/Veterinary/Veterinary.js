import React from "react";
import { Link } from "react-router-dom";
import { Services } from "./Data/Services";
import { Text, Container, Containers, MobileVet } from "./Veterinary.styling";
const Veterinary = () => {
  return (
    <MobileVet>
      <Containers>
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
                  <Container key={index}>
                    <img src={data.image} alt="" />

                    <Text>
                      {data.service}
                      <br></br>
                      Help Line No: x
                    </Text>
                  </Container>
                </Link>
              ) : (
                <Link
                  to={`/vet/${data.id}`}
                  state={data}
                  style={{ textDecoration: "none" }}
                  key={index}
                >
                  <Container key={index}>
                    <img src={data.image} alt="" />

                    <Text>{data.service}</Text>
                  </Container>
                </Link>
              )}
            </>
          );
        })}
      </Containers>
    </MobileVet>
  );
};

export default Veterinary;
