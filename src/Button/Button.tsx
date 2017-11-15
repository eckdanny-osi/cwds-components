import * as React from 'react';
import * as classnames from 'classnames';
import * as PropTypes from 'prop-types';

export interface ButtonProps {
  type: string;
  size?: string;
  className?: string[];
}

const propTypes = {
  type: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
    'link',
  ]),
  size: PropTypes.oneOf(['sm', 'lg']),
};

const defaultProps = {
  type: 'primary'
};

const Button: React.SFC<ButtonProps> = ({
  type,
  size,
  className,
  children,
}) => (
  <button
    type="button"
    className={classnames([
      className,
      'btn',
      `btn-${type}`,
      size && `btn-${size}`
    ])}
  >
    {children}
  </button>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
