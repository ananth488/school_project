import React, { useState } from "react";
import styles from "./Home.module.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

const Home = () => {
  const [counteron, setCounterOn] = useState(false);
  return (
    <>
      <div className={styles.homepage_main}>
        <MDBCarousel showIndicators showControls fade>
          <MDBCarouselItem
            className="w-100 d-block"
            itemId={1}
            src="banner 1.jpg"
            alt="..."
          > 
          </MDBCarouselItem>
          <MDBCarouselItem
            className="w-100 d-block"
            itemId={2}
            src="banner 2.jpg"
            alt="..."
          >
          </MDBCarouselItem>
         
          <MDBCarouselItem
            className="w-100 d-block"
            itemId={3}
            src="banner 3.jpg"
            alt="..."
          >
          </MDBCarouselItem>
        </MDBCarousel>
        
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
                      <CountUp start={0} end={15} duration={5} delay={0} />
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
                      <CountUp start={0} end={1450} duration={5} delay={0} />
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
                      <CountUp start={0} end={4560} duration={5} delay={0} />
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
                      <CountUp start={0} end={38} duration={5} delay={0} />
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
      {/* major_main */}
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
          <h2>Fund Raised</h2>
          <p>
            The French Revolutioncons tituted for the conscience of the
            dominant.
          </p>
        </div>
        <div className={styles.major_main_first}>
          <img src="home3.png.webp" alt="correct"></img>
          <h2>Highest Donation</h2>
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
      {/* our Causes */}
    </>
  );
};

export default Home;
