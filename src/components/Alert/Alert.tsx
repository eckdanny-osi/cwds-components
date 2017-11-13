import * as React from 'react';
import Card from '../Card';
import { StatelessComponent } from 'react';
import * as classnames from 'classnames';
import { ALERT_TYPE, ALERT_TYPES } from './AlertTypes';
import * as PropTypes from 'prop-types';

export interface AlertProps {
  type: ALERT_TYPE;
  dismissible: boolean;
  onDismiss: Function;
}

const propTypes = {
  type: PropTypes.oneOf(ALERT_TYPES).isRequired,
  dismissible: PropTypes.bool,
  onDismiss: PropTypes.func,
};

const defaultProps = {
  type: ALERT_TYPE.INFO,
};

const Alert: StatelessComponent<AlertProps> = ({
  type,
  dismissible,
  onDismiss,
  children,
}) => (
  <div
    className={classnames(
      'alert',
      `alert-${type}`
    )}
    role='alert'
  >
    {children}
  </div>
);

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

export default Alert;
