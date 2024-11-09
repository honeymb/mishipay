import React, { useState, useEffect } from 'react';
import '../styles/Home.css'; // Import the CSS for styling

const Home = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const reviews = [
    {
      logo: 'https://i0.wp.com/mishipay.com/wp-content/uploads/2021/02/muji_logo.png?resize=100%2C100&amp;ssl=1',
      name: 'David Brice',
      title: 'Managing Director, MUJI UK',
      reviewText: '“The in-store experience for customers has always been an important part of the Muji brand, and MishiPay’s mobile self-checkout solution has allowed us to create a new level of convenience. Not only are customers enjoying being able to check out without queuing or touching hardware, but our staff are also more free to help, advise and add real value to the shopping experience rather than processing payments.”',
      stars: 5,
    },
    {
      logo: 'https://i0.wp.com/mishipay.com/wp-content/uploads/2021/02/bwg_logo.png?resize=100%2C100&ssl=1',
      name: 'Sarah Chris Donnelly',
      title: 'IT Director, BWG',
      reviewText: '“A safer and quicker shopping experience. The current pandemic has accelerated the need for consumer-facing businesses to embrace new technologies that make shopping experiences safer, quicker and altogether more convenient”',
      stars: 5,
    },
    {
      logo: '	https://i0.wp.com/mishipay.com/wp-content/uploads/2021/02/ftc_logo.png?resize=100%2C100&ssl=1',
      name: 'Martin Jermiin',
      title: 'CEO, Flying Tiger Copenhagen',
      reviewText: '“All of the products in our stores are designed to make people happy, but we recognise that the checkout experience sometimes makes it a somewhat less happy experience. MishiPay helps us in this respect by removing the need to wait in line to pay. Also, we are excited to see the impact the technology can have on the operation and customer experience of our stores by enabling our store teams to focus on serving and advising customers rather than staffing checkouts.”',
      stars: 5,
    },

  ];

  const handleNext = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const renderStars = (stars) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <i key={index} className={`fas fa-star ${index < stars ? 'checked' : ''}`}></i>
      ));
  };

  // useEffect hook that depends on handleNext
  useEffect(() => {
    const intervalId = setInterval(handleNext, 5000); // change review every 5 seconds
    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [handleNext]); // Add handleNext to the dependency array

  return (
    <div className="home">

      <section className="banner-section">
        <div className="banner-container">
          <div className="banner-text">
            <h1>Think Shopping,<br />Think MishiPay</h1>
            <p>Bring your in-store experience to the 21st century, eliminate queues and fight labor shortages:</p>
            <ul>
              <li><b>Scan & Go</b></li>
              <li><b>Self Checkout Kiosk</b></li>
              <li><b>RFID Self Checkout</b></li>
              <li><b>mPOS</b></li>
            </ul>
            <div className="learn-more-button">
              <a href="https://bit.ly/37moJv7" target="_blank" rel="noopener noreferrer">
                <button className="btn-learn-more">Learn More</button>
              </a>
            </div>
          </div>

          <div className="banner-video">
            <video
              className="banner-video-element"
              src="https://videos.files.wordpress.com/rdT9b7YT/mishipay-scan-go-and-kiosk-pantree-london.mp4"
              autoPlay
              loop
              muted
              controls
              controlsList="nodownload"
            />
          </div>
        </div>
      </section>


      {/* Generating Value Section */}
      <section className="value-section">
        <h2>Generating Value For 30 Brands In 14 Countries</h2>
        <img
          src="https://i0.wp.com/mishipay.com/wp-content/uploads/2023/11/Screenshot-2023-11-01-at-13.37.32.png?fit=2122%2C486&amp;ssl=1"
          alt="MishiPay Brands Value"
          className="value-image"
          fetchPriority="high"
          decoding="async"
          width="1200"
          height="486"
        />
      </section>


      <section className="client-case-studies">
        <h2>Case Studies</h2>
        <div className="case-studies-container">
          <div className="case-study">
            <a href="https://mishipay.com/casestudy/muji" target="_blank" rel="noopener noreferrer">
              <img
                src="https://i0.wp.com/mishipay.com/wp-content/uploads/2021/04/muji-logo.png?fit=300%2C300&ssl=1"
                alt="MUJI and MishiPay"
                width="300"
                height="300"
              />
            </a>
          </div>
          <div className="case-study">
            <a href="https://mishipay.com/casestudies" target="_blank" rel="noopener noreferrer">
              <img
                src="https://i0.wp.com/mishipay.com/wp-content/uploads/2023/11/1.png?fit=300%2C300&ssl=1"
                alt="MishiPay Case Studies"
                width="300"
                height="300"
              />
            </a>
          </div>
          <div className="case-study">
            <a href="https://mishipay.com/casestudies" target="_blank" rel="noopener noreferrer">
              <img
                src="https://i0.wp.com/mishipay.com/wp-content/uploads/2021/03/eroski.png?fit=300%2C300&ssl=1"
                alt="Eroski and MishiPay"
                width="300"
                height="300"
              />
            </a>
          </div>
          <div className="case-study">
            <a href="https://mishipay.com/casestudies" target="_blank" rel="noopener noreferrer">
              <img
                src="https://i0.wp.com/mishipay.com/wp-content/uploads/2022/11/blooming_wear.png?fit=300%2C300&ssl=1"
                alt="Blooming Wear"
                width="300"
                height="300"
              />
            </a>
          </div>
          <div className="case-study">
            <a href="https://mishipay.com/casestudies" target="_blank" rel="noopener noreferrer">
              <img
                src="https://i0.wp.com/mishipay.com/wp-content/uploads/2023/11/2.png?fit=300%2C300&ssl=1"
                alt="Another Case Study"
                width="300"
                height="300"
              />
            </a>
          </div>
          <div className="case-study">
            <a href="https://mishipay.com/casestudies" target="_blank" rel="noopener noreferrer">
              <img
                src="https://i0.wp.com/mishipay.com/wp-content/uploads/2022/08/virgin-mega-store.png?fit=300%2C300&ssl=1"
                alt="Virgin Mega Store"
                width="300"
                height="300"
              />
            </a>
          </div>
        </div>
        {/* View More Button */}
        <div className="view-more-button-container">
          <a href="/" target="_blank" rel="noopener noreferrer">
            <button className="btn-view-more">View More</button>
          </a>
        </div>
      </section>
      {/* MishiPay For Your Business Section */}
      <section className="mishipay-business">
        <h2>MishiPay For Your Business</h2>
        <div className="mishipay-stats">
          <div className="stat">
            <h3>4%</h3>
            <p>Increase in sales from eliminating abandoned baskets</p>
          </div>
          <div className="stat">
            <h3>35%</h3>
            <p>Increase in basket value</p>
          </div>
          <div className="stat">
            <h3>87%</h3>
            <p>Of shoppers checkout with MishiPay</p>
          </div>
        </div>
      </section>
      {/* Scan & Go, Self-Checkout, and Self-Service Sections */}
      <section class="features-section">
        <div class="feature-column">
          <div class="overlay">
            <img
              src="https://i0.wp.com/mishipay.com/wp-content/uploads/2022/05/experience-scan-go.jpg?fit=768%2C507&amp;ssl=1"
              alt="Experience Scan & Go"
              class="feature-image"
            />
            <div class="text-overlay">
              <h2>Scan & Go</h2>
              <p>Increase in-store sales, net revenue per customer, and average basket size</p>
            </div>
          </div>
        </div>

        <div class="feature-column">
          <div class="overlay">
            <img
              src="https://i0.wp.com/mishipay.com/wp-content/uploads/2023/11/FTC-ELO-STORE.jpg?fit=350%2C230&amp;ssl=1"
              alt="FTC ELO Store"
              class="feature-image"
            />
            <div class="text-overlay">
              <h2>Self-Checkout</h2>
              <p>Lower store costs and get instant adoption</p>
            </div>
          </div>
        </div>

        <div class="feature-column">
          <div class="overlay">
            <iframe
              src="https://www.youtube.com/embed/iultXVHX7s8?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1"
              title="MishiPay & Rotana: Self Service Kiosk Live in Abu Dhabi 2024"
              width="640"
              height="360"
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <div class="text-overlay">
              <h2>Self-Service</h2>
              <p>Streamline order management and increase average order size</p>
            </div>
          </div>
        </div>
      </section>
      {/* Customer Reviews Section */}
      <section className="customer-reviews">
        <h2>What Our Clients Think</h2>
        <div className="container">
          <div className="reviews-carousel">
            {reviews.map((review, index) => (
              <div
                className={`review-item${index === currentReview ? ' active' : ''}`}
                key={index}
              >
                <div className="member-img text-center">
                  <img
                    src={review.logo}
                    alt={`${review.name} Logo`}
                    className="review-logo"
                  />
                </div>
                <h5 className="text-center member-name">{review.name}</h5>
                <h6 className="text-center member-title">{review.title}</h6>
                <p className="text-center review-text">{review.reviewText}</p>
                <div className="review-star text-center">
                  {renderStars(review.stars)}
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Arrows */}
          <div className="carousel-arrows">
            <button className="prev-arrow" onClick={handlePrev}>
              &#10094;
            </button>
            <button className="next-arrow" onClick={handleNext}>
              &#10095;
            </button>
          </div>
        </div>
      </section>
      <div><h2>Our Case Studies</h2></div>
      <section class="features-section">
    
        <div class="feature-column">
          
          <div class="overlay">
            <img
              src="https://i0.wp.com/mishipay.com/wp-content/uploads/2023/03/Screenshot-2023-02-22-at-17.38.08.png?resize=970%2C500&ssl=1"
              alt="Experience Scan & Go"
              class="feature-image"
            />
            <div class="text-overlay2">
              <h4>24/7 Unmanned Scan & Go & Self Checkout Kiosk | MishiPay Case Studies</h4>
              <p><a href="#" class="read-more-link">Read More</a></p>
            </div>
          </div>
        </div>


        <div class="feature-column">
          <div class="overlay">
            <img
              src="https://i0.wp.com/mishipay.com/wp-content/uploads/2023/02/emma-sleep.png?fit=1256%2C798&ssl=1"
              alt="FTC ELO Store"
              class="feature-image"
            />
            <div class="text-overlay2">
              <h4>Emma Sleep Scan & Go | MishiPay Case Studies</h4>
              <p><a href="#" class="read-more-link">Read More</a></p>
            </div>
          </div>
        </div>

        <div class="feature-column">
          <div class="overlay">
            <img
              src="https://i0.wp.com/mishipay.com/wp-content/uploads/2022/08/virgin-megastore.jpeg?fit=512%2C338&ssl=1"
              alt="FTC ELO Store"
              class="feature-image"
            />
            <div class="text-overlay2">
              <h4>Virgin Megastore Scan & Go electronic goods results | MishiPay Case Studies</h4>
              <p><a href="#" class="read-more-link">Read More</a></p>
            </div>
          </div>
        </div>

      </section>

      <div><h2>As seen on</h2></div>
      <section className="elementor-section">
      <div className="elementor-column">
        <div className="elementor-widget-wrap">
          <div className="elementor-widget-image">
            <a href="https://i0.wp.com/mishipay.com/wp-content/uploads/2021/04/logo_bloomberg.png?fit=300%2C168&ssl=1">
              <img
                loading="lazy"
                decoding="async"
                src="https://i0.wp.com/mishipay.com/wp-content/uploads/2021/04/logo_bloomberg.png?fit=300%2C168&ssl=1"
                alt="logo_bloomberg"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="elementor-column">
        <div className="elementor-widget-wrap">
          <div className="elementor-widget-image">
            <a href="https://www.forbes.com/sites/sophiamatveeva/2020/01/31/four-trends-driving-retail-technology-today/?sh=1074dfcc6703">
              <img
                loading="lazy"
                decoding="async"
                src="https://i0.wp.com/mishipay.com/wp-content/uploads/2021/04/logo_forbes.png?fit=300%2C168&ssl=1"
                alt="logo_forbes"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="elementor-column">
        <div className="elementor-widget-wrap">
          <div className="elementor-widget-image">
            <a href="https://techcrunch.com/2017/12/08/mishipay/">
              <img
                loading="lazy"
                decoding="async"
                width="300"
                height="168"
                src="https://i0.wp.com/mishipay.com/wp-content/uploads/2021/04/logo_techcrunch.png?fit=300%2C168&ssl=1"
                alt="logo_techcrunch"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="elementor-column">
        <div className="elementor-widget-wrap">
          <div className="elementor-widget-image">
            <a href="https://i0.wp.com/mishipay.com/wp-content/uploads/2021/04/logo_managementtoday.png?w=363&ssl=1">
              <img
                loading="lazy"
                decoding="async"
                src="https://i0.wp.com/mishipay.com/wp-content/uploads/2021/04/logo_managementtoday.png?w=363&ssl=1"
                alt="logo_managementtoday"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="elementor-column">
        <div className="elementor-widget-wrap">
          <div className="elementor-widget-image">
            <a href="https://i0.wp.com/mishipay.com/wp-content/uploads/2021/04/logo_wired.png?w=363&ssl=1">
              <img
                loading="lazy"
                decoding="async" 
                src="https://i0.wp.com/mishipay.com/wp-content/uploads/2021/04/logo_wired.png?w=363&ssl=1"
                alt="logo_wired"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
    <section className="oppi_download_app_wrap">
      <div className="container">
        <div className="row col_reverse">
          <div className="col-lg-6 col-md-6 col-sm-6 col-12 oppi_mockup_img">
            <div className="mockup_inner">
              <div className="download_1 wow fadeInUp">
                <img
                  decoding="async"
                  src="https://i0.wp.com/mishipay.com/wp-content/uploads/2021/04/Download-app-promo.png?w=1170&amp;ssl=1"
                  alt="download_mockup"
                  className="img-fluid"
                   
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="oppi_download_app_content m_w_475">
              <h2 className="sec_title wow fadeInUp" >
                All of this is now available on your smartphone.
              </h2>
              <p className="download_para wow fadeInUp">
                Put the power of mobile self-checkout in your shopper's pocket. Empower them to scan and pay with ease.
              </p>
              <div className="oppi_btn_group">
                <a
                  href="https://play.google.com/store/apps/details?id=com.mishipay.mainapp&amp;hl=en_GB"
                  className="oppi_dbtn btn_solid_color wow fadeInUp"
                 
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    width="1em"
                    height="1em"
                    viewBox="0 0 512 512"
                    className="iconify"
                  >
                    <path
                      fill="currentColor"
                      d="M325.3 234.3L104.6 13l280.8 161.2zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256zm425.2 225.6l-58.9-34.1l-65.7 64.5l65.7 64.5l60.1-34.1c18-14.3 18-46.5-1.2-60.8M104.6 499l280.8-161.2l-60.1-60.1z"
                    ></path>
                  </svg>
                  Play Store
                </a>
                <a
                  href="https://apps.apple.com/gb/app/mishipay/id1064951168"
                  className="oppi_dbtn btn_border wow fadeInUp"
                 
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    width="1em"
                    height="1em"
                    viewBox="0 0 1024 1024"
                    className="iconify"
                  >
                    <path
                      fill="currentColor"
                      d="M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5c-34.9-50-87.7-77.5-157.3-82.8c-65.9-5.2-138 38.4-164.4 38.4c-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8c23.8 68.2 109.6 235.3 199.1 232.6c46.8-1.1 79.9-33.2 140.8-33.2c59.1 0 89.7 33.2 141.9 33.2c90.3-1.3 167.9-153.2 190.5-221.6c-121.1-57.1-114.6-167.2-114.6-170.7m-105.1-305c50.7-60.2 46.1-115 44.6-134.7c-44.8 2.6-96.6 30.5-126.1 64.8c-32.5 36.8-51.6 82.3-47.5 133.6c48.4 3.7 92.6-21.2 129-63.7"
                    ></path>
                  </svg>
                  App Store
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Home;  