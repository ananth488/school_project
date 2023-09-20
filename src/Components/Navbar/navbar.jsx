import React, { useState } from 'react'
import './Navbar.module.css'
import styles from './Navbar.module.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross1 } from 'react-icons/rx'



const Navbar = () => {

   const [buttn, setbuttn] = useState(false);

   function change() {
      setbuttn(!buttn)
   }

   return (



      <div className={styles.navbar_main}>

         <div className={styles.navbar_main_first}>
            {/* <img src='logo192.png'></img> */}
            <h1>Edu-Dict</h1>
         </div>
         <div className={styles.navbar_main_second}>
            <ul className={buttn ? styles.navbar_main_lists : styles.navbar_main_liststyle}>
               <li>Home</li>
               <li>Customes</li>
               <li>Service</li>
               <li>About Us</li>
               <li>Contact Us</li>
            </ul>
         </div>
         <div className={styles.navbar_main_third_row}>
            <div className={styles.navbar_main_third}>
               <button>Request a Demo</button>
            </div>
         </div>

         <div className=''>
            <button type='button' className={styles.navbar_main_button} onClick={change}>{buttn ? <RxCross1 className='icons' /> : < GiHamburgerMenu />}</button>
         </div>

      </div>


   )
}

export default Navbar









