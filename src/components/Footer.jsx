import React from "react";
import {
  SlSocialTwitter,
  SlSocialInstagram,
  SlSocialGoogle,
  SlSocialFacebook,
  SlSocialYoutube,
  SlSocialGithub,
} from "react-icons/sl";
import {
  RiVisaFill,
  RiMastercardFill,
  RiBitCoinFill,
  RiPaypalFill,
} from "react-icons/ri";
import { FaCcApplePay } from "react-icons/fa";
import { SiGooglepay } from "react-icons/si";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-text">
        <p>
          eCommerce concept website made with React.js by João Vitor Paiva,
          2023.
        </p>
      </div>
      <div className="infos">
        <div>
          <h3>Social medias</h3>
          <div className="infos-wrapper">
            <p>
              <SlSocialTwitter className="twitter" />
            </p>
            <p>
              <SlSocialInstagram className="instagram" />
            </p>
            <p>
              <SlSocialGoogle className="google" />
            </p>
            <p>
              <SlSocialFacebook className="facebook" />
            </p>
            <p>
              <SlSocialYoutube className="youtube" />
            </p>
            <p>
              <SlSocialGithub />
            </p>
          </div>
        </div>
        <div>
          <div>
            <h3>Payment</h3>
            <div className="infos-wrapper">
              <p>
                <RiVisaFill />
              </p>
              <p>
                <RiMastercardFill />
              </p>
              <p>
                <RiBitCoinFill />
              </p>
              <p>
                <RiPaypalFill />
              </p>
              <p>
                <FaCcApplePay />
              </p>
              <p>
                <SiGooglepay />
              </p>
            </div>
          </div>
        </div>
        <div className="terms">
          <h4>Terms of Use</h4>
          <h4>Privacy</h4>
          <h4>Locations</h4>
          <h4>FAQ</h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
