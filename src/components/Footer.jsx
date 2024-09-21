import React from 'react';
import styled from 'styled-components';
import SocialIcons from './SocialIcons';

const FooterWrapper = styled.footer`
  background-color: #222;
  color: white;
  padding: 20px;
  text-align: center;
`;

function Footer() {
  return (
    <FooterWrapper>
      <p>&copy; 2024 Sirdi</p>
      <SocialIcons />
    </FooterWrapper>
  );
}

export default Footer;
