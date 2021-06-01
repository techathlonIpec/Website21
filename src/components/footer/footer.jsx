import React from 'react';
import styles from './footer.module.scss';

export default function Footer() {
    return (<div>
        <footer>
            <div className={styles.section1}>
                {/* flex containers start here */}
                <div className={styles.containerOne}>
                    <h3>Locate Us <i class="fa fa-map-marker" aria-hidden="true"></i></h3>
                    <p>
                        63 Site IV, Sahibabad
              <br />
              Industrial Area,
              <br />
              Surya Nagar Flyover Road
              <br />
              Sahibabad, Ghaziabad-U.P
              <br />
              PIN Code-201010
              <br />
              Ph: +91(120) 4535000,
              <br />
              2895135,136,137
            </p>
                </div>
                <div className={styles.containerTwo} id="quickLinks">
                    <h3>Quick links <i class="fa fa-clock-o" aria-hidden="true"></i></h3>
                    <ul>
                        <li>Code of Conduct</li>
                        <li>Regulations of Event</li>
                        <li>Rules</li>
                        <li>Deparment Newsletter</li>
                        <li>Deparmental Magazine (Prism)</li>
                    </ul>
                </div>
                <div className={styles.containerThree}>
                    <h3>C0nnect With Us <i class="fa fa-link" aria-hidden="true"></i></h3>
                    <ul>
                        <li><a href="http://instagram.com/ipectechathlon"><i className="fa fa-instagram" /></a></li>
                        <li><a href="http://facebook.com/ipectechathlon"><i className="fa fa-facebook-f" /></a></li>
                        <li><a href="mailto:techathlon@ipec.org.in"><i className="fa fa-envelope" /></a></li>
                    </ul>
                    <p>Back To Top</p>
                </div>
            </div>
            {/* flex containers end here */}
            {/* copyright section */}
            <div className={styles.section2}>
                <p>Techathlon <span className={styles.year}>2021</span> © Indraprastha Enginnering College</p>
            </div>
        </footer>

    </div>);
}