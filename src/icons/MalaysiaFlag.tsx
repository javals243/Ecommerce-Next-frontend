import React from 'react';

function MalaysiaFlag(props: React.SVGProps<SVGSVGElement>) {
  const { height = 25, width = 25, className, ...otherProps } = props;

  return (
    <svg
      viewBox='0 0 640 480'
      height={height}
      width={width}
      className={className}
      {...otherProps}
    >
      <path
        d='M0 0h640v480H0z'
        style={{
          fill: '#c00',
          fillOpacity: 1,
          stroke: 'none',
          strokeWidth: 1,
        }}
      />
      <path
        d='M.5 39.9h639v38.4H.5zM.5 118.6h639V157H.5zM.5 197.4h639v38.4H.5z'
        style={{
          fill: '#fff',
          fillOpacity: 1,
          stroke: 'none',
          strokeWidth: 0.979059,
        }}
      />
      <path
        fill='#006'
        d='M0 .5h320v280H0Z'
        style={{
          strokeWidth: 0.0571662,
        }}
      />
      <path
        fill='#fc0'
        d='m207.5 73.8 6 40.7 23-34-12.4 39.2 35.5-20.8-28.1 30 41-3.2-38.3 14.8 38.3 14.8-41-3.2 28.1 30-35.5-20.8 12.3 39.3-23-34.1-6 40.7-5.9-40.7-23 34 12.4-39.2-35.5 20.8 28-30-41 3.2 38.4-14.8-38.3-14.8 41 3.2-28.1-30 35.5 20.8-12.4-39.3 23 34.1zm-33.3 1.7a71.1 71.1 0 1 0 0 130 80 80 0 1 1 0-130z'
        style={{
          strokeWidth: 0.0555556,
        }}
      />
      <path
        d='M.5 276.2h639v38.4H.5zM.5 354.4h639v38.4H.5zM0 441.6h639V480H0z'
        style={{
          fill: '#fff',
          fillOpacity: 1,
          stroke: 'none',
          strokeWidth: 0.979059,
        }}
      />
    </svg>
  );
}

export default MalaysiaFlag;
