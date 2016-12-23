(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.ifEmoji = factory());
}(this, (function () { 'use strict';

var _ArrayLikeToString = function _ArrayLikeToString(arg) {
  return Array.prototype.toString.call(arg);
};

var getTextFeature = function getTextFeature(text, color) {
  try {
    var canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;

    var ctx = canvas.getContext('2d');
    ctx.textBaseline = 'top';
    ctx.font = '100px -no-font-family-here-';
    ctx.fillStyle = color;
    ctx.scale(0.01, 0.01);
    ctx.fillText(text, 0, 0);

    return ctx.getImageData(0, 0, 1, 1).data;
  } catch (e) {
    return false;
  }
};

var compareFeatures = function compareFeatures(feature1, feature2) {
  var feature1Str = _ArrayLikeToString(feature1);
  var feature2Str = _ArrayLikeToString(feature2);
  return feature1Str === feature2Str && feature1Str !== '0,0,0,0';
};

var index = function (text) {
  var feature1 = getTextFeature(text, '#000');
  var feature2 = getTextFeature(text, '#fff');
  return feature1 && feature2 && compareFeatures(feature1, feature2);
};

return index;

})));
