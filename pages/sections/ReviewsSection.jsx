import React from 'react';
import stylesReviews from '/styles/Reviews.module.css';
import styles from '/styles/Home.module.css';

const ReviewsSection = () => (
  <section className={stylesReviews.reviewsSection}>
    <div className={styles.container}>
      <div className={stylesReviews.firstContainer}>
        <div className={stylesReviews.reviewsTextContainer}>
          <h1 className={stylesReviews.reviewsTitle}>
            Security <br/> reviews, <br/> solved
          </h1>
          <p className={stylesReviews.reviewsText}>
            Using AI and a team of experts, HyperComply automates security reviews and accelerates due diligence, so you
            can
            onboard new tools and partners with confidence.
          </p>
          <a className={stylesReviews.reviewsLink} href="">
            Get a Demo
          </a>
        </div>
        <div>
          <img className={stylesReviews.reviewsPicture} src="/reviews.jpg" alt="reviews"/>
        </div>
      </div>
      <div className={stylesReviews.secondContainer}>
        <p>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          We've saved 10,000+ hours for the smartest businesses in the world.
        </p>
        <ul className={stylesReviews.reviewsList}>
          <li className={stylesReviews.reviewsItem}>
            <img src="/vidyard.svg" alt="vidyard"/>
          </li>
          <li className={stylesReviews.reviewsItem}>
            <img src="/heap.svg" alt="heap"/>
          </li>
          <li className={stylesReviews.reviewsItem}>
            <img src="/alloy.svg" alt="alloy"/>
          </li>
          <li className={stylesReviews.reviewsItem}>
            <img src="/fullstory.svg" alt="fullstory"/>
          </li>
          <li className={stylesReviews.reviewsItem}>
            <img src="/salesloft.svg" alt="salesloft"/>
          </li>
          <li className={stylesReviews.reviewsItem}>
            <img src="/drata.svg" alt="drata"/>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default ReviewsSection
