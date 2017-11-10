import * as React from 'react';
import { StatelessComponent } from 'react';
import * as PropTypes from 'prop-types';
import * as classnames from 'classnames';

export interface LinkProps {
  href?: string;
  className?: string;
}

const Link: StatelessComponent<LinkProps> = ({ href, children, className }) => (
  <a
    href={href}
    className={classnames('cwds-link', className)}
  >
    {children}
  </a>
);

Link.propTypes = {
  href: PropTypes.string,
  className: PropTypes.string,
};

Link.defaultProps = {
  // nothing here
};

export default Link;
