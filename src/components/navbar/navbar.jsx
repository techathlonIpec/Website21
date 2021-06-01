import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styles from "./navbar.module.scss";
import Drawer from "../drawer/drawer.jsx";




export default function Nav() {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    return (<div>
        <nav>
            <div className={styles.logo}>
                {/* techathalon on navbar */}
                <Link to="/" className={styles.Stylish}>
                    <h2>Techathlon'<span className={styles.year}>&nbsp;2021</span></h2>
                </Link>
            </div>
            <ul className={styles.navLinks}>
                <div className={styles.links}>
                    {/* links in nav bar as well as in drawer */}
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/about">
                        <li>About </li>
                    </Link>
                    <Link to="/events">
                        <li>Events</li>
                    </Link>
                    <Link to="/advisory">
                        <li>Advisory Committee</li>
                    </Link>
                    <Link to="/sponsers">
                        <li>Sponsors</li>
                    </Link>
                    <Link to="/team">
                        <li>Our Team</li>
                    </Link>
                    <Link to="/registration">
                        <li>Register</li>
                    </Link>
                    <Link to="/quickLinks">
                        <li>Quick links</li>
                    </Link>
                </div>
            </ul>
            {/* hamburger button designing */}
            <div className={styles.bars} >
                <div className={styles.drawer}>
                    <Drawer onclick={showSidebar} />
                </div>
            </div>
        </nav>
        <div style={{ width: '100vw', height: '10vh' }} />
    </div>);
}