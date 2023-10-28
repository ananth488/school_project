import React, { useState } from 'react'
import './Navbar.module.css'
import styles from './Navbar.module.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross1 } from 'react-icons/rx'
import {Link } from 'react-router-dom'

const Navbar = () => {

   const [buttn, setbuttn] = useState(false);

   function change() {
      setbuttn(!buttn)
   }

   return (



      <div className={styles.navbar_main}>

         <div className={styles.navbar_main_first}>
            <img src='logo-2.png' alt='correct'></img>
            
         </div>
         <div className={styles.navbar_main_second}>
            <ul className={buttn ? styles.navbar_main_lists : styles.navbar_main_liststyle}>         
               <li><Link to="/">Home</Link></li>
               <li><Link to="/about">About Us</Link></li>
               <li><Link to="/Gallery">Gallery</Link></li>
               <li><Link to="/blog">Blog</Link></li>
               <li><Link to="/contact">Contact Us</Link></li>  
               
            </ul>
         </div>
         {/* <div className={styles.navbar_main_third_row}>
            <div className={styles.navbar_main_third}>
               <button>Request a Demo</button>
            </div>
         </div> */}

         <div className=''>
            <button type='button' className={styles.navbar_main_button} onClick={change}>{buttn ? <RxCross1 className='icons' /> : < GiHamburgerMenu />}</button>
         </div>

      </div>


   )
}

export default Navbar









