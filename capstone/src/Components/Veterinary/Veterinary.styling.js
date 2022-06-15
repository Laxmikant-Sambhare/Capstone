import styled from "styled-components";

// export const Header = styled.div`
//   background-color: black;
//   width: 100%;
//   height: 60px;
//   color: white;
// `;
export const MobileVet = styled.div``;
export const Containers = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-left: 17%;
`;
export const Container = styled.div`
  width: 20rem;
  height: 20rem;
  margin-top: 20%;
  margin-right: 210px;
  margin-bottom: 9%;
  box-shadow: black 0 0 15px;
  border-radius: 20px;
  border-collapse: collapse;
  > img {
    width: 20rem;
    height: 20rem;
    border-radius: 20px;
    cursor: pointer;
    :hover {
      opacity: 0.5;
      width: 20rem;
      height: 20rem;
    }
  }
`;
export const Text = styled.div`
  width: 15rem;
  height: 3rem;
  margin-left: 20px;
  text-align: center;
  font-weight: bold;
  color: black;
  font-size: medium;
  cursor: pointer;
`;
