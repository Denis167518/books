import React from 'react';
import icon from './flags';

const Flag = ({name}) => (
  <img src={icon[name]} alt={name} width={30} height={30} style={{ marginRight: '10px' }}/>
)

export default Flag;
