import React from 'react';
import { Link } from 'react-router-dom';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

import logo from '../Images/streemly_logo.png'
import fb from '../Images/facebook.png';
import tw from '../Images/twitter.png';
import inst from '../Images/instagram.png';
import pin from '../Images/pinterest.png';

const Footer = (props) => {

    return(

        <MDBFooter color="blue-grey" className="page-footer font-small lighten-5 pt-0">
            <div style={{ backgroundColor: "#A69300" }}>
              <MDBContainer>
                <MDBRow className="py-2 d-flex align-items-center">
                  <MDBCol md="6" lg="5" className="text-center text-md-left mb-4 mb-md-0">
                    <h6 className="mb-0 white-text">
                      Get connected with us
                    </h6>
                  </MDBCol>
                  <MDBCol md="6" lg="7" className="text-center text-md-right">
                    <a className="fb-ic ml-0" href="https://www.facebook.com/LambdaSchoolOnline/">
                      <img src={fb} alt='facebook link' className='social-app' />
                    </a>{' '}
                    <a href className="tw-ic" href="https://twitter.com/lambdaschool">
                      <img src={tw} alt='twitter link' className='social-app' />
                    </a>{' '}
                    <a className="gplus-ic" href="http://pinterest.com">
                      <img src={pin} alt='pinterest link' className='social-app' />
                    </a>{' '}
                    <a className="ins-ic" href="https://instagram.com/lambdaschool">
                      <img src={inst} alt='instagram link' className='social-app' />
                    </a>{' '}
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </div>
            <MDBContainer className="mt-2 mb-1 text-center text-md-left">
              <MDBRow className="mt-1">
                <MDBCol md="3" lg="4" xl="3" className="mb-4 dark-grey-text">
    
                  <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                  <p>
                    <Link to='/'><img src={logo} alt="streemly logo" className="footer-logo" /></Link>
                  </p>
                </MDBCol>
                <MDBCol md="2" lg="2" xl="2" className="mb-4 dark-grey-text">
    
                </MDBCol>
                <MDBCol md="3" lg="2" xl="2" className="mb-4 dark-grey-text">
    
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBFooter>
        );
    
};

export default Footer;