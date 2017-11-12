import * as React from 'react';
import * as classnames from 'classnames';
import { StatelessComponent } from 'react';
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

const Row: StatelessComponent<RowProps> = ({
  tag: Tag,
  className,
  ...attrs
}) => (
  <Tag className={classnames(['row'])} {...attrs} />
);

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default Row;
