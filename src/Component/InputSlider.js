import React, { useState } from 'react'
import Slider from 'react-input-slider'

const InputSlider = () => {
    const [state,setState]=useState({x:10,y:10})
  return (
    <div>
        ({state.x}, {state.y})
      <Slider axis="xy" x={state.x} y={state.y} onChange={setState} />
      <Slider
        axis="x"
        x={state.x}
        onChange={({ x }) => setState(state => ({ ...state, x }))}
      />
      <Slider axis="y" y={state.y} onChange={({ y }) => setState(state => ({ ...state, y }))} />


    </div>
  )
}

export default InputSlider;