import { Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { section } from "./data";

const Store = () => {
  return (
    <div style={{ backgroundcolor: "#b5aa74" }}>
      <Banner>
        <img
          src="http://atlbrescue.org/resources/banner1.jpg?timestamp=1346122477510"
          alt="Category"
        />
      </Banner>

      <Categories>
        {section.map((data, index) => {
          return (
            <Link to={`/store/${data.id}`} state={data} key={index}>
              <Catergory>
                <img src={data.imageurl} alt="Category" />
                <Typography
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: 600,
                    color: "black",
                  }}
                >
                  {data.name}
                </Typography>
              </Catergory>
            </Link>
          );
        })}
      </Categories>
    </div>
  );
};

const Banner = styled.div`
  display: flex;
  justify-content: center;
  > img {
    width: 70%;
  }
`;

const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;
const Catergory = styled.div`
  box-shadow: inset rgb(50 50 93 / 25%) 15px 10px 14px -20px;
  margin-bottom: 20px;
  > img {
    margin: 50px;
    background-color: #ffd301;
    border-radius: 5%;
    width: 150px;
    height: 150px;
    :hover {
      opacity: 0.5;
      width: 170px;
      height: 170px;
    }
    cursor: pointer;
  }
`;

export default Store;
