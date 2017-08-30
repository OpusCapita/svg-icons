'use strict';

// Fix for IE. By default it focus <svg></svg> on tab-key navigation
function addFocusableFalse(svgString) {
  return svgString.replace(/\<svg(.*?)\>/ig, '<svg $1 focusable="false">');
}

function removeHardcodedFill(svgString) {
  return svgString.replace(/fill=('|").{7}('|")/gi, '');
}

module.exports = {
  addFocusableFalse,
  removeHardcodedFill
};
