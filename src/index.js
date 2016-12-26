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

    const feature = ctx.getImageData(0, 0, 1, 1).data
    return feature
  } catch (e) {
    return false
  }

}

const compareFeatures = (feature1, feature2) => {
  const feature1Str = feature1.toString()
  const feature2Str = feature2.toString()
  return feature1Str === feature2Str && feature1Str !== '0,0,0,0'
}

export default function (text) {
  const feature1 = getTextFeature(text, '#000')
  const feature2 = getTextFeature(text, '#fff')
  return compareFeatures(feature1, feature2)
}