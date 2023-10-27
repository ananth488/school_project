import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <>
      {/* About banner */}
      <div className={styles.aboutus_banner}>
        <div className={styles.aboutus_banner_first}>
        <h1>About Us</h1>
           <p>We, Thaagam Foundation, a non-government organisation, is working
              towards elevating the livelihoods of all living beings.</p>
        </div>
           
      </div>
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
      {/* About Mission */}
      <div className={styles.about_mission}>
              <h1>Concern About Our Mission</h1>
              <div className={styles.about_mission_first}>
                   <div className={styles.about_mission_first_content}>
                       <h3>Our Mission</h3>
                       <p>Thaagam foundation is a non-profit organization aiming to
                         uplift the life of every individual by providing basic requirements.</p>
                   </div>
                   <div className={styles.about_mission_first_content}>
                   <h3>Our Vision</h3>
                   <p>Our efforts are envisioned to stem the tide of poverty and social isolation 
                    and to rekindle hope for a better future. We think that everyone has the right to have parity of 
                    access to the resources and opportunities they need for a dignified life and to participate fully in society.
                     We have a dream of a world where there is no starvation, hunger, or poverty, and we are consistently striving for that.</p>
                   </div>
                   <div className={styles.about_mission_first_content}>
                   <h3>Our Goal</h3>
                   <p>With your participation, we aspire to help humanity by uplifting all aspects of human, 
                    animal, and environmental well-being. Together, we can resolve the imbalance in society
                     by empowering all underprivileged individuals and lead them to a better world of Equality, Dignity and Respect.</p>
                   </div>
              </div>
      </div>
    </>
  );
};

export default About;
