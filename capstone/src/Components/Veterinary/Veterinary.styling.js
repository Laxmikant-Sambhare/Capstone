import styled from "styled-components";
export const Vet = styled.div``;
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-left: 14%;
  margin-bottom: 50px;
`;
export const Maincontainer = styled.div`
  width: 20rem;
  height: 20rem;
  margin-top: 25%;
  margin-right: 100px;
  margin-bottom: 20%;
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
