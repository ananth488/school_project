import React from "react";
import Styles from "./Blog.module.css";
const Blog = () => {
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
    </>
  );
};

export default Blog;
