import * as React from 'react';
import * as PropTypes from 'prop-types';

export interface ListGroupItemProps {

}

const propTypes = {

};

const defaultProps = {

};

const ListGroupItem: React.SFC<ListGroupItemProps> = ({
  children
}) => (
  <div className="list-group-item">
    {children}
  </div>
);

ListGroupItem.propTypes = propTypes;
ListGroupItem.defaultProps = defaultProps;

export default ListGroupItem;

