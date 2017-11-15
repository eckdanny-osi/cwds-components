import * as React from 'react';
import * as PropTypes from 'prop-types';
import * as classNames from 'classnames';
import Container from '../Container';
import Button from '../Button';
import Icon from '../Icon';

export interface HeaderProps { }

const propTypes = { };

const defaultProps = { };

const Header: React.SFC<HeaderProps> = ({
  children
}) => (
  <div className="page-header d-flex">
      <div className="container d-flex flex-row align-items-center">
        <div className="mr-auto p-2 text-white">
          <h2 style={{
            fontSize: '28px',
            fontWeight: 200,
            letterSpacing: '-0.3px',
            textAlign: 'left',
            color: '#ffffff'
          }}>Cambell Family</h2>
        </div>
        <div className="p-2 text-white text-sm">Secondary Actions <Icon name="chevron-down"/></div>
        <div className="p-2">
          <Button className="btn-outline-light">Submit for Review</Button>
        </div>
      </div>
    </div>
);

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
