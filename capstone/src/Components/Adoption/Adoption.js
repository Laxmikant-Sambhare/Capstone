import "./Adoption.css";
import data from "./data.json";
import { Link } from "react-router-dom";
export default function Adoption() {
  const dogInfo = data.map((doggie) => {
    return (
      <div key={doggie.id} className="dog-list">
       <Link to={`/adoption/${doggie.id}`} state={doggie}>
        <img alt={doggie.Breed} src={doggie.image} width={500} />
        <h3>
           <em> Breed:</em> 
            {doggie.Breed}
        </h3>
        <h3> <em> Description: </em>
         {doggie.description} </h3>
        <h3> <em> Color:</em>
         {doggie.Color} </h3>
        <h3> <em>Rescued From: </em>
         {doggie["Rescued From"]} </h3>
        <h3> <em>Life Expectancy: </em>
         {doggie["Life Expectancy"]} </h3>
        <h3> <em> Approx Age:</em> {doggie["Approx Age"]} </h3>
        </Link>
      </div>
    );
  });
  return <div className="dog-container">{dogInfo}</div>;
}

