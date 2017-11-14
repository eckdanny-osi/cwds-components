import * as React from 'react';
import * as PropTypes from 'prop-types';
import * as classNames from 'classnames';

export interface NavItemProps {
  tag: any;  // Function | string;
  className: string;
}

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
};

const defaultProps = {
  tag: 'li',
};

const NavItem: React.SFC<NavItemProps> = ({
  className,
  tag: Tag,
  ...attrs
}) => (
  <Tag
    {...attrs}
    className={classNames(
      className,
      'nav-item'
    )}
  />
);

NavItem.propTypes = propTypes;
NavItem.defaultProps = defaultProps;

export default NavItem;
