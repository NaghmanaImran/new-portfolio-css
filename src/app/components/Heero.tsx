import "../style/heero.css";

const Heero = () => {
  return (
    <div className="hero-cont">
      <div className="hero-box-cont">
        <img
          src="/naghma.png"width={500}
          height={400} className="hero_image" alt="my profile image"/>
         
          
        
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