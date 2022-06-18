import styled from "styled-components";

export const MobileVet = styled.div``;
export const Image = styled.div`
  margin-top: 1%;
  margin-left: 27%;

  > img {
    height: 190px;
    margin-bottom: 35px;
    margin-top: 25px;
  }
`;
export const Description = styled.div`
  width: 60%;
  height: 40%;
  justify-items: center;
  margin-left: 20%;
  font-size: 14px;
  text-indent: 2cm;
`;

export const DivSection = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-around;
`;

export const Section = styled.div`
  /* border: 1px solid #000000; */
  height: 400px;
  width: 400px;
  position: relative;
  border-radius: 5px;
`;
export const Div = styled.div`
  height: 225px;
  width: 398.5px;
  overflow: hidden;
`;
export const Image1 = styled.img`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 1s;
  border-radius: 5px;
  :hover {
    transform: scale(1.2);
  }
`;
export const Bold = styled.h1`
  justify-content: center;
  margin-left: 12.5px;
`;
export const Paragraph = styled.div`
  justify-content: center;
  margin-left: 12.5px;
  height: 250px;
  text-indent: 4px;
  margin-right: 9.5px;
`;
export const Button = styled.button`
  margin-left: 45%;
  margin-top: 1%;
  height: 80px;
  width: 200px;
  border-radius: 5px;
  font-weight: bold;
  color: black !important;
  /* background-image: linear-gradient(to right, #ff6e7f, #bfe9ff) !important; */
  background-image: linear-gradient(
    95.2deg,
    rgba(173, 252, 234, 1) 26.8%,
    rgba(192, 229, 246, 1) 64%
  );
  cursor: pointer;
`;
