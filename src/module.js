angular.module('rs.section', []).run(function () {
  'use strict';

  var styleContent, styleTag;

  styleContent = document.createTextNode('rs-section { display: block; } rs-section + rs-section { border-top: 1px solid #eee; }');
  styleTag = document.createElement('style');
  styleTag.type = 'text/css';
  styleTag.appendChild(styleContent);

  document.head.appendChild(styleTag);
});
