import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles}>
      {/* Aboutus */}
      <div className={styles.aboutus_main_back}>
        <div className={styles.aboutus_main}>
          <div className={styles.aboutus_main_first}>
            <h2>About Us</h2>
            <p>
              We, Thaagam Foundation, a non-government organisation, is working
              towards elevating the livelihoods of all living beings. Our thirst
              <b>(‘thaagam’)</b> is to serve humanity. We believe humanity
              consists of people, animals, and the environment. We uphold our
              commitments to all living things by implementing innovative and
              effective programmes for the underprivileged, animal welfare, and
              the environment.</p> <p>Since we started in 2018, we have been feeding
              the homeless. Our service activities for the underprivileged are
              stretched towards their medical treatment and providing education
              too. We have the opportunity to provide happiness to the kids in
              orphanages by providing them with food, essentials and
              recreational items. We are feeding the stray dogs. Beyond feeding,
              we identify, research, and rescue them. Planting trees is another
              mission for a green and healthy environment.</p><p> We are registered
              under Section 8 of the Companies Act, 2013 for charitable and
              not-for-profit purposes. We have received 12AA and 80 G
              Certificates from the Income Tax Department for its transparency
              and are working with the United Nations on their Global Compact
              Program to develop ground-breaking policies. We are registered
              with the Ministry of Corporate Affairs. Corporate companies are
              engaging in CSR initiatives too.</p>
            
          </div>
          <div className={styles.aboutus_main_second}>
            <iframe
              className={styles.aboutus_main_second_video}
              title="unique title"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
              alt="..."
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
