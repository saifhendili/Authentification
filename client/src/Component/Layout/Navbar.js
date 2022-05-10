import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSignOutAlt, faUser, faCog } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

function Navbar({ auth: { isAuthenticated, loading, user }, logout }) {
  const loggout = (e) => {
    e.preventDefault();
    logout();
  };

  const authLinks = (
    
    <Fragment>
    <header class="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <nav class="main-nav">
              <a href="index.html" class="logo">
                <img src="assets/images/logo.png" alt="Chain App Dev"/>
              </a>
            
              <ul class="nav">
                <li class="scroll-to-section"><a href="#top" class="active">Home</a></li>
                <li class="scroll-to-section"><a href="#services">Services</a></li>
                <li class="scroll-to-section"><a href="#about">About</a></li>
              
                <li class="scroll-to-section"><a    onClick={(e) => loggout(e)} >Log out</a></li>
                <li data-tooltip="tooltip" data-placement="left" title="Mail"><div class="gradient-button"><a  href='mailto:artweb@gmail.com'><i class="fa fa-sign-in-alt"></i> Contact us Now</a></div></li> 
              </ul>
              <a class='menu-trigger'>
                  <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>


       {/* <li>
          <Link to='register' href='' className='linknav'>
            Register
          </Link>
          <div id='indicator'></div>
        </li>
        <li>
          <Link to='login' className='linknav'>
            Login
          </Link>
          <div id='indicator'></div>
        </li> */}
    </Fragment>
    // <div>
    //   <ul className='listnavbar'>
    //     <li>
    //       <Link to='home' className='linknav'>
    //         home
    //       </Link>
    //       <div id='indicator'></div>
    //     </li>
    //     <li>
    //       <Link to='profile' className='linknav'>
    //         <FontAwesomeIcon className='' icon={faUser} />
    //         Profile
    //       </Link>
    //       <div id='indicator'></div>
    //     </li>
    //     <li>
    //       <Link to='dashboard' className='linknav'>
    //         <FontAwesomeIcon icon={faCog} />
    //         Dashboard
    //       </Link>
    //       <div id='indicator'></div>
    //     </li>
    //     <li>
    //       <a onClick={(e) => loggout(e)} href='#!' className='linknav'>
    //         <FontAwesomeIcon className='faSignOutAlt' icon={faSignOutAlt} />
    //         <span className='logout'>Logout</span>
    //       </a>
    //       <div id='indicator'></div>
    //     </li>
    //   </ul>
    // </div>
  );

  const guestLinks = (

    <Fragment>
  <header class="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="main-nav">
            <a href="index.html" class="logo">
              <img src="assets/images/logo.png" alt="Chain App Dev"/>
            </a>
          
            <ul class="nav">
              <li class="scroll-to-section"><a href="#top" class="active">Home</a></li>
              <li class="scroll-to-section"><a href="#about">About</a></li>
              <li class="scroll-to-section">
                  <Link to="login"><a >Login</a></Link></li>
                  <li class="scroll-to-section">    <Link to="register"><a>Sign up</a></Link></li>

              <li data-tooltip="tooltip" data-placement="left" title="Mail"><div class="gradient-button"><a  href='mailto:artweb@gmail.com'><i class="fa fa-sign-in-alt"></i> Contact us Now</a></div></li> 
            </ul>        
            <a class='menu-trigger'>
                <span>Menu</span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  </header>
     {/* <li>
        <Link to='register' href='' className='linknav'>
          Register
        </Link>
        <div id='indicator'></div>
      </li>
      <li>
        <Link to='login' className='linknav'>
          Login
        </Link>
        <div id='indicator'></div>
      </li> */}
  </Fragment>
   

  );

  const adminLinks = (
  
    <header class="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="main-nav">
            <a href="index.html" class="logo">
              <img src="assets/images/logo.png" alt="Chain App Dev"/>
            </a>
          
            <ul class="nav">
              <li class="scroll-to-section"><a href="#top" class="active">Home</a></li>
              <li class="scroll-to-section"><a href="#about">About</a></li>
              <li class="scroll-to-section">
                  <Link to="dashboard"><a >Abonnemtnt</a></Link></li>
                  <li class="scroll-to-section"><a    onClick={(e) => loggout(e)} >Log out</a></li>

              <li data-tooltip="tooltip" data-placement="left" title="Mail"><div class="gradient-button"><a  href='mailto:artweb@gmail.com'><i class="fa fa-sign-in-alt"></i> Contact us Now</a></div></li> 
            </ul>        
            <a class='menu-trigger'>
                <span>Menu</span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  </header>
    )
  // );

  return (
    <div className='mynavvbar'>
      <Link to='/'>logo</Link>

      <Fragment>
        {loading
          ? null
          : isAuthenticated && user !== null && user.typeuser =="User" &&user.Abonnemtnt=="normal"
          ?adminLinks
          : isAuthenticated && user !== null && user.typeuser =="User"&&user.Abonnemtnt=="premium"
          ? authLinks
          : guestLinks  
           }
      </Fragment>

      {/* <Fragment>
        {profile === null || loading
          ? null
          : isAuthenticated && profile.user.typeuser == 'isAdmin'
          ? adminLinks
          : isAuthenticated
          ? authLinks
          : guestLinks}
      </Fragment> */}
    </div>
  );
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,

  // logoutadmin: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,

  // admin: state.admin,
});

export default connect(mapStateToProps, {
  logout,
})(Navbar);
