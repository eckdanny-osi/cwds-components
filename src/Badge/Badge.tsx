import * as React from 'react';
import * as classnames from 'classnames';
import * as PropTypes from 'prop-types';
import { Children } from 'react';

export interface BadgeProps {
  // type: string;
  color: string;
  pill: boolean;
  tag: any; // PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  // children: PropTypes.node,
  className: string;
  href?: string;
}

const propTypes = {
  color: PropTypes.string,
  pill: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  // cssModule: PropTypes.object,
};

const defaultProps = {
  color: 'secondary',
  pill: true,
  tag: 'span'
};

const Badge: React.SFC<BadgeProps> = ({
  color,
  className,
  pill,
  tag: Tag,
  ...attrs
}) => {
  // const classes = mapToCssModules(classNames(
  //   className,
  //   'badge',
  //   'badge-' + color,
  //   pill ? 'badge-pill' : false
  // ), cssModule);

  if (attrs.href && Tag === 'span') {
    Tag = 'a';
  }

  return (
    <Tag
      {...attrs}
      className={classnames(
        className,
        'badge',
        `badge-${color}`,
        pill && 'badge-pill',
      )}
    />
  );
};

// const propTypes = {
//   type: PropTypes.oneOf([
//     'primary',
//     'secondary',
//     'success',
//     'danger',
//     'warning',
//     'info',
//     'light',
//     'dark',
//     'link',
//   ])
// };

// const defaultProps = {
//   type: 'secondary'
// };

// const Badge: React.SFC<BadgeProps> = ({ type, children }) => (
//   <button
//     type="button"
//     className={classnames([
//       'btn',
//       `btn-${type}`
//     ])}
//   >
//     {children}
//   </button>
//   // <span class="badge badge-pill badge-primary">Primary</span>
// );

Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;

export default Badge;
