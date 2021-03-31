import { device } from '../globalStyles/device';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { func, string } from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const moonIcon = <FontAwesomeIcon icon={faMoon} />;
const sunIcon = <FontAwesomeIcon icon={faSun} />;

const Button = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.togglerText};
  :hover {
    color: ${({ theme }) => theme.togglerHoverColor};
  }
  cursor: pointer;
  :focus {
    outline: none;
  }
  font-size: 1.8rem;
  overflow: hidden;
  position: absolute;
  transition-duration: 0.2s;

  @media ${device.extraSmallDevice} {
    right: 0.4rem;
    top: 0.5rem;
  }
  
  @media ${device.smallDevice} {
    right: 0.7rem;
    top: 1rem;
  }
  
  @media ${device.mediumDevice} {
    right: 1rem;
    top: 1.2rem;
  }

  @media ${device.largeDevice} {
    right: 1.2rem;
    top: 1.4rem;
  }
  
  @media ${device.extraLargeDevice} {
    right: 1.4rem;
    top: 1.6rem;
  }
`;
const Toggle = ({ theme, toggleTheme }) => {
  return (
    <Button onClick={toggleTheme}>
      {theme === 'light' ? moonIcon : sunIcon}
    </Button>
  );
};
Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;
