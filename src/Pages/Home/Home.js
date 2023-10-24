import React, { useState } from "react";
import styles from "./Home.module.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";


const Home = () => {
  const [counteron, setCounterOn] = useState(false);
  return (
    <>
      <div className={styles.homepage_main}>
        {/* bannerimag */}
        <div className={styles.bannerimg_main}>
          <div className={styles.bannerimg_main_first}>
            <h1>
              Campus Management Solutions For <br />
              Educational Institutions
            </h1>
            <p>
              Distinct product offerings for Schools, Colleges, Universities &
              Trusts.
            </p>
            <p>Automation of Students, Faculty & Campus Administration.</p>
            <p>
              Learning Outcome Management & Analysis to promote Student Success
            </p>
            <p>Automation of Students, Faculty & Campus Administration.</p>
            <p>
              Learning Outcome Management & Analysis to promote Student Success
            </p>
          </div>
        </div>
      </div>
      {/* discovery */}
      <div className={styles.discovery_main}>
        <div className={styles.discovery_main_first}>
          <h1>DISCOVER</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
            aperiam unde natus voluptates placeat accusamus vel laborum
            cupiditate. Reiciendis commodi perferendis dignissimos, amet quis.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
            aperiam unde natus voluptates placeat accusamus vel laborum
            cupiditate. Reiciendis commodi perferendis dignissimos, amet quis.
          </p>
        </div>
        <div className={styles.discovery_main_second}>
          <div className={styles.discovery_main_second_first}>
            <img src="disc 1.webp" alt="correct"></img>
          </div>
          <div className={styles.discovery_main_second_second}>
            <h1>BUILD SCHOOLS IN CHENNAI</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              quis, nemo explicabo cupiditate vero fugiat sit eius sequi.
            </p>
            <div className={styles.discovery_main_second_third}>
              <div className={styles.discovery_main_second_third_first}>
                <ScrollTrigger
                  onEnter={() => setCounterOn(true)}
                  onExit={() => setCounterOn(false)}
                >
                  <span>
                    {counteron && (
                      <CountUp start={0} end={15} duration={2} delay={0} />
                    )}
                  </span>
                </ScrollTrigger>
                <h5>Schools</h5>
              </div>
              <div className={styles.discovery_main_second_third_second}>
                <ScrollTrigger
                  onEnter={() => setCounterOn(true)}
                  onExit={() => setCounterOn(false)}
                >
                  <span>
                    {counteron && (
                      <CountUp start={0} end={1450} duration={2} delay={0} />
                    )}
                  </span>
                </ScrollTrigger>
                <h5>Students</h5>
              </div>
            </div>
          </div>
        </div>
        {/*  */}

        <div className={styles.discovery_main_second}>
          <div className={styles.discovery_main_second_second}>
            <h1>FEEDING CHILDREN IN CHENNAI</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              quis, nemo explicabo cupiditate vero fugiat sit eius sequi.
            </p>
            <div className={styles.discovery_main_second_third}>
              <div className={styles.discovery_main_second_third_first}>
                <ScrollTrigger
                  onEnter={() => setCounterOn(true)}
                  onExit={() => setCounterOn(false)}
                >
                  <span>
                    {counteron && (
                      <CountUp start={0} end={4560} duration={2} delay={0} />
                    )}
                  </span>
                </ScrollTrigger>
                <h5>Children</h5>
              </div>
              <div className={styles.discovery_main_second_third_second}>
                <ScrollTrigger
                  onEnter={() => setCounterOn(true)}
                  onExit={() => setCounterOn(false)}
                >
                  <span>
                    {counteron && (
                      <CountUp start={0} end={38} duration={2} delay={0} />
                    )}
                  </span>
                </ScrollTrigger>
                <h5>Orphanage</h5>
              </div>
            </div>
          </div>
          <div className={styles.discovery_main_second_first}>
            <img src="disc 2.webp" alt="correct"></img>
          </div>
        </div>
      </div>
      {/*  */}
      <div className={styles.major_main}>
        <div className={styles.major_main_first}>
          <img src="home1.png.webp" alt="correct"></img>
          <h2>Total Donation</h2>
          <p>
            The French Revolutioncons tituted for the conscience of the
            dominant.
          </p>
        </div>
        <div className={styles.major_main_first}>
        <img src="home2.png.webp" alt="correct"></img>
          <h2>Total Donation</h2>
          <p>
            The French Revolutioncons tituted for the conscience of the
            dominant.
          </p>
        </div>
        <div className={styles.major_main_first}>
         
        <img src="home3.png.webp" alt="correct"></img>
          <h2>Total Donation</h2>
          <p>
            The French Revolutioncons tituted for the conscience of the
            dominant.
          </p>
        </div>
        <div className={styles.major_main_first}>
          
        <img src="home4.png.webp" alt="correct"></img>
          <h2>Total Donation</h2>
          <p>
            The French Revolutioncons tituted for the conscience of the
            dominant.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
