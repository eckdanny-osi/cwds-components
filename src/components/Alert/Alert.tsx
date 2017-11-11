import * as React from 'react';
import { StatelessComponent } from 'react';
import { CONTEXT, CONTEXTS } from './types'
import * as PropTypes from 'prop-types';

export interface AlertProps {
  context: CONTEXT;
  dismissible: boolean;
  onDismiss: Function;
}

const propTypes = {
  context: PropTypes.oneOf(CONTEXTS).isRequired,
  dismissible: PropTypes.bool,
  onDismiss: PropTypes.func,
};

const defaultProps = {
  context: CONTEXT.INFO,
};

const Alert: StatelessComponent<AlertProps> = ({
  context,
  dismissible,
  onDismiss,
  children
}) => (
  <div className="alert">
    {children}
  </div>
);

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

export default Alert;
