import * as React from 'react';
import * as PropTypes from 'prop-types';

export interface DismissProps {
  label: string;
  onDismiss: any;
}

const propTypes = {
  label: PropTypes.string.isRequired,
  onDismiss: PropTypes.func,
};

const defaultProps = {
  label: 'Close',
};

const Dismiss: React.SFC<DismissProps> = ({
  label,
  onDismiss,
}) => (
  <button
    type="button"
    className="close"
    aria-label="Close"
    onClick={onDismiss}
  >
    <span aria-hidden="true">&times;</span>
  </button>
);

Dismiss.propTypes = propTypes;
Dismiss.defaultProps = defaultProps;

export default Dismiss;
