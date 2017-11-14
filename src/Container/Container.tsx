import * as React from 'react';
import { StatelessComponent } from 'react';
import * as classnames from 'classnames';
import * as PropTypes from 'prop-types';

export interface ContainerProps {
  tag?: any;
  fluid?: boolean;
  className?: string;
}

const propTypes = {
  tag: PropTypes.oneOfType([ PropTypes.string, PropTypes.func ]),
  fluid: PropTypes.bool,
};

const defaultProps: ContainerProps = {
  tag: 'div',
  fluid: false,
};

const Container: StatelessComponent<ContainerProps> = ({
  className,
  fluid,
  tag: Tag,
  ...attrs
}) => (
  <Tag
    {...attrs}
    className={classnames(
      className,
      fluid ? 'container-fluid' : 'container'
    )}
  />
);

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;

export default Container;
