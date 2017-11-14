import * as React from 'react';
import * as classNames from 'classnames';
import * as PropTypes from 'prop-types';
import Icon from '../Icon';

export interface AvatarProps {
  imgUrl: string;
}

const propTypes = {
  imgUrl: PropTypes.string,
};

const defaultProps = {

};

const mkAvatar = (imgUrl: string): React.ReactElement<{}> => {
  return imgUrl
    ? <img className="avatar-img rounded-circle" src={imgUrl} />
    : <Icon className="avatar-icon" name="user-circle" size="4x" />
    ;
};

const Avatar: React.SFC<AvatarProps> = ({
  imgUrl
}) => (
  <div className="avatar">
    {mkAvatar(imgUrl)}
  </div>
);

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export default Avatar;
