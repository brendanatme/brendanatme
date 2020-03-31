const { ClassCase } = require('../../helpers');

module.exports = (name, style) => `/**
 * ${name}.component
 *
 * (generated by rg-cli -- see https://github.com/brendanatme/rg-cli for details)
 */
import React from 'react';
import './${name}.component.${style}';

export default ({
  // children,
  className = '',
}) => {
  return (
    <div className={\`${name} \${className}\`}>
      ${ClassCase(name)}
    </div>
  );
};`;