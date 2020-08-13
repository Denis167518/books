import {flag} from '../components/Flag/flags';
import {MY_ACCOUNT, BASKET} from '../constants/routs';
import ShoppingCartOutlined from '@ant-design/icons/lib/icons/ShoppingCartOutlined';

export const appLanguages = [
  {flag: flag.UKRAINE, title: 'Українська', name: 'ua'},
  {flag: flag.RUSSIA, title: 'Росский', name: 'ru'},
  {flag: flag.USA, title: 'USA', name: 'en'}
]

export const headerButtonGroup = [
  {title: 'header.button-group.my-account', path: MY_ACCOUNT},
  {title: 'header.button-group.basket', path: BASKET, icon: ShoppingCartOutlined},
]

export const bookLanguages = [
  {title: 'Українська', name: 'ua'},
  {title: 'Росский', name: 'ru'},
  {title: 'USA', name: 'en'},
]

export const gender = { male: 'boy', female: 'girl' }

export const children = {
  [gender.male]: [
    {type: 'blond', image: require('../assets/boy-blond.png')},
    {type: 'brunette', image: require('../assets/boy-brunette.png')},
    {type: 'mulat', image: require('../assets/boy-mulat.png')},
  ],
  [gender.female]: [
    {type: 'blond', image: require('../assets/girl-blond.png')},
    {type: 'brunette', image: require('../assets/girl-brunette.png')},
    {type: 'mulat', image: require('../assets/girl-mulat.png')}
  ]
}
