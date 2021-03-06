// @flow
import React from 'react';

type PropsType = {
  color?: string,
  icon: ?string,
  name: string,
};

const Brand = ({ color = '#ecf0f1', icon, name }: PropsType) => (
  <div className="rbnav__brand" style={{ color }}>
    {!!icon && (
      <i className={`fab fa-${icon}`} />
    )}
    {!!name && (
      <span className="rbnav__brandName">
        {name}
      </span>
    )}
  </div>
);

Brand.defaultProps = {
  color: '#ecf0f1',
};

export default Brand;
