import React from "react";
import "./FooterSec.css";
import { FaFacebook, FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Col, Row, Container, Nav } from "react-bootstrap";

const FooterSec = () => {
  return (
    <footer>
    <div className='footer'>
            <Container>
                <div className='row d-flex justify-content-between'>
                    <div className='footer-icon col-md-2 col-9'>
                        <div className='d-flex justify-content-between'>
                            <Nav.Link><FaFacebook style={{color: 'white', fontSize: '2rem', marginTop: '10px'}} className='footer-icon'/></Nav.Link>
                            <Nav.Link><FaInstagram  style={{color: 'white', fontSize: '2rem', marginTop: '10px'}} className='footer-ico'/></Nav.Link>
                            <Nav.Link><FaTwitter  style={{color: 'white', fontSize: '2rem', marginTop: '10px'}} className='footer-ico'/></Nav.Link>
                            <Nav.Link><FaYoutube  style={{color: 'white', fontSize: '2rem', marginTop: '10px'}} className='footer-ico'/></Nav.Link>
                        </div>
                    </div>
                    <div className='col-md-4 col-12'>
                        <p class="powered">powered by <span style={{fontWeight: '700'}}>CROSS-FIT GYM</span></p>
                    </div>

                </div>
            </Container>
        </div>
    </footer>
  );
};

export default FooterSec;
