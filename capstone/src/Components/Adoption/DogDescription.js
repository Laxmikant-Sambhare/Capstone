import { useParams } from "react-router-dom";
import data from "./data.json";
import React from "react";
export default function DogDescription() {
  const params = useParams();
  console.log("Params", params);
  const doggie = data.find((dog) => dog.id === params.id);
  return (
    <div className="dog-information">
      <h1> ABOUT DOG.. </h1>
      <h3>
        {" "}
        <em> Breed: </em> {doggie.Breed}{" "}
      </h3>
      <img alt="Dog" src={doggie.image} width="300" />
      <h3>
        {" "}
        <em> Description:</em> {doggie.description}{" "}
      </h3>
      <h3>
        {" "}
        <em>Color:</em> {doggie.Color}{" "}
      </h3>
      <h3>
        <em>Rescued From:</em> {doggie["Rescued From"]}{" "}
      </h3>
      <h3>
        {" "}
        <em>Life Expectancy:</em> {doggie["Life Expectancy"]}{" "}
      </h3>
      <h3>
        {" "}
        <em> Approx Age:</em> {doggie["Approx Age"]}{" "}
      </h3>
    </div>
  );
}
