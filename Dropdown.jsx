// @flow
import React from 'react';

import Link from './Link';

type PropsType = {
  AnchorComponent: ?React$Component<any>,
  backgroundColor?: string,
  color?: string,
  height?: number,
  index: number,
  isMobile?: boolean,
  link: {
    href: string,
    title: string,
    icon?: string,
    links?: Array<{
      href: string,
      title: string,
      icon?: string,
    }>,
  },
};

const Dropdown = ({
  AnchorComponent,
  backgroundColor,
  color,
  height,
  index,
  isMobile,
  link,
}: PropsType) => {
  const linksContainer: Array<HTMLDivElement> = [];
  const linkRef: Array<HTMLAnchorElement | HTMLElement> = [];

  if (isMobile) {
    return (
      <div
        className="rbnav__linksContainer"
        style={{ backgroundColor, height }}
        onClick={() => {
          linksContainer[index].style.height = `${(Number(link.links instanceof Array && link.links.length) + 1) * (height || 0)}px`;
          linkRef[index].style.pointerEvents = 'auto';
        }}
        onMouseLeave={() => {
          linksContainer[index].style.height = `${(height || 0)}px`;
          linkRef[index].style.pointerEvents = 'none';
        }}
        onKeyDown={(event) => {
          const { keyCode } = event;

          if (keyCode === 8) {
            linksContainer[index].style.height = `${(height || 0)}px`;
            linkRef[index].style.pointerEvents = 'none';
          }
        }}
        key={link.href}
        ref={(ref) => { linksContainer[index] = ref || document.createElement('div'); }}
        role="link"
        tabIndex={index}
      >
        <Link
          AnchorComponent={AnchorComponent || null}
          href={link.href}
          title={link.title}
          icon={link.icon}
          height={height}
          dropdown
          anchorRef={(ref) => { linkRef[index] = ref || document.createElement('a'); }}
          style={{
              pointerEvents: 'none',
            }}
          color={color}
        />
        {link.links instanceof Array && link.links.length && link.links.map(lnk => (
          <Link
            AnchorComponent={AnchorComponent}
            href={lnk.href}
            title={lnk.title}
            icon={lnk.icon}
            height={height}
            key={lnk.href}
            color={color}
          />
          ))}
      </div>
    );
  }

  return (
    <div
      className="rbnav__linksContainer"
      style={{ backgroundColor, height }}
      onMouseEnter={() => {
        linksContainer[index].style.height = `${(Number(link.links instanceof Array && link.links.length) + 1) * (height || 0)}px`;
      }}
      onMouseLeave={() => { linksContainer[index].style.height = `${(height || 0)}px`; }}
      key={link.href}
      ref={(ref) => { linksContainer[index] = ref || document.createElement('div'); }}
    >
      <Link
        AnchorComponent={AnchorComponent}
        dropdown
        href={link.href}
        title={link.title}
        icon={link.icon}
        height={height}
        color={color}
      />
      {link.links instanceof Array && link.links.length && link.links.map(lnk => (
        <Link
          AnchorComponent={AnchorComponent}
          href={lnk.href}
          title={lnk.title}
          icon={lnk.icon}
          height={height}
          key={lnk.href}
          color={color}
        />
      ))}
    </div>
  );
};

Dropdown.defaultProps = {
  backgroundColor: '#4A5459',
  color: '#ecf0f1',
  height: 48,
  isMobile: false,
};

export default Dropdown;
