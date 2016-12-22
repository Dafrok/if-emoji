(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.ifEmoji = factory());
}(this, function () { 'use strict';

  function index () {
    try {
      var $node = document.createElement('span');
      $node.innerText = '🐸';
      $node.style.display = 'inline-block';
      $node.style.fontSize = '14px';
      $node.style.position = 'fixed';
      $node.style.top = '-9999px';
      document.body.appendChild($node);
      var style = getComputedStyle($node);
      document.body.removeChild($node);
      return style.width !== '0px' && style.width !== 'auto';
    } catch (e) {
      return false;
    }
  }

  return index;

}));