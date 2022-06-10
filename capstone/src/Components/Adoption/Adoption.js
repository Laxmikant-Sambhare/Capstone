import "./Adoption.css";
import data from "./data.json";
import { Link } from "react-router-dom";
export default function Adoption() {
  const dogInfo = data.map((doggie) => {
    return (
      <div key={doggie.id} className="dog-list">
        <img alt={doggie.Breed} src={doggie.image} width={500} />
        <h3>
          <Link to={`/adoption/${doggie.id}`} state={doggie}>
            
            {doggie.Breed}
          </Link>
        </h3>
        <h3> {doggie.description} </h3>
        <h3> {doggie.Color} </h3>
        <h3> {doggie["Rescued From"]} </h3>
        <h3> {doggie["Life Expectancy"]} </h3>
        <h3> {doggie["Approx Age"]} </h3>
      </div>
    );
  });
  return <div className="dog-container">{dogInfo}</div>;
}

