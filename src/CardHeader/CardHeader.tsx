import * as React from 'react';
import * as PropTypes from 'prop-types';

export interface CardHeaderProps {

}

const propTypes = {};
const defaultProps = {};

const CardHeader: React.SFC = ({
  children
}) => (
  <div className="card-header">{children}</div>
);

CardHeader.propTypes = propTypes;
CardHeader.defaultProps = defaultProps;

export default CardHeader;
