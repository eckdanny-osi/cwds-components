import * as React from 'react';
import { StatelessComponent } from 'react';
import * as PropTypes from 'prop-types';

export interface CardProps {
  cardHeaderText: string;
}

const Card: StatelessComponent<CardProps> = ({ cardHeaderText, children }) => (
  <div className="bg-lightest-grey container">
    <div className="card edit double-gap-top">
      <div className="card-header">
        <span>{cardHeaderText}</span>
      </div>
      <div className="card-body">
        {children}
        <div className="clearfix" />
      </div>
    </div>
  </div>
);

Card.propTypes = {
  cardHeaderText: PropTypes.string,
};

Card.defaultProps = {
  // nothing here
};

export default Card;
