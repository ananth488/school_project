import React from "react";
import Styles from "./Blog.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Blog = () => {
  // carousel

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
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
          <img src="bday_cake_v.png" alt="..."></img>
          <img src="blanket.png" alt="..."></img>
        </div>
        {/*  */}
        <div className={Styles.recent_blog_main_first}>
          <img src="briyani.png" alt="..."></img>
          <img src="cake.png" alt="..."></img>
        </div>
      </div>

      {/* owl */}
      <div className={Styles.blog_main_carousel}>
      <Carousel responsive={responsive}>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
      </Carousel>
      </div>
    </>
  );
};

export default Blog;
