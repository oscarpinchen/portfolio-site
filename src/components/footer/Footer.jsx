import React from "react";
import styled from "styled-components";
import CurrentYear from "../../atoms/currentYear/CurrentYear.jsx";

const FooterContent = styled.footer`
  // position: absolute;
  bottom: 16px;
  width: 100%;
  text-align: center;
  color: ${({ theme }) => theme.copyrightText};
`;

function Footer() {
  return <FooterContent>Copyright ⓒ {CurrentYear}</FooterContent>;
}

export default Footer;
