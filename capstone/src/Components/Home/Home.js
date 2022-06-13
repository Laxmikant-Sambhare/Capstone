import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <img
        style={{
          width: "100%",
          height: "500px",
          margi: "50px",
          backgroundColor: "#ffd301",
        }}
        src="https://cdn.discordapp.com/attachments/947918952338706462/985480516419592222/unknown.png"
        alt="new"
      />
      <div
        style={{
          display: "flex",
          margin: "auto",
          // justifyContent: "space-between",
          justifyContent: "space-evenly",
          fontSize: "40px",
          textAlign: "center",
        }}
      >
        <div>
          <img
            style={{
              width: "300px",
              height: "300px",
              margin: "20px",
              backgroundColor: "#ffd301",
              borderRadius: "10%",
              direction: "flex",
              // marginRight: "20px",
            }}
            src="https://cdn.discordapp.com/attachments/947918952338706462/985164374740189244/unknown.png"
            alt="new"
          />
          <div>
            <li>
              <a href="/Rescue">Rescue</a>
            </li>
          </div>
          {/* <p style={{ fontsize: "50px" }}>Rescue</p> */}
        </div>
        <div>
          <img
            style={{
              width: "300px",
              height: "300px",
              margin: "20px",
              backgroundColor: "#ffd301",
              borderRadius: "10%",
              textAlign: "center",
              direction: "flex",
            }}
            src="https://cdn.discordapp.com/attachments/947918952338706462/985170895230337056/unknown.png"
            alt="new"
          />
          <div>
            <li>
              <a href="/Adoption">Adoption</a>
            </li>
          </div>
          {/* Adoption */}
        </div>
        <div>
          <img
            style={{
              width: "300px",
              height: "300px",
              margin: "20px",
              backgroundColor: "#ffd301",
              borderRadius: "10%",
              // textAlign: "center",
              direction: "flex",
              // marginLeft: "50px",
            }}
            src="https://cdn.discordapp.com/attachments/947918952338706462/985172816485830686/unknown.png"
            alt="new"
          />{" "}
          <div>
            <li>
              <a href="/Veterinary">Veterinary</a>
            </li>
          </div>
          {/* Veterinary */}
        </div>
        <div>
          <img
            style={{
              width: "300px",
              height: "300px",
              margin: "20px",
              backgroundColor: "#ffd301",
              borderRadius: "10%",
              textAlign: "center",
              direction: "flex",
            }}
            src="https://cdn.discordapp.com/attachments/947918952338706462/985172816485830686/unknown.png"
            alt="new"
          />
          <div
            style={{
              fontSize: "40px",
              textAlign: "center",
            }}
          >
            <li>
              <a href="/Store">Store</a>
            </li>
            {/* Store */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
