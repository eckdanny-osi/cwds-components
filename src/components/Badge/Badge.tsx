import * as React from 'react';
import * as classnames from 'classnames';
import * as PropTypes from 'prop-types';
import { Children } from 'react';

export interface BadgeProps {
  type: string;
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
  ])
};

const defaultProps = {
  type: 'secondary'
};

const Badge: React.SFC<BadgeProps> = ({ type, children }) => (
  <button
    type="button"
    className={classnames([
      'btn',
      `btn-${type}`
    ])}
  >
    {children}
  </button>
  // <span class="badge badge-pill badge-primary">Primary</span>
);

Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;

export default Badge;
