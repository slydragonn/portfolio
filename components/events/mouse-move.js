import { useRef, useState } from 'react'
import Fireball from './fireball'

function getRelativeCoordinates(event, referenceElement) {
  const position = {
    x: event.pageX,
    y: event.pageY
  }

  const offset = {
    left: referenceElement.offsetLeft,
    top: referenceElement.offsetTop,
    width: referenceElement.clientWidth,
    height: referenceElement.clientHeight
  }

  let reference = referenceElement.offsetParent

  while (reference) {
    offset.left += reference.offsetLeft
    offset.top += reference.offsetTop
    reference = reference.offsetParent
  }

  return {
    x: position.x - offset.left,
    y: position.y - offset.top,
    width: offset.width,
    height: offset.height,
    centerX: (position.x - offset.left - offset.width / 2) / (offset.width / 2),
    centerY: (position.y - offset.top - offset.height / 2) / (offset.height / 2)
  }
}

const MouseMove = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({})
  const boxRef = useRef()

  const handleMouse = e => {
    setMousePosition(getRelativeCoordinates(e, boxRef.current))
  }
  return (
    <div onMouseMove={e => handleMouse(e)} ref={boxRef}>
      <Fireball size="150" position={mousePosition} />
      {children}
    </div>
  )
}

export default MouseMove
