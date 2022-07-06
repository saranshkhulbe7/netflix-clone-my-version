import React from "react";
import "./Footer.css";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  const str = "{42bdfc03-a324-45d4-a3c6-59c888555b66}";
  return (
    <div className="footer">
      {/* icons */}
      <div className="footer__icons">
        <FacebookIcon className="footer__icon" />
        <InstagramIcon className="footer__icon" />
        <TwitterIcon className="footer__icon" />
        <YouTubeIcon className="footer__icon" />
      </div>
      {/* services */}
      <div className="footer__services">
        <div className="footer__services_sub">
          <a href="">
            <small>Audio and Subtitles</small>
          </a>
          <a href="">
            <small>Media Centre</small>
          </a>
          <a href="">
            <small>Privacy</small>
          </a>
          <a href="">
            <small>Contact Us</small>
          </a>
        </div>
        <div className="footer__services_sub">
          <a href="">
            <small>Audio Description</small>
          </a>

          <a href="">
            <small>Investor Relations</small>
          </a>
          <a href="">
            <small>Legal Notices</small>
          </a>
        </div>
        <div className="footer__services_sub">
          <a href="">
            <small>Help Centre</small>
          </a>
          <a href="">
            <small>Jobs</small>
          </a>
          <a href="">
            <small>Cookie Preferences</small>
          </a>
        </div>
        <div className="footer__services_sub">
          <a href="">
            <small>Gift Cards</small>
          </a>
          <a href="">
            <small>Term Of Use</small>
          </a>
          <a href="">
            <small>Corporate Information</small>
          </a>
        </div>
      </div>
      {/* service code */}
      <button className="footer__serviceCode">Service Code</button>
      {/* copyright */}
      <small className="footer__copyright">
        © 1997-2022 Netflix, Inc. {str}
      </small>
      <small className="credits">Created By Saransh Khulbe</small>
    </div>
  );
}

export default Footer;
