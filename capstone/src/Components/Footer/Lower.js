import React from "react";
import "./Lower.css";
// import InstagramIcon from "@mui/icons-material/Instagram";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

function Lower() {
  return (
    <>
      <footer>
        <div>
          <div className="icons">
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/balramkumar.roy.90"
                  target="balram"
                >
                  <FaFacebook className="icon" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCpchDc9ibtKi6Qj4wWP-Iog"
                  target="balram"
                >
                  <FaInstagram className="icon" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCpchDc9ibtKi6Qj4wWP-Iog"
                  target="balram"
                >
                  <FaYoutube className="icon" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCpchDc9ibtKi6Qj4wWP-Iog"
                  target="balram"
                >
                  <FaLinkedin className="icon" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCpchDc9ibtKi6Qj4wWP-Iog"
                  target="balram"
                >
                  <FaTwitter className="icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Lower;
