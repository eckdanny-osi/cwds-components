import * as React from 'react';
import * as PropTypes from 'prop-types';

export interface CardBodyProps {

}

const propTypes = {};
const defaultProps = {};

const CardBody: React.SFC = ({
  children
}) => (
  <div className="card-body">{children}</div>
);

CardBody.propTypes = propTypes;
CardBody.defaultProps = defaultProps;

export default CardBody;
