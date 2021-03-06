import * as React from 'react';
import * as classNames from 'classnames';
import * as PropTypes from 'prop-types';

export interface ButtonProps {
  type?: string | React.ComponentType;
  size?: string;
  onClick?: Function;
  className?: string;
  disabled?: boolean;
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
  type: 'primary',
  disabled: false,
};

const Button: React.SFC<ButtonProps> = ({
  type,
  size,
  className,
  children,
  disabled,
  onClick= () => {}
}) => (
  <button
    type="button"
    className={classNames([
      className,
      'btn',
      `btn-${type}`,
      size && `btn-${size}`
    ])}
    disabled={disabled}
    onClick={() => onClick()}
  >
    {children}
  </button>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
