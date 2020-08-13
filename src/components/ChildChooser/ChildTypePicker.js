import React, { useState } from 'react';
import { children } from '../../utils/constants';

const ChildTypePicker = ({ gender, childType, onPick }) => {
  const [type, setType] = useState(childType)
  const childrenToRender = children[gender];

  const handleChoose = (type) => () => {
    setType(type)
    onPick(type)
  }

  return (
    <div className="child-type-picker">
      {
        childrenToRender.map(it => (
          <div
            className={`child-type-card ${type === it.type ? 'active' : ''}`}
            key={it.image}
            onClick={handleChoose(it.type)}
          >
            <img width={100} height={100} src={it.image} title={it.type}/>
          </div>
        ))
      }
    </div>
  )
}

export default ChildTypePicker;
