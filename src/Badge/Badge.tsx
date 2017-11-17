import * as React from 'react';
import * as classNames from 'classnames';
import * as PropTypes from 'prop-types';
import { Children } from 'react';

export interface BadgeProps {
  color?: string;
  pill?: boolean;
  tag?: string | React.ComponentType;
  href?: string;
  className?: string;
}

const propTypes = {
  color: PropTypes.string,
  pill: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
};

const defaultProps = {
  color: 'secondary',
  pill: true,
  tag: 'span'
};

const Badge: React.SFC<BadgeProps> = ({
  color,
  className,
  pill,
  tag: Tag,
  ...attrs
}) => {

  if (attrs.href && Tag === 'span') {
    Tag = 'a';
  }

  return (
    <Tag
      {...attrs}
      className={classNames(
        className,
        'badge',
        `badge-${color}`,
        pill && 'badge-pill',
      )}
    />
  );
};

Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;

export default Badge;
