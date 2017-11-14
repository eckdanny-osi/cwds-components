import * as React from 'react';
import * as PropTypes from 'prop-types';
import * as classNames from 'classnames';
import Container from '../Container';

export interface HeaderProps { }

const propTypes = { };

const defaultProps = { };

const Header: React.SFC<HeaderProps> = () => (
  <div style={{backgroundColor: "cyan", overflow: "auto"}}>
    <Container><h1>KitchenSink</h1></Container>
  </div>
);

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
