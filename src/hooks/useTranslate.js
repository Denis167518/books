import { useSelector } from 'react-redux';
import get from 'lodash/get'

const useTranslate = () => {
  const locales = useSelector(state => state.localization.locales);
  return (path) => get(locales, path)
}

export default useTranslate;
