import styled from "styled-components";
import React from "react";
import { section } from "./data";
import {  useParams } from "react-router-dom";
// import { section } from "./data";

const Productlisting = () => {
  const params = useParams();
  const product = section.find((item) => item.id == params.id);
  console.log(product);
  return (
    <div>
      <Product> 
      {product.products.map((data)=> {
          return(
              <Productcontainer>
                  <img src={data.imageurl} alt='Category' /> 
                  <h3>{data.name}</h3>
                  <h4>{data.price}</h4>
              </Productcontainer>
          )
      })}
      </Product> 
    </div>
  );
};
const Product = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row;

`
const Productcontainer = styled.div`
width : 200px;
height : 300px;
margin-bottom: 50px;
margin-left:50px;
cursor: pointer;
>img {
    width: 160px;
    height:200px;
}
:hover {
    border-color: red;
   
  }
`
export default Productlisting;
