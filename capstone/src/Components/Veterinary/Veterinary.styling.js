import styled from "styled-components";

export const Header = styled.div`
  background-color: black;
  width: 100%;
  height: 60px;
  color: white;
`;
export const MobileVet = styled.div``;
export const Containers = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-left: 5%;
`;
export const Container = styled.div`
  width: 15rem;
  height: 15rem;
  margin-top: 5%;
  margin-left: 10%;
  margin-bottom: 9%;
  > img {
    width: 15rem;
    height: 15rem;
    border-radius: 20px;
    cursor: pointer;
    :hover {
      opacity: 0.5;
      width: 15rem;
      height: 15rem;
    }
  }
`;
export const Text = styled.div`
  width: 15rem;
  height: 3rem;
  margin-left: -5px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
`;
