import * as React from 'react';
import * as PropTypes from 'prop-types';
import * as classNames from 'classnames';
import Container from '../Container';

export interface NavBarProps { }

const propTypes = { };

const defaultProps = { };

const NavBar: React.SFC<NavBarProps> = () => (
  <div style={{backgroundColor: "blue", overflow: "auto"}}>
    <Container><h1>NavBar</h1></Container>
  </div>
);

NavBar.propTypes = propTypes;
NavBar.defaultProps = defaultProps;

export default NavBar;
