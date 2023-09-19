// @ts-nocheck
import React from 'react';
import { Link } from 'gatsby';
import { StyledFooter } from './Footer.styles';
import { StyledIcon } from '../StyledIcon/StyledIcon';
import FacebookIcon from '../../assets/icons-components/facebook.svg';
import InstagramIcon from '../../assets/icons-components/instagram.svg';

const Footer = () => (
  <StyledFooter>
    <h4>Modern Studio</h4>
    <div>
      <Link to="/oferty">Oferty</Link>
      <Link to="/realizacje">Realizacje</Link>
      <Link to="/zespol">Zespół</Link>
      <Link to="/uslugi">Usługi</Link>
      <Link to="/kontakt">Kontakt</Link>
    </div>
    <div>
      <StyledIcon isDark>
        <FacebookIcon />
      </StyledIcon>
      <StyledIcon isDark>
        <InstagramIcon />
      </StyledIcon>
    </div>
  </StyledFooter>
);

export default Footer;
