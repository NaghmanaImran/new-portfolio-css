import "../style/Services.css";
import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import { RiQuillPenLine } from "react-icons/ri";
import { TbBrandWebflow } from "react-icons/tb";
import { MdOutlineWebhook } from "react-icons/md"

const Services = () => {
  return (
    <main className="main">
      <div className="service_cont">
        <div className="top_div_serv">
          <h1 className="title-ser">My Services</h1>
          <p className="des-para">
            I specialize in building responsive, modern websites that prioritize
            user experience and functionality. Using HTML, CSS, and JavaScript
            along with React and Next.js, I create websites that are visually
            appealing and optimized for performance. My web development services
            are tailored to meet each client s needs, from personal portfolios
            to small business websites.
          </p>
        </div>

        <div className="boxes_cont">
        <div className="box"><FaLaptopCode className="ser-icon"/>
 
        <h3>UI/UX Design: </h3>
        <span>Blog-E-commorce</span>
        </div>
        <div className="box"><RiQuillPenLine className="ser-icon"/>
 
        <h3>CV Desining</h3>
        <span>Blog-E-commorce</span>
        </div>
        <div className="box"><TbFileCv className="ser-icon"/>
 
        <h3>Web Desining</h3>
        <span>Blog-E-commorce</span>
        </div>
        <div className="box"><FaLaptopCode className="ser-icon"/>
 
        <h3>Web Animations:</h3>
        <span>Blog-E-commorce</span>
        </div>
        <div className="box"><TbBrandWebflow className="ser-icon"/>
 
        <h3>E-commerce Sites</h3>
        <span>Blog-E-commorce</span>
        </div>
        <div className="box">< MdOutlineWebhook className="ser-icon"/>
 
        <h3>Portfolio and Personal Websites: Developing</h3>
        <span>Blog-E-commorce</span>
        </div>
        
        
      
        </div>
      </div>
    </main>
  );
};

export default Services;

