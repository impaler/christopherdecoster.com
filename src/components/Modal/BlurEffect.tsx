import * as React from 'react'
// ``
  // filter: url(#blur-filter);
  // filter: blur(5px);

export const BlurEffect = props =>
    <svg version="1.1" className="blur-svg">
      <defs>
        <filter id="blur-filter">
          <feGaussianBlur stdDeviation="2.3" />
        </filter>
      </defs>
    </svg>

