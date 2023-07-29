import { TravelDataType } from './events';

const travelList = [
  {
    image: '/images/緬甸街.jpeg',
    title: '混中和緬甸街',
    date: '2022/4/17',
    description: '雲南人帶路，混進中和緬甸街',
    buttonText: '立即報名線上體驗',
    type: TravelDataType.ZHONGHE,
    color: 'var(--green)'
  },
  {
    image: '/images/三鶯部落.jpeg',
    title: '混三鶯部落',
    date: '2022/4/17',
    description: '雲南人帶路，混進中和緬甸街',
    buttonText: '立即報名線上體驗',
    type: TravelDataType.ZHONGHE,
    color: 'var(--pink)'
  },
  {
    image: '/images/三重.jpeg',
    title: '混三重美甲店',
    date: '2022/4/24',
    description: '越南人帶路，混進三重美甲店',
    buttonText: '立即報名線上體驗',
    type: TravelDataType.SANCHONG,
    color: 'var(--purple)'
  }
];

export default travelList;
