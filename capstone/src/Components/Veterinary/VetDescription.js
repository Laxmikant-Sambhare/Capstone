//importing necessary modules to use in file.
import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

import "./Styling.css";
import {
  MobileVet,
  Description,
  Section,
  DivSection,
  Image1,
  Bold,
  Paragraph,
  Div,
} from "./Styling";

import { Questions } from "./Data/Q&A_data";
import { Services } from "./Data/Services";

//A readmore readless feature is implemented and the text which is to be given inside is accepted as a prop.
const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {/* Here a part of text is extracted using slice method. */}
      {isReadMore ? text.slice(0, 400) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};
function Booking() {
  //use params will give a object of id's
  const params = useParams();
  //And here it is accessing for unique id elements and is storing it to variable service.
  const service = Services.find((item) => item.id == params.id);

  return (
    <MobileVet>
      <div className="mobileVet">
        <b>{service.service}</b>
      </div>
      <div className="serviceImageContainer">
        <img src={service.image1} alt="ServicImage" className="serviceImage" />
      </div>
      <div className="ContentDiv">
        <Description>
          {/* The above ReadMore more feature is implemented here   */}
          <ReadMore>{service.Description}</ReadMore>
        </Description>

        <DivSection>
          {/* This is another json data from where Q & A files are accessed by mapping through the array and displaying it as cards. */}
          {Questions.map((data) => (
            <Section>
              <a href={data.link}>
                <Div>
                  <Image1 src={data.image} alt="Image"></Image1>
                </Div>
              </a>
              <Bold style={{ color: "black " }}>{data.question}</Bold>
              <Paragraph>
                <ReadMore>{data.Description}</ReadMore>
              </Paragraph>
            </Section>
          ))}
        </DivSection>
      </div>
      <div className="wrap">
        {/* service data is passed to bookings from here.  */}
        <Link to={"/booking"} state={service}>
          <button className="animationButton">
            Book Your Slots Now{">>>"}
          </button>
        </Link>
      </div>
    </MobileVet>
  );
}

export default Booking;
