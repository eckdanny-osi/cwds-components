import * as React from 'react';
import * as PropTypes from 'prop-types';
import * as classNames from 'classnames';

export interface NavProps {
  tabs: boolean;
  pills: boolean;
  vertical: boolean | string;
  horizontal: string;
  justified: boolean;
  fill: boolean;
  navbar: boolean;
  card: boolean;
  tag: any; // Function | string;
  className: string;
}

const propTypes = {
  tabs: PropTypes.bool,
  pills: PropTypes.bool,
  vertical: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  horizontal: PropTypes.string,
  justified: PropTypes.bool,
  fill: PropTypes.bool,
  navbar: PropTypes.bool,
  card: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
};

const defaultProps = {
  tag: 'ul',
  vertical: false,
};

const getVerticalClass = (vertical: boolean | string) => {
  if (vertical === false) {
    return false;
  } else if (vertical === true || vertical === 'xs') {
    return 'flex-column';
  }

  return `flex-${vertical}-column`;
};

const Nav: React.SFC<NavProps> = ({
  className,
  tabs,
  pills,
  vertical,
  horizontal,
  justified,
  fill,
  navbar,
  card,
  tag: Tag,
  ...attrs
}) => (
  <Tag
    {...attrs}
    className={classNames(
      className,
      navbar ? 'navbar-nav' : 'nav',
      horizontal ? `justify-content-${horizontal}` : false,
      getVerticalClass(vertical),
      {
        'nav-tabs': tabs,
        'card-header-tabs': card && tabs,
        'nav-pills': pills,
        'card-header-pills': card && pills,
        'nav-justified': justified,
        'nav-fill': fill,
      }
    )}
  />
);

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;

export default Nav;
