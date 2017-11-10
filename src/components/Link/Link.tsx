import * as React from 'react';
import { StatelessComponent } from 'react';
import * as PropTypes from 'prop-types';

export interface LinkProps {
  href?: string;
  className?: string;
}

const Link: StatelessComponent<LinkProps> = ({ href, children }) => (
  <a href={href}>
    {children}
  </a>
);

Link.propTypes = {
  href: PropTypes.string,
};

Link.defaultProps = {
  // nothing here
};

export default Link;
