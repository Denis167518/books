import React from 'react';
import {Select} from 'antd'
import {useSelector, useDispatch} from 'react-redux'
import { setLanguage } from '../../redux/feature/localization'
import {Flag} from '../';
import {appLanguages} from '../../utils/constants';
import './styles.scss';

const SelectAppLanguage = () => {
  const language = useSelector(state => state.localization.language);
  const dispatch = useDispatch();

  const onSelectAppLanguage = (value) => {
    dispatch(setLanguage(value))
  }

  return (
    <Select onChange={onSelectAppLanguage} value={language} className="app-language-select">
      {
        appLanguages.map(it => (
          <Select.Option key={it.name} value={it.name}>
            <div className="language-option">
              <Flag name={it.flag}/>
              {it.title}
            </div>
          </Select.Option>
        ))
      }
    </Select>
  )
}

export default SelectAppLanguage;
