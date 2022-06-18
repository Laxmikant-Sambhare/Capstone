import React from "react";
import "./Home.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../../context/UserAuthContext";
import styled from "styled-components";
import { Slide } from "react-slideshow-image";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  const slideImages = [
    {
      url: "https://www.seekpng.com/png/full/3-39193_happy-birthday-if-you-have-clicked-through-to.png",
      caption: "Slide 1",
    },
    {
      url: "https://thumbs.dreamstime.com/b/collage-different-dogs-white-background-banner-design-179886014.jpg",
      caption: "Slide 2",
    },
    {
      url: "https://image.shutterstock.com/image-photo/collage-different-dogs-on-white-260nw-1724568655.jpg",
      caption: "Slide 3",
    },
    {
      url: "https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/1/various-dogs-horizontal-web-banner-susan-schmitz.jpg",
      caption: "Slide 4",
    },
  ];

  const services = [
    {
      id: 1,
      url: "https://cdn.discordapp.com/attachments/947918952338706462/985164374740189244/unknown.png",
      service: "Rescue",
      path: "/rescue",
    },
    {
      id: 2,
      url: "https://cdn.discordapp.com/attachments/947918952338706462/985170895230337056/unknown.png",
      service: "Adoption",
      path: "/adoption",
    },
    {
      id: 3,
      url: "https://cdn.discordapp.com/attachments/947918952338706462/985172816485830686/unknown.png",
      service: "Veterinary",
      path: "/vet",
    },
    {
      id: 4,
      url: "https://cdn.discordapp.com/attachments/947918952338706462/985174308450103316/unknown.png",
      service: "Store",
      path: "/store",
    },
  ];
  return (
    <>
      <div className="p-4 box mt-3 text-center">
        Hello Welcome <br />
        {user && user.email}
      </div>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
      <div>
        <Banner>
          <div className="slide-container">
            <Slide>
              {slideImages.map((slideImage, index) => (
                <div
                  className="each-slide"
                  key={index}
                  style={{ alignItems: "center" }}
                >
                  <img
                    src={slideImage.url}
                    alt="Category"
                    style={{
                      height: "350px",
                      width: "1400px",
                    }}
                  />
                </div>
              ))}
            </Slide>
          </div>
        </Banner>
        <div
          style={{
            display: "flex",
            margin: "auto",
            // justifyContent: "space-between",
            justifyContent: "space-evenly",
            fontSize: 20,
            textAlign: "center",
          }}
        >
          <Categories>
            {services.map((data, index) => {
              return (
                <Link to={data.path} key={index}>
                  <Catergory>
                    <img src={data.url} alt="Category" />
                    <Typography
                      style={{
                        textAlign: "center",
                        fontSize: 20,
                        fontWeight: 600,
                        color: "black",
                      }}
                    >
                      {data.service}
                    </Typography>
                  </Catergory>
                </Link>
              );
            })}
          </Categories>
        </div>
        <Bottomtabs />
      </div>
    </>
  );
};
const Bottomtabs = styled.div`
  height: 50px;
`;
const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;
const Catergory = styled.div`
  margin-bottom: 20px;
  > img {
    margin: 30px;
    margin-bottom: 0px;
    background-color: #ffd301;
    border-radius: 5%;
    width: 200px;
    height: 200px;
    cursor: pointer;
  }
  :hover {
    opacity: 0.5;
  }
`;
const Banner = styled.div`
  align-items: center;
  margin-left: 80px;
  margin-right: 80px;
  height: 350px;
`;

export default Home;
