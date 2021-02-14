export function style(el, property) {
  return window.getComputedStyle(el).getPropertyValue(property)
}

export function height(el) {
  if (el === window) {
    return window.innerHeight
  }
  return parseFloat(style(el, 'height'))
}

export function width(el) {
  if (el === window) {
    return window.innerWidth
  }
  return parseFloat(style(el, 'width'))
}

