
import { useParams } from "react-router-dom";
import data from "./data.json";
export default function DogDescription() {
  const params = useParams();
  console.log("Params", params);
  const doggie = data.find((dog) => dog.id === params.id);
  return (
    <div className="dog-information">
      <h1> ABOUT DOG.. </h1>
      <h3> {doggie.Breed} </h3>
      <img alt="Dog" src={doggie.image} width="500" />
      <h3> {doggie.description} </h3>
      <h3> {doggie.Color} </h3>
      <h3> {doggie["Rescued From"]} </h3>
      <h3> {doggie["Life Expectancy"]} </h3>
      <h3> {doggie["Approx Age"]} </h3>
    </div>
  );
}

