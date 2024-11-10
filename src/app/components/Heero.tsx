import "../style/heero.css";
import Image from "next/image";
const Heero = () => {
  return (
    <div className="hero-cont">
      <div className="hero-box-cont">
        
           <Image 
  src="/naghma.png"  // local image path ya external URL
  alt="Description of the image"  // image description for accessibility
  width={500}                    // width in pixels
  height={300}                   // height in pixels
/>
          
        
        <div className="hero_right_div">
          <h1 className="title-banner">Hello, my name is Naghmana Imran</h1>
          <h2>
            I’m a passionate web developer with expertise in HTML, CSS, Next.js,
            and Python.
          </h2>
          <p className="des_hero">
            My journey in web development began with building responsive,
            user-friendly websites,focusing on clean design and efficient
            functionality. As I expanded my skills in JavaScript and Next.js, I
            became dedicated to creating seamless and dynamic user experiences.
          </p>
          
            <button  className="hero-btn">Hire me</button>
         
        </div>
      </div>
    </div>
  );
};

export default Heero;
