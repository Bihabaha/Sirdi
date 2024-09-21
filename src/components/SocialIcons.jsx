import React from 'react';
import { FaWhatsapp, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';
import styled from 'styled-components';

const IconsWrapper = styled.div`
  margin-top: 10px;
  a {
    margin: 0 10px;
    color: white;
    font-size: 24px;
    &:hover {
      color: #004aad;
    }
  }
`;

function SocialIcons() {
  return (
    <IconsWrapper>
      <a href="tel:0667674891" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp />
      </a>
      <a href="https://www.facebook.com/profile.php?id=61565625396836&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
      </a>
      <a href="https://www.instagram.com/aytalismail?igsh=MXYzcG9jdGxvNHEwNA==" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="mailto:yourcarwash@gmail.com">
        <FaEnvelope />
      </a>
    </IconsWrapper>
  );
}

export default SocialIcons;
