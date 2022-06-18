
import React from 'react'
import { Link } from 'react-router-dom';
import { useLocation} from 'react-router-dom';
import styled from "styled-components";


const Productdiscription = () => {
    // const params = useParams();
    // const discription = section.find((products) => products.id == params.id);
    const location = useLocation();
    const discription = location.state;
    const Name = discription.name;
    const url = discription.imageurl;
    const Price =  discription.price;
  return (
    <DescriptionContainer>
         <img src={url} alt="Product" />
         <Description>
         <h1>{Name}</h1>
         <Div>
         <h2>Description :{''} {discription.descripction}</h2>
         </Div>
         <h1 style={{color:'rgb(14, 126, 224)' }}>₹{Price}</h1>
         <Link to={'/checkout'} state={discription}>
        <button>
          Buy Now
        </button>
        </Link>
         </Description>
    </DescriptionContainer>
  )
}

const DescriptionContainer = styled.div`
width:700px;
display: flex;
margin: 50px;
justify-content: center;
button {
  width: 100%;
  height: 40px;
  border-radius: 5px;
  margin-top: 2rem;
  font-weight: 400;
  letter-spacing: 1.15px;
  background-color: #ffd301;
  color:black;
  border: none;
  outline: none;
  cursor: pointer;
}
`
const Description = styled.div`
margin-left: 50px;
`
const Div = styled.div`
margin-top: 50px;
margin-bottom: 50px;
`



export default Productdiscription;