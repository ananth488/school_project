import React from "react";
import Styles from "./Contact.module.css";
import { HiLocationMarker } from "react-icons/hi";

const Contact = () => {
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
             <p><HiLocationMarker className={Styles.contact_form_main_first_content_f}/></p>
            </div>
            <div className={Styles.contact_form_main_first_content_s}>
            <div className={Styles.contact_form_main_first_content_f}>
             <p><HiLocationMarker className={Styles.contact_form_main_first_content_f}/></p>
            </div>
            </div>
          </div>
        </div>
        <div className={Styles.contact_form_main_second}>
          <h2>Quick Contact Form</h2>
        </div>
      </div>
    </>
  );
};

export default Contact;
