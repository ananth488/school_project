import React from 'react'
import styles from './Footer.module.css'
import { FaFacebookSquare, FaInstagramSquare, FaYoutube, FaTwitterSquare, FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
        <div className={styles.footer_main}>
            <div className='container'>
                <div className='row'>
                    {/* <div className='col'>
                        <img src='logo-2.png' alt='correct'></img>
                        
                    </div> */}
                    <div className='col'>
                        <ul>
                        <img src='logo-2.png' alt='correct'></img>
                            <li>E-Learning Software</li>
                            <li>Online Classes</li>
                            <li>Payment Gateway</li>
                            <li>School Mobile App</li>
                            <li>Finance Management</li>
                        </ul>
                    </div>
                    <div className='col'>
                        <ul>
                            <li>Fee Management</li>
                            <li>Visitor management</li>
                            <li>Student Informantion</li>
                            <li>Admission Management</li>
                            <li>Exam Proctoring</li>
                        </ul>
                    </div>
                    <div className='col'>
                        <ul>
                            <li>Transport App</li>
                            <li>HR management</li>
                            <li>Biometric Integration</li>
                            <li>Admission Management</li>
                            <li>GPS & Bus Tracking</li>
                        </ul>
                    </div>
                    <div className='col'>
                        <ul>
                            <li>Library Management</li>
                            <li>Staff Payroll</li>
                            <li>Digital Content</li>
                            <li>RFID System</li>
                        </ul>
                    </div>
                </div>
                <hr></hr>
            </div>
            <div className={styles.footer_main_copyright}>

                <div className={styles.footer_main_copyright_col1}>
                    <p>2023 Edunext Technologies Pvt. Ltd. | All Right Reserved.</p>
                </div>
                <div className={styles.footer_main_copyright_col2}>
                    <div className={styles.footer_main_copyright_icons}>
                        <ul>

                            <div className={styles.footer_main_copyright_icons_list}>
                                <span>Follow Us</span>
                                <li><FaFacebookSquare /></li>
                                <li><FaInstagramSquare /></li>
                                <li><FaYoutube /></li>
                                <li><FaTwitterSquare /></li>
                                <li><FaLinkedin /></li>
                            </div>
                        </ul>
                    </div>

                </div>

            </div>

        </div>


    )
}

export default Footer