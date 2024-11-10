
import "../style/contact.css";

const Contact = () => {
  return (
    <main className="contact">
      <div className="form-cont">
        <h1 className="contact-h1">Contact</h1>
      <form  action="" className="form">
      <input type="text"placeholder="Enter your name "/>
      <input type="text"placeholder="your e-Mail-id  "/>
      <input type="text"placeholder="your massage"/>
      <input className="msg" type="text"placeholder="your Number "/>
     </form>
     <button className="btn">Submit</button>
    
    </div>
   
    </main>
    
  );
};

export default Contact;
