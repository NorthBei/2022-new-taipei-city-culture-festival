export type Perform = {
  image: string;
  name: string;
  hashtags: string[];
  title: string;
  intro: string[];
  facebook: string | null;
  instagram: string | null;
};

const april2nd: Perform[] = [
  {
    image: '柔米.jpeg',
    name: '13:00 柔米',
    hashtags: ['#混也可以很溫柔', '#客家 #混大的舞台'],
    title: '柔米 Zoomie',
    intro: [
      '柔米，是外公給她的名字，台語為溫柔美麗之意 。',
      '具辨識度的靈魂嗓音，充滿個人風格的吉他演奏及詞曲創作——首張專輯《新的。人。事物》便獲得第10屆金音獎最佳新人、最佳民謠單曲、最佳民謠專輯三項提名，2020 年回歸獨立音樂人身分推出概念 EP《台北錄音》亦入圍 Freshmusic Awards 年度 EP。',
      '「聽聽看，你會跟我一樣翹首盼望她的下張專輯，順便把她首張專輯那八首歌聽得滾瓜爛熟。」 ──馬世芳《耳朵借我》'
    ],
    facebook: 'https://www.facebook.com/awarenessofzoomie',
    instagram: 'https://www.instagram.com/zoomie_live/'
  },
  {
    image: '武義.jpg',
    name: '14:00 津輕三味線武義',
    hashtags: ['#簡單也能混出多種風味', '#日本 #三味線  #混大的舞台'],
    title: '津輕三味線 武義',
    intro: [
      '來自台灣的津輕三味線演奏者，擅長演奏傳統民謠、跨界、原創多元作品。隸屬於台灣廣原會，曾於2019年榮獲日本津輕三味線大賽團體組冠軍。',
      '透過演出、教學、體驗講座等方式致力推廣日本津輕三味線。'
    ],
    facebook: 'https://www.facebook.com/takeyoshi.rayhsin/',
    instagram: null
  },
  {
    image: '踢他電台.JPG',
    name: '15:00 踢踏電台',
    hashtags: ['#踢踏與各種音樂的完美混搭', '#美式踢踏舞 #混小的舞台'],
    title: '踢踏電台 Tap Radio',
    intro: [
      '自我定位為台灣最「JAM」的新銳踢踏舞團體，以發揚美式踢踏舞為驅力，強調「美式」踢踏元素與不同類型音樂的跨界混種，隨著不同的音樂氛圍，踏出獨特且引人注目的踢踏個性。'
    ],
    facebook: 'https://www.facebook.com/keepgroovinghigh/',
    instagram: null
  },
  {
    image: '泥灘地浪人.jpg',
    name: '16:00 泥灘地浪人',
    hashtags: ['#美國 #英國 #多元融合', '#街頭 #洗衣板 #混的大舞台'],
    title: '泥灘地浪人',
    intro: [
      '泥灘地浪人 The Muddy Basin Ramblers',
      '一群來自美國和英國、現旅居臺灣的音樂家，在 2003 年臺北大安森林公園流浪之歌音樂節的舞台上，半開玩笑地自稱為「泥灘地浪人」。他們的音樂取才自美國早期藍調和民間音樂中，充滿趣味性與高昂的情緒，點燃了臺灣搖擺樂的新風潮。這些年來，浪人們忠於對音樂的初衷並力求精進，試圖在傳統音樂中找出新穎的形式。在專輯《擒虎記》裡，22 首曲目幾乎皆為原創歌曲，曲風涵蓋戰前藍調、爵士、撥弦樂、亞洲民謠，回應種族、移民及宗教信仰等當代話題。',
      '獎項:',
      '葛萊美最佳包裝/設計 “Formosa Medicine Show” (寶島賣藥秀) - 入圍 2015 ; 葛萊美最佳包裝/設計  "Hold That Tiger" (擒虎記) - 入圍 2020 ; 金曲獎最佳裝幀設計 "Hold That Tiger" (擒虎記) - 得獎 2020 ; 美國獨立音樂獎最佳藍調歌曲 Best Blues Song - "Dharma Train" - 入圍2020 ; 美國獨立音樂獎最佳草根/鄉村製作人 Best Roots/Country Producer - 團長David Chen 入圍2020'
    ],
    facebook: null,
    instagram: null
  }
];

