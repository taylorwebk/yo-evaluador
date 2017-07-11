import React from 'react'
import Animated from 'animated/lib/targets/react-dom'

const ClickEffect = ({ children }) => {
  const animation = new Animated.Value(1)
  const handleMouseDown = () => Animated.spring(animation, {toValue: 0.9}).start()
  const handleMouseUp = () => Animated.spring(animation, {toValue: 1}).start()
  return (
    <Animated.div
      style={{
        display: 'inline-block',
        // backgroundColor: animation.interpolate({
        //   inputRange: [1, 2], outputRange: ['#28d79f', '#c23369']
        // }),
        transform: [
          { scale: animation }
        ]
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
      >
      {children}
    </Animated.div>
  )
}
export default ClickEffect
