import * as React from 'react';
import { StatelessComponent } from 'react';
import * as PropTypes from 'prop-types';

export interface CardProps {
  cardHeaderText?: string;
}

const propTypes = {
  cardHeaderText: PropTypes.string,
};

const defaultProps = {
  // nothing here
};

const Card: StatelessComponent<CardProps> = ({
  cardHeaderText,
  children
}) => (
  <div className="card">
    {children}
  </div>
);

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
