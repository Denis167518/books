import React, {useState} from 'react';
import {Input, Select, Button} from 'antd';
import {useSelector} from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import { ChildChooser } from '../../components'
import useTranslate from '../../hooks/useTranslate';
import {bookLanguages} from '../../utils/constants';
import './styles.scss';

const CreateBook = () => {
  const t = useTranslate();
  const language = useSelector(state => state.localization.language)
  const [name, setName] = useState()
  const [bookLanguage, setBookLanguage] = useState(language)
  const [child, setChild] = useState({})

  const onNameChange = (e) => {
    setName(e.target.value)
  }

  const onChildChoose = (value) => {
    setChild(value)
  }

  const disabled = [name, bookLanguage, child.type, child.gender].some(isEmpty)

  return (
    <section className="create-book">
      <p className="title">{t('component.create-book.title')}</p>
      <div className="field-group">
        <label htmlFor="name" className="field-label">
          { t('component.create-book.name') }
          <Input
            size="large"
            value={name}
            onChange={onNameChange}
            id="name"
            className="field"
            allowClear
          />
        </label>
        <label htmlFor="language-select" className="field-label">
          { t('component.create-book.language') }
          <Select size="large" onChange={setBookLanguage} value={bookLanguage} id="language-select" className="field">
            {
              bookLanguages.map(it => (
                <Select.Option value={it.name} key={it.name}>
                  { it.title }
                </Select.Option>
              ))
            }
          </Select>
        </label>
      </div>
      <ChildChooser onChoose={onChildChoose} />
      <Button
        className="preview-full-book"
        disabled={disabled}
        size="large"
      >
        {t('component.create-book.preview-full-book')}
      </Button>
    </section>
  )
}

export default CreateBook;
