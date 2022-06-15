import styled from "styled-components";
import React, { useState } from "react";
import { section } from "./data";
import { Link, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/counter/cartSlice";

const Productlisting = () => {
  const params = useParams();
  const product = section.find((item) => item.id == params.id);
  const [isActive, setIsActive] = useState(false);
  const dispatch =  useDispatch();
  const handleAddToCart = (data) => {
    dispatch(addToCart(data));
    console.log("hi")
  };
  console.log(product);
  return (
    <div>
      <h1 style={{textalign: 'center', padding: "10px"}}>{product.name}</h1>
      <Dropdown>
        <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
          <h2> Sorted by ⏷ </h2>
        </div>
        {isActive && (
          <Dropdowncontent>
            <h2>Price</h2>
            <hr />
            <div className="dropdown-item">
              <h2>High to Low </h2>
            </div>
            <div className="dropdown-item">
              <h2>Low to High </h2>
            </div>
          </Dropdowncontent>
        )}
      </Dropdown>
      
      <Product>
        {product.products.map((data,index) => {
          return (
            <>
            <Link to={`/store/${product.id}/${data.id}`} state={data} key={index}>
            <Productcontainer>
              <img src={data.imageurl} alt="Category" />
              <h3>{data.name}</h3>
              <h4>{data.price}</h4>
            </Productcontainer>
            </Link>
            <Button onClick={() => handleAddToCart(data) }>Add to Cart</Button>
            </>
          );
        })}
        
      </Product>
    </div>
  );
};

const Dropdown = styled.div`
  width: 110px;
  background-color: #ffd301;
  cursor: pointer;
  margin: 10px;
  padding: 10px;
`;
const Dropdowncontent = styled.div`
  position: absolute;
  background-color: #ffd301;
  padding: 10px;
`;
const Product = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;
const Productcontainer = styled.div`
  width: 200px;
  height: 300px;
  margin-bottom: 50px;
  margin-left: 50px;
  cursor: pointer;
  > img {
    width: 160px;
    height: 200px;
  }
  :hover {
    border-color: red;
  }
`;
export default Productlisting;
