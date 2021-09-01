import React from "react";
import styled from "styled-components";

const Footer = () => {
    return (
        <FooterSection>
            <div className='footer-middle'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 ">
                            <h4>Conatct us</h4>
                            <span className="d-block">Egypt</span>
                            <span className="d-block">Cairo st.</span>
                            <span className="d-block">Phone: 000011112222</span>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h4 className="text-white">Countries</h4>
                            <ul className="list-unstyled">
                                <li><a href='/'>Alex</a></li>
                                <li><a href='/'>Cairo</a></li>
                                <li><a href='/'>Aswan</a></li>
                                <li><a href='/'>Luxor</a></li>
                                <li><a href='/'>Minia</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h4 className="text-white">shrines</h4>
                            <ul className="list-unstyled">
                                <li><a href='/'>Pyramides</a></li>
                                <li><a href='/'>Egyptian Museum</a></li>
                                <li><a href='/'>Cairo Tower</a></li>
                                <li><a href='/'>Abosimbel Temple</a></li>
                                <li><a href='/'>The Castel</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h4 className="text-white">Water Resources</h4>
                            <ul className="list-unstyled">
                                <li><a href='/'>Nile River</a></li>
                                <li><a  href='/'>Red sea</a></li>
                                <li><a href='/'>White sea</a></li>
                                <li><a href='/'>Wells</a></li>
                                <li><a href='/'>Rains</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p className="text-xs-center">
                            &copy; Copyright {new Date().getFullYear()} <strong>Egypt</strong> All Rights
            Reserved.
          </p>
                    </div>
                </div>
            </div>
        </FooterSection>
    );
};

export default Footer;

const FooterSection = styled.footer`
.footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite)
}
.footer-bottom{
    padding-top: 3rem;
    padding-bottom: 2rem;
}
li a {
    color: var(--mainGrey);
    &:hover{
        color: var(--mainLightGrey);

    }
}

`
