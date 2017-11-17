import * as React from 'react';
import * as classNames from 'classnames';
import * as PropTypes from 'prop-types';

export interface RowProps {
  tag: string;
  className?: string;
}

const propTypes = {
  tag: PropTypes.oneOfType([ PropTypes.string, PropTypes.func ]),
};

const defaultProps = {
  tag: 'div',
};

const Row: React.SFC<RowProps> = ({
  tag: Tag,
  className,
  ...attrs
}) => (
  <Tag className={classNames(['row'])} {...attrs} />
);

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default Row;
