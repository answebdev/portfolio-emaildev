import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Container, Row, Col, Image } from 'react-bootstrap';
import $ from 'jquery';
import classes from '../../styles/Home.module.css';
import '../../styles/Home.css';
import profile from '../../img/profile-alt.webp';
import resume from '../../pdf/AdolfSchmuck_Resume.pdf';

const Home = () => {
  // Put animation effect in useEffect to ensure animation runs when component renders
  useEffect(() => {
    $(document).ready(function () {
      setTimeout(function () {
        $('#main').removeClass('is-loading');
      }, 1200);
    });
  });

  return (
    <div>
      <Helmet>
        <title>Adolf Schmuck</title>
        <style type='text/css'>{`        
        .navbar,
        .footer {
          display: none;
        }

        body {
          letter-spacing: 1px;
          height: 100%;
        }
    `}</style>
      </Helmet>
      <div className={classes.Landing}>
        <div className={classes.Bg}></div>
        <Container className='container' fluid>
          <Row>
            <Col md={12}>
              {/* Landing page Adapted from: https://codepen.io/donovanh/pen/PpbvZB  */}

              <header className={classes.Header}>
                <section className='header-content'>
                  <Image
                    className='rocky-dashed animated fadeIn'
                    id='logo'
                    src={profile}
                    alt='Profile picture'
                    fluid
                  />
                  <div id='main' className='is-loading'>
                    <h1 className='header-title' id='name'>
                      ADOLF SCHMUCK
                    </h1>
                  </div>
                  <h3 className='header-subtitle animated zoomIn'>
                    EMAIL DEVELOPER
                  </h3>

                  <br />
                  <br />

                  <div className='animated zoomIn'>
                    <span tooltip='Home' flow='down'>
                      <a
                        // data-tooltip='Home'
                        href='/'
                        className='header-button animated fadeInLeft btn-links'
                      >
                        <i className='fas fa-home'></i>
                      </a>
                    </span>

                    <span tooltip='About' flow='down'>
                      <Link
                        // data-tooltip='About'
                        to='/about'
                        className='header-button animated fadeInLeft btn-links'
                      >
                        <i className='fas fa-book'></i>
                      </Link>
                    </span>

                    <span tooltip='Portfolio' flow='down'>
                      <Link
                        // data-tooltip='Projects'
                        to='/portfolio'
                        className='header-button animated fadeInUp btn-links'
                      >
                        <i className='fas fa-briefcase'></i>
                      </Link>
                    </span>

                    <span tooltip='Contact' flow='down'>
                      <Link
                        // data-tooltip='Contact'
                        to='/contact'
                        className='header-button animated fadeInRight btn-links'
                      >
                        <i className='fas fa-envelope-square'></i>
                      </Link>
                    </span>

                    <span tooltip='Resume' flow='down'>
                      <a
                        href={resume}
                        rel='noopener noreferrer'
                        target='_blank'
                        className='header-button animated fadeInRight btn-links'
                      >
                        <i className='far fa-file-pdf'></i>
                      </a>
                    </span>
                  </div>
                </section>
              </header>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;

// import { Link } from 'react-router-dom';
// import { Helmet } from 'react-helmet';
// import { motion } from 'framer-motion';
// import classes from '../../styles/Home.module.css';

// const Home = () => {
//   return (
//     <div>
//       <Helmet>
//         <title>Adolf Schmuck</title>
//         <style type='text/css'>{`
//         .navbar,
//         .footer {
//           display: none;
//         }

//         body {
//           letter-spacing: 1px;
//           height: 100%;
//         }
//     `}</style>
//       </Helmet>
//       <div className={classes.Landing}>
//         <div className={classes.Bg}></div>
//         <motion.div
//           initial={{
//             opacity: 0,
//             x: -100,
//             y: 0,
//           }}
//           animate={{
//             opacity: 1,
//             x: 0,
//             y: 0,
//           }}
//           transition={{
//             duration: 1,
//           }}
//         >
//           <div className={`${classes.Container} ${classes.LandingFlex}`}>
//             <h1 className={classes.Title}>Adolf Schmuck</h1>
//             <div className={classes.Description}>Email Developer</div>
//             <div className={classes.ButtonContainer}>
//               <Link className={classes.Button} to='/about'>
//                 Explore
//               </Link>
//               <Link className={classes.Button} to='/contact'>
//                 Get in Touch
//               </Link>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Home;
