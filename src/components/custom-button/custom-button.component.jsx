import React from 'react';
import PropTypes from 'prop-types';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
    {children}
  </button>
);

CustomButton.propTypes = {
  isGoogleSignIn: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default CustomButton;
