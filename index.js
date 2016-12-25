(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.ifEmoji = factory());
}(this, (function () { 'use strict';

var getTextFeature = function getTextFeature(text, color) {
  try {
    var canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;

    var ctx = canvas.getContext('2d');
    ctx.textBaseline = 'top';
    ctx.font = '100px Arial';
    ctx.fillStyle = color;
    ctx.scale(0.01, 0.01);
    ctx.fillText(text, 0, 0);

    var feature = ctx.getImageData(0, 0, 1, 1).data;
    return feature;
  } catch (e) {
    return false;
  }
};

var compareFeatures = function compareFeatures(feature1, feature2) {
  var feature1Str = feature1.toString();
  var feature2Str = feature2.toString();
  return feature1Str === feature2Str && feature1Str !== '0,0,0,0';
};

var index = function (text) {
  var feature1 = getTextFeature(text, '#000');
  var feature2 = getTextFeature(text, '#fff');
  return compareFeatures(feature1, feature2);
};

return index;

})));
