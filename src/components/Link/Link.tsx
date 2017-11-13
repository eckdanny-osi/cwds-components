import * as React from 'react';
import * as PropTypes from 'prop-types';
import * as classnames from 'classnames';

export interface LinkProps {
  href?: string;
  className?: string;
}

const propTypes = {
  href: PropTypes.string,
  className: PropTypes.string,
};

const defaultProps = {
  // nothing here
};

const Link: React.SFC<LinkProps> = ({ href, children, className }) => (
  <a
    href={href}
    className={classnames('cwds-link', className)}
  >
    {children}
  </a>
);

Link.propTypes = propTypes;
Link.defaultProps = defaultProps;

export default Link;
