import * as React from 'react';
import * as PropTypes from 'prop-types';
import * as classNames from 'classnames';

export interface ListGroupProps {
  flush?: boolean;
}

const propTypes = {
  flush: PropTypes.bool,
};

const defaultProps = {
  flush: true,
};

const ListGroup: React.SFC<ListGroupProps> = ({
  flush,
  children
}) => (
  <div className={classNames(
    'list-group',
    flush && 'list-group-flush',
  )}>
    {children}
  </div>
);

ListGroup.propTypes = propTypes;
ListGroup.defaultProps = defaultProps;

export default ListGroup;