const april3rd = [
  {
    image: '林靖嵐.jpg',
    name: '11:00 林靖嵐聽障舞團',
    hashtags: ['#超越語言的混與勇敢', '#聽障舞團 #手語 #混大的舞台'],
    title: '林靖嵐聽障舞團',
    intro: [
      '林靖嵐天生重聽，靠著腳底板去感受地音樂傳遞到木板上的震動跳舞。在過程當中遇到很多聽障朋友想學跳舞，卻沒有管道可以學，想到自己在從小學舞之前也是困難重重找不到老師願意教。',
      '於是在2009年成立林靖嵐聽障舞蹈團，以學舞多年的經驗教學並帶領聽障團員到台灣、各地不同國家的舞台上演出，期許為社會創造最強大的正面力量。'
    ],
    facebook: 'https://www.facebook.com/taiwanfirstdeafdance/',
    instagram: null
  },
  {
    image: '酷手.jpeg',
    name: '12:30 酷手樂團',
    hashtags: ['#openJam就是混總綱', '#排灣族 #混大的舞台'],
    title: '酷手樂團 Kuso Studio',
    intro: [
      '流著排灣族血液的牛哥結交到許多志同道合的朋友，時常帶著樂手一同前往部落，也讓不同族群的好友透過音樂交流，進而創造了酷手獨一無二的Open Jam精神–– 即興中自由的音樂對話。'
    ],
    facebook: 'https://www.facebook.com/kusostudio',
    instagram: null
  },
  {
    image: '雜耍人.png',
    name: '13:30 雜耍人—林惟庸',
    hashtags: ['#把雜耍混出新高度', '#雜耍 #扯鈴 #混小的舞台'],
    title: '雜耍人––林惟庸',
    intro: [
      '曾為太陽馬戲團儲備團員，現為台灣多所學校社團扯鈴及雜耍教練與國際雜耍表演者，精通扯鈴與五花八門丟球雜耍，綽號球王！除了雜耍，接觸音樂長達12年主攻Gospel、Funk爵士鋼琴的他也是音樂編曲與asalato西非迦納旋轉打擊沙鈴的推廣者。'
    ],
    facebook: null,
    instagram: 'https://www.instagram.com/constantine_leen/'
  },
  {
    image: 'New Abria Taiwan.jpg',
    name: '14:30 New Abira TW ',
    hashtags: ['#無論在何地混音樂的精神不變', '#移工樂團 #印尼 #混大的舞台'],
    title: 'New Abira Taiwan',
    intro: [
      '由台灣的印尼移工所組成的音樂團體，主要表演深具代表性的印尼音樂類型Orkes Melayu與Dangdut。由於印尼移工在台灣勞動契約時間的限制 (通常三年到期)，到期必須返回印尼，因此團體成員經常更換。'
    ],
    facebook: 'https://www.facebook.com/RYAN.EXTORA',
    instagram: null
  },
  {
    image: '游阿嬤.jpeg',
    name: '15:30 游阿媽藝站',
    hashtags: ['#混農村搞創生的地方媽媽', '#台語創作 #混宜蘭 #混大的舞台'],
    title: '游阿媽藝站',
    intro: [
      '2012年號召團隊「以藝文活動概念活化阿媽舊厝」，2013年隨即成立游阿媽樂團，吸收在地文史編成歌，多以台語進行譜曲，已有千餘首創作，知名曲目有《礁溪阿媽》、《阿媽老厝》、《與水共生》常受邀於各大機關單位、企業團體等演唱地方故事。'
    ],
    facebook: 'https://www.facebook.com/iyouama/',
    instagram: null
  },
  {
    image: '重擊拉丁.jpeg',
    name: '16:30 臺灣拉丁重擊',
    hashtags: ['#混合各種元素的拉丁音樂', '#拉丁美洲 #尼加拉瓜 #混大的舞台'],
    title: '臺灣拉丁重擊',
    intro: [
      '「臺灣重擊拉丁Taiwan Latin Smash Orchestra 」為目前台灣少數規模最大且完整的拉丁大樂團，集結臺灣最熱情的、爵士，流行及國樂音樂家，為大家帶來最熱情、經典的拉丁音樂！'
    ],
    facebook: 'https://www.facebook.com/TaiwanLatinSmash',
    instagram: 'https://www.instagram.com/taiwanlatinsmash/'
  }
];

export { april2nd, april3rd };
