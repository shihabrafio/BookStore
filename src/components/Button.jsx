import React from 'react';

const Button = ({ onClick, className, children }) => (
  <button type="button" onClick={onClick} className={className}>
    {children}
  </button>
);

Button.defaultProps = {
  className: '',
  onClick: () => {},
};

export default Button;
