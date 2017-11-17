import * as React from 'react';
import * as PropTypes from 'prop-types';

export interface CardFooterProps {

}

const propTypes = {};
const defaultProps = {};

const CardFooter: React.SFC = ({
  children
}) => (
  <div className="card-footer">{children}</div>
);

CardFooter.propTypes = propTypes;
CardFooter.defaultProps = defaultProps;

export default CardFooter;
