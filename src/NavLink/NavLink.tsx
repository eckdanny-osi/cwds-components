import * as React from 'react';
import * as PropTypes from 'prop-types';
import * as classNames from 'classnames';

export interface NavLinkProps {
  tag: any;  // Function | string;
  innerRef: any;  // Func | string;
  disabled: boolean;
  active: boolean;
  className: string;
  onClick: Function;
  href: any;
}

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  onClick: PropTypes.func,
  href: PropTypes.any,
};

const defaultProps = {
  tag: 'a',
};

// TODO why do i have to type the constructor???
class NavLink extends React.Component<NavLinkProps> {

  static propTypes = propTypes;
  static defaultProps = defaultProps;

  constructor(props: NavLinkProps) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e: Event) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.href === '#') {
      e.preventDefault();
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }

  render() {
    let {
      className,
      active,
      tag: Tag,
      innerRef,
      ...attributes
    } = this.props;

    return (
      <Tag
        {...attributes}
        ref={innerRef}
        onClick={this.onClick}
        className={classNames(
          className,
          'nav-link',
          {
            disabled: attributes.disabled,
            active: active
          }
        )}
      />
    );
  }
}

export default NavLink;
