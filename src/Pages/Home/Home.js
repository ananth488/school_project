import React from 'react'
import styles from './Home.module.css'

const Home = () => {
    return (
        <>
        <div className={styles.homepage_main}>
            {/* bannerimag */}
            <div className={styles.bannerimg_main}>
                <div className={styles.bannerimg_main_first}>
                    <h1>Campus Management Solutions For <br />Educational Institutions</h1>
                    <p>Distinct product offerings for Schools, Colleges, Universities & Trusts.</p>
                    <p>Automation of Students, Faculty & Campus Administration.</p>
                    <p>Learning Outcome Management & Analysis to promote Student Success</p>
                    <p>Automation of Students, Faculty & Campus Administration.</p>
                    <p>Learning Outcome Management & Analysis to promote Student Success</p>
                </div>
            </div>
        </div>
        {/* discovery */}
        <div className={styles.discovery_main}>
            <div className={styles.discovery_main_first}>
              <h1>DISCOVER</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto aperiam unde natus voluptates placeat accusamus vel laborum cupiditate. Reiciendis commodi perferendis dignissimos, amet quis.
              </p>
            </div>
            <div className={styles.discovery_main_second}>
              <div className={styles.discovery_main_second_first}>
                 <img src='disc 1.webp' alt='correct'></img>
              </div>
              <div className={styles.discovery_main_second_second}>
                 <h1>BUILD SCHOOLS IN CHENNAI</h1>
                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam quis, nemo explicabo cupiditate vero fugiat sit eius sequi.</p>
              </div>
            </div>
            {/*  */}
        
            <div className={styles.discovery_main_second}>
              <div className={styles.discovery_main_second_first}>
                 <h1>BUILD SCHOOLS IN CHENNAI</h1>
                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam quis, nemo explicabo cupiditate vero fugiat sit eius sequi.</p>
              </div>
              <div className={styles.discovery_main_second_second}>
              <img src='disc 2.webp' alt='correct'></img>
              </div>
            </div>
        </div>
        </>
    )
}

export default Home