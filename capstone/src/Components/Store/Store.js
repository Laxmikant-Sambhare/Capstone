import {  Typography } from '@material-ui/core';
import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';




const Store = () => {
    
const section = 
[
    {
        name:"Dog Food",
        imageurl:"https://cdn-icons-png.flaticon.com/512/404/404006.png",
        id:1,
    },
    {
        name:"Dog Toys",
        imageurl:"https://cdn2.iconfinder.com/data/icons/pets-15/100/Fiverr_Pets_Set_Icon_Colour-01-512.png",
        id:2,
    },
    {
        name:"Dog Accessaries",
        imageurl:"https://cdn4.iconfinder.com/data/icons/cute-dog-in-brown-colour/512/DOG_ICONS1-06-512.png",
        id:3,
    },
    {
        name:"Dog Cloths",
        imageurl:"https://cdn0.iconfinder.com/data/icons/simple-pet/100/4-512.png",
        id:4,
    }

]
  return (
    <div style={{backgroundcolor: '#b5aa74'}}>
                <Banner>
                <img src='http://atlbrescue.org/resources/banner1.jpg?timestamp=1346122477510' alt='Category' />
                </Banner>
        
        <Categories> 
            {section.map((data, index) => {
                return(
                    <Link to={'/store/plp'} key={index}>
                        <Catergory key={index} >
                    <img src={data.imageurl} alt='Category' />
                    <Typography  style={{
                    textAlign: 'center',
                    fontSize: 20,
                    fontWeight: 600,
                    color: "black",
                }}>{data.name}</Typography>
                    </Catergory>
                    </Link>
                )
            })}
        </Categories>
    </div>
  )
}

const Banner = styled.div`
box-shadow: 10px;
display: flex;
justify-content: center;
>img {
    width:70%;
}
`

const Categories = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: center;
`
const Catergory = styled.div`
>img {
    margin:50px;
    background-color:#ffd301;
    border-radius: 5%;
    width: 200px;
    height:200px;
    :hover {
        opacity: 0.5;
        width: 230px;
        height:230px;
      }
      cursor: pointer;
}
`


export default Store