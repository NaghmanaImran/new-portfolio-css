// About.jsx

import "../style/heero.css";
import { CiFacebook } from "react-icons/ci";
import { FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";

const About = () => {
  return (
    <div className="hero-cont">
      <div className="hero-box-cont">
        <img
          src="/naghma.png"
          className="hero_image"
          alt="Naghmana's profile image"
        />
        <div className="hero_right_div">
          <h1 className="title-banner">About Us</h1>
          <h2 className="subtitle">I’m a passionate web developer with expertise in HTML, CSS, Next.js, and Python.</h2>
          <p className="des_hero">
            My journey in web development began with building responsive,
            user-friendly websites, focusing on clean design and efficient
            functionality. As I expanded my skills in JavaScript and Next.js,
            I became dedicated to creating seamless and dynamic user
            experiences.
          </p>
          <div className="social-icon">
            <CiFacebook className="s-i" />
            <FaYoutube className="s-i" />
            <FaTwitter className="s-i" />
            <FaInstagram className="s-i" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
