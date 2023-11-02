import React from 'react'
import Styles from './Blog.module.css'
const Blogfirst = () => {
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
    </>
  )
}

export default Blogfirst
