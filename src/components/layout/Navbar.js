import { Link } from 'react-router-dom';
import classes from '../../styles/Navbar.module.css';
import resume from '../../pdf/AdolfSchmuck_Resume.pdf';

// Hide nav bar on scroll down and show it on scroll up -
// https://stackoverflow.com/questions/51340863/hide-nav-bar-on-scroll-down-and-show-it-on-scroll-up
// Also: https://www.devtwins.com/blog/sticky-navbar-hides-scroll

// window.onscroll = function (e) {
//   var scrollY = window.pageYOffset || document.documentElement.scrollTop;
//   var header = document.querySelector('header');
//   var height = -header.clientHeight;
//   header.style.transition = 'transform 0.1s';

//   scrollY <= Math.max(this.lastScroll, 50) ||
//   window.innerWidth <= 1200 ||
//   this.loaded === undefined
//     ? (header.style.transform = 'translateY(0px)')
//     : (header.style.transform = 'translateY(' + height + 'px)');

//   this.lastScroll = scrollY;
//   this.loaded = true;
// };

const Navbar = () => (
  <div className='navbar'>
    <header className={classes.Navbar}>
      <div className={`${classes.NavbarTitle} ${classes.NavbarItem}`}>
        <div>
          <Link className={classes.BrandLink} to='/'>
            Adolf Schmuck
          </Link>
        </div>
      </div>
      <ul>
        <div className={classes.ItemsDiv}>
          <div className={classes.Pages}>
            <li className={classes.NavbarItem}>
              <Link className={classes.NavLink} to='/about'>
                About
              </Link>
            </li>
            <li className={classes.NavbarItem}>
              <Link className={classes.NavLink} to='/portfolio'>
                Portfolio
              </Link>
            </li>
            <li className={classes.NavbarItem}>
              <Link className={classes.NavLink} to='/contact'>
                Contact
              </Link>
            </li>
          </div>

          <div className={classes.Socials}>
            <li className={classes.NavbarItem}>
              <a
                className={classes.SocialIcons}
                href='https://github.com/answebdev'
                rel='noopener noreferrer'
                target='_blank'
                // title='GitHub'
              >
                <i className='fab fa-github'></i>
              </a>
            </li>
            <li className={classes.NavbarItem}>
              <a
                className={classes.SocialIcons}
                href='https://www.linkedin.com/in/adolf-schmuck/'
                rel='noopener noreferrer'
                target='_blank'
                // title='LinkedIn'
              >
                <i className='fab fa-linkedin'></i>
              </a>
            </li>
            <li className={classes.NavbarItem}>
              <a
                className={classes.SocialIcons}
                href={resume}
                rel='noopener noreferrer'
                target='_blank'
                title='Resume'
              >
                <i className='fa-solid fa-file'></i>
              </a>
            </li>
          </div>
        </div>
      </ul>
    </header>
  </div>
);

export default Navbar;
