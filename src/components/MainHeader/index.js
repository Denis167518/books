import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import {Logo, SelectAppLanguage} from '../'
import {headerButtonGroup} from '../../utils/constants';
import * as rout from '../../constants/routs';
import useTranslate from '../../hooks/useTranslate';
import './styles.scss';

const MainHeader = () => {
  const t = useTranslate();
  const history = useHistory();

  const onLogoClick = () => {
    history.push(rout.HOME)
  }

  return (
    <header className="main-header">
      <Logo onClick={onLogoClick}/>
      <div className="main-header-right-panel">
        <SelectAppLanguage/>
        <div className="header-button-group">
          {
            headerButtonGroup.map(it => (
              <Link key={it.path} to={it.path} className="button">
                { t(it.title) }
                { it.icon && <it.icon /> }
              </Link>
            ))
          }
        </div>
      </div>
    </header>
  )
}

export default MainHeader;
