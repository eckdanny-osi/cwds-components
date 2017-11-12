import * as React from 'react';
import { StatelessComponent } from 'react';
import * as classnames from 'classnames';
import * as PropTypes from 'prop-types';

// TODO: surface an API for all the options.
//       may not be easy, there are lots of them:
//        * wrapping
//        * breaks
//        * reording
//        * responsive
// Oh, and don't forget the bs4 utils for spacing: http://getbootstrap.com/docs/4.0/utilities/spacing/#notation

export interface ColProps {
  tag: string;
  className?: string;
}

const propTypes = {
  tag: PropTypes.oneOfType([ PropTypes.string, PropTypes.func ]).isRequired,
  className: PropTypes.string,
};

const defaultProps = {
  tag: 'div',
};

const Col: StatelessComponent<ColProps> = ({
  tag: Tag,
  className,
  ...attrs
}) => (
  <Tag
    className={classnames(
      'col'
    )}
    {...attrs}
  />
);

Col.propTypes = propTypes;
Col.defaultProps = defaultProps;

export default Col;
