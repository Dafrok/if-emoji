export default function () {
  try {
    const $node = document.createElement('span')
    $node.innerText = '🐸'
    $node.style.display = 'inline-block'
    $node.style.fontSize = '14px'
    $node.style.position = 'fixed'
    $node.style.top = '-9999px'
    document.body.appendChild($node)
    const style = getComputedStyle($node)
    document.body.removeChild($node)
    return (style.width !== '0px' && style.width !== 'auto')
  } catch (e) {
    return false
  }
}