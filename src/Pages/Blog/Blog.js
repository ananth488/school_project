import React, { useState } from "react";
import Styles from "./Blog.module.css";

const Blog = () => {
  const [showContent, setShowContent] = useState(false);

  let toggleContent = () => {
    setShowContent(!showContent);
  };

  const [showContentfirst, setShowContentfirst] = useState(false);

  let clickContent = () => {
    setShowContentfirst(!showContentfirst);
  };
  // carousel
  return (
    <>
      {/* blog banner */}
      <div className={Styles.blog_main}>
        <div className={Styles.blog_main_head}>
          <h2>Latest Blog</h2>
          <p>
            We, Thaagam Foundation, a non-government organisation, is working
            towards elevating the livelihoods of all living beings.
          </p>
        </div>
      </div>
      {/*  */}
      <div className={Styles.recent_blog_main}>
        <h2>Recent Blogs</h2>
        <div className={Styles.recent_blog_main_first}>
          <img src="cake.png" alt="..."></img>
          <img src="blanket.png" alt="..."></img>
        </div>
        {/*  */}
        {/* <div className={Styles.recent_blog_main_first}>
          <img src="briyani.png" alt="..."></img>
          <img src="cake.png" alt="..."></img>
        </div> */}
      </div>

      {/* owl */}
      <div className={Styles.blog_main_carousel}>
        {/* <h2>Latest Blog</h2> */}
        <div className={Styles.blog_main_carousel_first}>
          <div className={Styles.blog_main_first_img}>
            <img src="first-DOG2.jpg" alt="..."></img>
            <h3>Feed A Stray Dog</h3>
            <p>
              Dogs are regarded as being a man's best buddy. A thousand canines
              are thought to perish each year from famine and malnutrition.
              Al...
            </p>

            {showContent && (
              <div>
                <p>
                  Dogs are regarded as being a man's best buddy. A thousand
                  canines are thought to perish each year from famine and
                  malnutrition. Along with them, we equitably share the area.
                  Humans are able to communicate their emotions, such as anger
                  or hunger. Dogs consume the wastes they discover in the trash
                  as food. By providing a supper for stray dogs, we hope to give
                  the voiceless a voice. By making a donation of Rs. 35, you may
                  sponsor and feed a stray dog with a nutritious meal created by
                  veterinary nutritionists.
                </p>
                
              </div>
            )}
            <button onClick={toggleContent}>
              {showContent ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
        {/* second */}
        <div className={Styles.blog_main_carousel_first}>
          <div className={Styles.blog_main_second_img}>
            <img src="dental camp.jpg" alt="..."></img>
            <h3>Dental Camp</h3>
            <p>
              Dogs are regarded as being a man's best buddy. A thousand canines
              are thought to perish each year from famine and malnutrition.
              Al...
            </p>

            {showContentfirst && (
              <div>
                <p>
                  Dogs are regarded as being a man's best buddy. A thousand
                  canines are thought to perish each year from famine and
                  malnutrition. Along with them, we equitably share the area.
                  Humans are able to communicate their emotions, such as anger
                  or hunger. Dogs consume the wastes they discover in the trash
                  as food. By providing a supper for stray dogs, we hope to give
                  the voiceless a voice. By making a donation of Rs. 35, you may
                  sponsor and feed a stray dog with a nutritious meal created by
                  veterinary nutritionists.
                </p>
                
              </div>
            )}
            <button onClick={clickContent}>
              {showContentfirst ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </div>
      {/*  */}
      
    </>
  );
};

export default Blog;
