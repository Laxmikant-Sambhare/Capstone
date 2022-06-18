import React from "react";
import "./VetDescription.css";
import {
  MobileVet,
  Image,
  Description,
  Section,
  DivSection,
  Image1,
  Bold,
  Paragraph,
  Div,
  Button,
} from "./VetDescription.styling";
import { Questions } from "./Data/Q&A_data";
import { Services } from "./Data/Services";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 400) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};
function Booking() {
  const params = useParams();
  const service = Services.find((item) => item.id == params.id);
  // const Question = Questions.find((data) => data.id == params.id);
  // console.log("params", params);
  const navigate = useNavigate();
  const ToBooking = () => {
    navigate("/booking");
  };
  return (
    <MobileVet style={{ marginBottom: "100px" }}>
      <div style={{ fontSize: "20px", textAlign: "center", marginTop: "3%" }}>
        <b>{service.service}</b>
      </div>
      <Image>
        <img src={service.image1} alt="" />
      </Image>

      <Description>
        <ReadMore>{service.Description}</ReadMore>
      </Description>
      <DivSection>
        {Questions.map((data) => (
          <>
            <Section>
              <Div>
                <Image1 src={data.image} alt=""></Image1>
              </Div>
              <Bold>{data.question}</Bold>
              <Paragraph>
                <ReadMore>{data.Description}</ReadMore>
              </Paragraph>
            </Section>
          </>
        ))}
      </DivSection>
      <div className="wrap">
        <button className="animationButton" onClick={ToBooking}>
          Book Your Slots Now{">>>"}
        </button>
      </div>
    </MobileVet>
  );
}

export default Booking;
