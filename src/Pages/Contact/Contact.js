import React from "react";
import Styles from "./Contact.module.css";
import { MdLocationPin, MdEmail } from "react-icons/md";
import { FaMobile } from "react-icons/fa";
import { Formvalidate } from "./Formvalidate";

const Contact = () => {
  // form validate
    const Createuser=async(e)=>{
    e.preventDefault()
    let formData={
    name:e.target[0].value,
    number:e.target[1].value,
    email:e.target[2].value,
    password:e.target[3].value
    }
    console.log(formData);
    
    const isValid= await Formvalidate.isValid(formData)
    console.log(isValid)
    }
  // end
  return (
    <>
      {/* contact banner */}
      <div className={Styles.contact_main}>
        <div className={Styles.contact_main_head}>
          <h2>Contact Us</h2>
          <p>
            We, Thaagam Foundation, a non-government organisation, is working
            towards elevating the livelihoods of all living beings.
          </p>
        </div>
      </div>
      {/* Contact form */}
      <div className={Styles.contact_form_main}>
        <div className={Styles.contact_form_main_first}>
          <h2>Quick Contact</h2>
          <div className={Styles.contact_form_main_first_content}>
            <div className={Styles.contact_form_main_first_content_f}>
              <p>
                <MdLocationPin
                  className={Styles.contact_form_main_first_content_icon}
                />
                <span className={Styles.content_form_text}>
                  Our Location <br></br>
                  <span className={Styles.content_form_text1}>
                  No.6, Dhanammal street, Spurtank road, chetpet Chennai 600-031
                  </span>
                </span>
              </p>
              <p>
                <FaMobile
                  className={Styles.contact_form_main_first_content_icon}
                />
                <span className={Styles.content_form_text}>Phone
                <br></br>
                  <span className={Styles.content_form_text1}>
                  +91 80691 69691
                  </span>
                </span>
              </p>
              <p>
                <MdEmail
                  className={Styles.contact_form_main_first_content_icon}
                />
                <span className={Styles.content_form_text}>Email
                <br></br>
                  <span className={Styles.content_form_text1}>
                  office@thaagam.org
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className={Styles.contact_form_main_second}>
        <h2>Quick Contact Form</h2>
          <div className={Styles.contact_form_main_second_first}>
            <form onSubmit={Createuser}>
             <input type="text" placeholder="Enter your username"></input>
             <input type="number" placeholder="Enter your number"></input>
             <input type="email" placeholder="Enter your email"></input>
             <input type="password" placeholder="Enter your password"></input>
             <div className={Styles.contact_form_main_second_first_click}>
             <input className={Styles.contact_form_main_second_first_btn} type="submit" ></input>
             </div>
             
             </form>    
          </div>

        </div>
      </div>
    </>
  );
};

export default Contact;
