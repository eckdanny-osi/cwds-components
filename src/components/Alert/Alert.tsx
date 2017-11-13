import * as React from 'react';
import Card from '../Card';
import { StatelessComponent } from 'react';
import * as classnames from 'classnames';
import { ALERT_TYPE, ALERT_TYPES } from './AlertTypes';
import * as PropTypes from 'prop-types';
import * as Icon from 'react-fontawesome';

const type2iconName = {
  primary: 'rocket',
  secondary: '',
  success: 'check-circle',
  info: 'info-circle',
  warning: 'warning',
  danger: 'warning',
  light: '',
  dark: '',
};
const getIcon = (type: ALERT_TYPE): React.ReactNode => {
  return <Icon name={type2iconName[type]} />
}

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
    <div className="alert-icon">
      {getIcon(type)}
    </div>
    <div className='alert-body'>
      {children}
    </div>
  </div>
);

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

export default Alert;
