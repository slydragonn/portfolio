import { motion } from 'framer-motion'

const Fireball = ({ size, position }) => {
  let px = size / 1.5
  let px2 = size / 3
  return (
    <div>
      <motion.img
        src="/img/fireball.png"
        alt="Ellipse"
        style={{
          zindex: '0',
          position: 'absolute',
          width: px2 + 'px',
          marginTop: (px2 - px2 / 3) * -1,
          marginLeft: (px2 / 2) * -1
        }}
        animate={{
          x: position.x > position.width || position.x < 0 ? 250 : position.x,
          y:
            position.y > position.height + 70 || position.y < 0
              ? 400
              : position.y
        }}
      />
      <motion.img
        src="/img/fireball.png"
        alt="Ellipse"
        style={{
          zindex: '0',
          position: 'absolute',
          width: px + 'px',
          marginTop: (px - px / 3) * -1,
          marginLeft: (px / 2) * -1
        }}
        animate={{
          x: position.x > position.width || position.x < 0 ? 250 : position.x,
          y:
            position.y > position.height + 70 || position.y < 0
              ? 400
              : position.y
        }}
        transition={{ type: 'spring' }}
      />
      {/*<motion.img
        src="/img/fireball.png"
        alt="Ellipse"
        style={{
          zindex: '1',
          position: 'absolute',
          width: size + 'px',
          marginTop: (size - size / 3) * -1,
          marginLeft: (size / 2) * -1
        }}
        animate={{
          x: position.x > position.width || position.x < 0 ? 250 : position.x,
          y:
            position.y > position.height + 70 || position.y < 0
              ? 400
              : position.y
        }}
        transition={{ type: 'just' }}
      />*/}
    </div>
  )
}

export default Fireball
