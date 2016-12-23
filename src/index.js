const _ArrayLikeToString = arg => Array.prototype.toString.call(arg)

const getTextFeature = (text, color) => {
  try {
    const canvas = document.createElement('canvas')
    canvas.width = 1
    canvas.height = 1

    const ctx = canvas.getContext('2d')
    ctx.textBaseline = 'top';
    ctx.font = '100px -no-font-family-here-';
    ctx.fillStyle = color;
    ctx.scale(0.01, 0.01);
    ctx.fillText(text, 0, 0);

    return ctx.getImageData(0, 0, 1, 1).data
  } catch (e) {
    return false
  }
}

const compareFeatures = (feature1, feature2) => {
  const feature1Str = _ArrayLikeToString(feature1)
  const feature2Str = _ArrayLikeToString(feature2)
  return feature1Str === feature2Str && feature1Str !== '0,0,0,0'
}

export default function (text) {
  const feature1 = getTextFeature(text, '#000')
  const feature2 = getTextFeature(text, '#fff')
  return feature1 && feature2 && compareFeatures(feature1, feature2)
}