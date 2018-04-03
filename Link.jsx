// @flow
import React, { Fragment } from 'react';

type PropsType = {
  anchorComponent: ?React$Element<any>,
  color?: string,
  dropdown?: boolean,
  height?: number,
  href: string,
  icon: ?string,
  style?: {},
  title: string,
  anchorRef?: (anchorRef: HTMLAnchorElement | HTMLElement) => any,
};

const Link = ({
  anchorComponent,
  color,
  dropdown,
  height,
  href,
  icon,
  style,
  title,
  anchorRef = () => {},
}: PropsType) => {
  const props = {
    href,
    className: 'rbnav__linkContainer',
    key: href,
    style: { color, height, ...style },
    ref: ref => anchorRef(ref || document.createElement('a')),
    itemProp: 'url',
  };

  const Children = () => (
    <Fragment>
      {icon ? <i className={`fas fa-${icon}`} /> : null}
      <span className="rbnav__linkTitle" itemProp="name">{title}</span>
      {dropdown && <i className="fas fa-angle-down" />}
    </Fragment>
  );

  if (anchorComponent) {
    return (
      <anchorComponent {...props}>
        <Children />
      </anchorComponent>
    );
  }

  return (
    <a {...props}>
      <Children />
    </a>
  );
};

Link.defaultProps = {
  color: '#ecf0f1',
  dropdown: false,
  height: 64,
  style: {},
  anchorRef: () => {},
};

export default Link;
