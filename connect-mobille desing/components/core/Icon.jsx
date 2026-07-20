import React from 'react';

// Renders a Lucide icon from the UMD build (window.lucide).
// Load <script src="https://unpkg.com/lucide@0.462.0/dist/umd/lucide.min.js"></script> before use.
function toPascal(name) {
  return String(name).split('-').map((s) => (s ? s[0].toUpperCase() + s.slice(1) : s)).join('');
}

export function Icon({ name, size = 22, color = 'currentColor', strokeWidth = 2, fill = 'none', style }) {
  const lib = typeof window !== 'undefined' ? (window.lucide || null) : null;
  const iconSet = lib ? (lib.icons || lib) : null;
  const node = iconSet ? (iconSet[toPascal(name)] || iconSet[name]) : null;
  // lucide icon node is ["svg", svgAttrs, [ [tag, attrs], ... ]]
  const childList = node && Array.isArray(node[2]) ? node[2] : null;
  if (!childList) {
    return <span style={{ display: 'inline-block', width: size, height: size, ...style }}></span>;
  }
  const kids = childList.map(function (entry, i) {
    const tag = entry[0];
    const attrs = entry[1] || {};
    return React.createElement(tag, Object.assign({ key: i }, attrs));
  });
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
    >
      {kids}
    </svg>
  );
}
