import React from "react";
import Styles from "./Contact.module.css";
import { MdLocationPin, MdEmail } from "react-icons/md";
import { FaMobile } from "react-icons/fa";
import { Formvalidate } from "./Formvalidate";

const Contact = () => {
  // form validate
  const Createuser = async (e) => {
    e.preventDefault();
    let formData = {
      name: e.target[0].value,
      number: e.target[1].value,
      email: e.target[2].value,
      password: e.target[3].value,
    };
    console.log(formData);

    const isValid = await Formvalidate.isValid(formData);
    console.log(isValid);
  };
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
                    No.6, Dhanammal street, Spurtank road, chetpet Chennai
                    600-031
                  </span>
                </span>
              </p>
              <p>
                <FaMobile
                  className={Styles.contact_form_main_first_content_icon}
                />
                <span className={Styles.content_form_text}>
                  Phone
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
                <span className={Styles.content_form_text}>
                  Email
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
                {/* <input className={Styles.contact_form_main_second_first_btn} type="submit" ></input> */}
                <button className={Styles.contact_form_main_second_first_btn}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/*  */}
      <div className={Styles.contact_form_main_map}>
      <iframe title="first"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.420508960694!2d80.24402777579904!3d13.072514787252224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267a0180785f5%3A0x697a4d6c005381ce!2sThaagam%20Foundation!5e0!3m2!1sen!2sin!4v1698733677617!5m2!1sen!2sin"
      ></iframe>
      </div>
    </>
  );
};

export default Contact;
