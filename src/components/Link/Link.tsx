import * as React from 'react';

export interface LinkPropTypes {
  href?: string;
  className?: string;
  text: string;
}

const Link = (props: LinkPropTypes) => {
  const {
    text,
    href = '#'
  } = props;
  return (
    <a href={href}>{text}</a>
  );
};

export default Link;
