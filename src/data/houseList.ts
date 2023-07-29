import { HouseDataType } from './events';

const houseList = [
  {
    image: '/images/event-info-house-img-1.jpg',
    description:
      '你記憶中的美術教室是什麼樣子？是方方正正還是歪歪斜斜？來自哥倫比亞的藝術家艾雷，有著常人沒有的天線，常收到來自外太空的訊號，變出腦洞大開又有趣的遊戲，他尤其喜歡在台北挖掘神秘角落，帶大家用地圖和AR發現新世界！歡迎來到孩在混美術教室，一起來趟腦洞大開的探索之旅！',
    buttonText: '活動結束',
    type: HouseDataType.ARTIST
  },
  {
    image: '/images/event-info-house-img-2.jpg',
    description:
      '你是不是有點久沒有出發一趟完全未知的流浪，蠢蠢欲動的旅人們，先來一趟精神意識的流浪吧。尹柔、Yun、Eva、阿奈是四個在世界旅行中結識的台灣女子，她們各自在不同國家旅行，貫穿歐亞，從印度、尼泊爾、內蒙古、到歐陸露營車旅行。這次他們同在台灣，這間Hostel就是與更多人相遇的地方。',
    buttonText: '活動結束',
    type: HouseDataType.WOMAN
  },
  {
    image: '/images/event-info-house-img-3.jpg',
    description:
      '只要走進這間屋子，就會瞬移到非洲哦！《wowAfrica阿非卡》自2014年開始與非洲展開無限連結。從議題報導到設計跨文化交流體驗，持續創造臺、非交流橋樑。這次，它們的選物品牌《wowAfrica living 旅非選物》將從多個非洲國家，引進現代時尚非洲的各種樣貌，帶領大家認識非洲！',
    buttonText: '活動結束',
    type: HouseDataType.AFRICA
  }
];

export default houseList;
