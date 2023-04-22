import React from 'react';
import styles from '/styles/Home.module.css';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <ul className={styles.headerList}>
          <li className={styles.headerListItem}>
            <a className={styles.headerListLink} href="">
              Product
            </a>
          </li>
          <li className={styles.headerListItem}>
            <a className={styles.headerListLink} href="">
              Pricing
            </a>
          </li>
          <li className={styles.headerListItem}>
            <a className={styles.headerListLink} href="">
              Company
            </a>
          </li>
          <li className={styles.headerListItem}>
            <a className={styles.headerListLink} href="">
              Learn More
            </a>
          </li>
        </ul>
        <div className={styles.headerButtonContainer}>
          <a className={styles.headerWhiteButton} href="">Sign In</a>
          <a className={styles.headerGreenButton} href="">Get Started</a>
        </div>
      </div>
    </div>
  </header>
)

export default Header
