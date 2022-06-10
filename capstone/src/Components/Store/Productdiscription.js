import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { section } from './data';

const Productdiscription = () => {
    const params = useParams();
    const discription = section.find((product) => product.id == params.id);
    // const location = useLocation();
    // const discription = location.state;

  return (
    <div><h1> 
        {discription.products.name}
         </h1></div>
  )
}

export default Productdiscription