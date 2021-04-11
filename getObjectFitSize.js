// Calculate real video width, hight and offsets when resize or first render is being done
/**
 *
 * @param {containerWidth} width of video dom element
 * @param {containerHeight} height of video dom element
 * @param {width} real video width (each video has static width)
 * @param {height} real video height (each video has static height)
 * @returns
 */
export function getObjectFitSize({
  containerWidth,
  containerHeight,
  width,
  height,
}) {
  const doRatio = width / height;
  const cRatio = containerWidth / containerHeight;
  let targetWidth = 0;
  let targetHeight = 0;
  const test = doRatio > cRatio;

  if (test) {
    targetWidth = containerWidth;
    targetHeight = targetWidth / doRatio;
  } else {
    targetHeight = containerHeight;
    targetWidth = targetHeight * doRatio;
  }

  return {
    width: targetWidth || 0,
    height: targetHeight,
    offsetLeft: (containerWidth - targetWidth) / 2,
    offsetTop: (containerHeight - targetHeight) / 2,
  };
}
