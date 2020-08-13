import React, { useState } from 'react';
import { Button } from 'antd';
import { gender } from '../../utils/constants';
import useTranslate from '../../hooks/useTranslate';
import ChildTypePicker from './ChildTypePicker';
import './styles.scss';

const genders = [gender.male, gender.female]

const ChildChooser = ({ onChoose }) => {
  const t = useTranslate();
  const [gender, setGender] = useState();
  const [childType, setChildType] = useState();

  const handleChooseGender = (value) => () => {
    setGender(value)
  }

  const handleChooseChildType = (type) => {
    setChildType(type)
    onChoose({ gender, type })
  }

  return(
    <div className="children-chooser">
      <div className="buttons-gender-group">
        {
          genders.map(it => (
            <Button
              size="large"
              key={it}
              onClick={handleChooseGender(it)}
              className={`button ${gender === it ? 'active' : ''}`}
            >
              { t(`common.${it}`) }
            </Button>
          ))
        }
      </div>
      { gender && <ChildTypePicker childType={childType} onPick={handleChooseChildType} gender={gender} />}
    </div>
  )
}

export default ChildChooser;
