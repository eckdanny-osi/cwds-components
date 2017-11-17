import * as React from 'react';
import * as PropTypes from 'prop-types';
import * as classNames from 'classnames';

export interface CardProps {
  tag?: any; // TODO: string | Function;
  inverse?: boolean;
  color?: string;
  body?: boolean;
  outline?: boolean;
  className?: string;
}

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  inverse: PropTypes.bool,
  color: PropTypes.string,
  body: PropTypes.bool,
  outline: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'div'
};

const Card: React.SFC<CardProps> = ({
  className,
  color,
  body,
  inverse,
  outline,
  tag: Tag,
  ...attrs
}) => (
  <Tag {...attrs} className={classNames(
    className,
    'card',
    inverse ? 'text-white' : false,
    color ? `${outline ? 'border' : 'bg'}-${color}` : false
  )} />
);

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
