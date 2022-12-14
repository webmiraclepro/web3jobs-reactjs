import React from 'react';

const SvgIcon = ({ color }: { color?: string }) => (
  <svg
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse
      cx="10.15"
      cy="10.2607"
      rx="5.84996"
      ry="5.86957"
      fill={color || '#B50000'}
    />
    <path
      d="M10.1501 18.0432C5.87861 18.0432 2.40015 14.5495 2.40015 10.2606H-1.59985C-1.59985 16.7412 3.65207 22.0432 10.1501 22.0432V18.0432ZM17.9 10.2606C17.9 14.5495 14.4215 18.0432 10.1501 18.0432V22.0432C16.6481 22.0432 21.9 16.7412 21.9 10.2606H17.9ZM10.1501 2.47803C14.4215 2.47803 17.9 5.97175 17.9 10.2606H21.9C21.9 3.78005 16.6481 -1.52197 10.1501 -1.52197V2.47803ZM10.1501 -1.52197C3.65207 -1.52197 -1.59985 3.78005 -1.59985 10.2606H2.40015C2.40015 5.97175 5.87861 2.47803 10.1501 2.47803V-1.52197Z"
      fill={color || '#B50000'}
    />
  </svg>
);

export default SvgIcon;
