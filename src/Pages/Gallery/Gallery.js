import React, { useEffect } from "react";
import Styles from "./Gallery.module.css";
import ScrollReveal from "scrollreveal";

const Gallery = () => {
  useEffect(() => {
    // Initialize ScrollReveal
    const sr = ScrollReveal({
      // reset: true,
      distance: "30px",
      duration: 2500,
      delay: 400,
    });

    // Use ScrollReveal to reveal elements
    sr.reveal(".heading", { delay: 100 });
  }, []);
  return (
    <>
      {/* gallery banner */}
      <div className={Styles.gallery_main}>
        <div className={Styles.gallery_main_head}>
          <h2>Gallery</h2>
          <p>
            We, Thaagam Foundation, a non-government organisation, is working
            towards elevating the livelihoods of all living beings.
          </p>
        </div>
      </div>
      <div className="heading">
        {/* first */}
        <div className={Styles.gallery_main_photo}>
          <div className={Styles.gallery_main_photos}>
            <img src="CHILD 1.jpg" alt="..."></img>
            <div className={Styles.content}>
              <p>Homeless</p>
            </div>
          </div>
          <div className={Styles.gallery_main_photos}>
            <img src="TREE 1.jpg" alt="..."></img>
            <div className={Styles.content}>
              <p>Tree Plant</p>
            </div>
          </div>
          <div className={Styles.gallery_main_photos}>
            <img src="DOG 1.jpg" alt="..."></img>
            <div className={Styles.content}>
              <p>Stray Dogs</p>
            </div>
          </div>
        </div>
      </div>
      <div className="heading">
        {/* second */}
        <div className={Styles.gallery_main_photo}>
          <div className={Styles.gallery_main_photo_up}>
            <div className={Styles.gallery_main_photos}>
              <img src="CHILD 2.jpg" alt="..."></img>
              <div className={Styles.content}>
                <p>Homeless</p>
              </div>
            </div>
          </div>

          <div className={Styles.gallery_main_photos}>
            <img src="TREE 2.jpg" alt="..."></img>
            <div className={Styles.content}>
              <p>Tree Plant</p>
            </div>
          </div>
          <div className={Styles.gallery_main_photos}>
            <img src="DOG 2.jpg" alt="..."></img>
            <div className={Styles.content}>
              <p>Stray Dogs</p>
            </div>
          </div>
        </div>
      </div>
      <div className="heading">
        {/* third */}
        <div className={Styles.gallery_main_photo}>
          <div className={Styles.gallery_main_photo_up}>
            <div className={Styles.gallery_main_photos}>
              <img src="CHILD 3.jpg" alt="..."></img>
              <div className={Styles.content}>
                <p>Homeless</p>
              </div>
            </div>
          </div>

          <div className={Styles.gallery_main_photos}>
            <img src="TREE 3.jpg" alt="..."></img>
            <div className={Styles.content}>
              <p>Tree Plant</p>
            </div>
          </div>
          <div className={Styles.gallery_main_photos}>
            <img src="DOG 3.jpg" alt="..."></img>
            <div className={Styles.content}>
              <p>Stray Dogs</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
