export type EventItem = {
  image: string;
  name: string;
  time: string[];
  participant: string;
  headcount: string | null;
  pricing: string;
  position: string | null;
  intro: string[];
  experience: string[] | null;
  url: string | null;
  buttonText: string;
};

export type EventObj = {
  title: string;
  subtitle: string;
  color: string;
  list: EventItem[];
};

export type HouseEventObjList = {
  [key in HouseDataType]: EventObj;
};

export type TravelEventObjList = {
  [key in TravelDataType]: EventObj;
};

export enum HouseDataType {
  ARTIST = '藝術家艾雷',
  WOMAN = '女人',
  AFRICA = '阿非卡'
}

export enum TravelDataType {
  ZHONGHE = '混中和緬甸街',
  YINGGE = '混三鶯部落',
  SANCHONG = '混三重美甲店'
}

export const houseEvents: HouseEventObjList = {
  [HouseDataType.ARTIST]: {
    title: '孩在混美術教室',
    subtitle: '屋主｜藝術家艾雷（台北是隻長頸鹿）',
    color: '#EEB033',
    list: [
      {
        image: '孩在混.jpg',
        name: '你好！空軍三重星球（場次A）',
        time: ['4/2（六）10:30-12:30，共2小時'],
        participant: '0-100歲的太空人，一場10人為限',
        headcount: null,
        pricing: '一人參加 350元 / 兩人同行 400元 / 三人同行 700元 / 四人同行 800元',
        position: null,
        intro: [
          '你好！空軍三重星球',
          '你會變裝成一個探索未知星球的太空人',
          '與當地的生物混在一起！',
          '快來和我們一起探索這個神奇的星球， 會有很多奇怪而有趣的生物。',
          '別怕，只要你有氧氣罐就沒問題了！',
          '太空人須知：創意與想像力無敵！'
        ],
        experience: null,
        url: 'https://mixtogether.backme.tw/checkout/2297/18287?locale=zh-TW',
        buttonText: '活動結束'
      },
      {
        image: '孩在混.jpg',
        name: '你好！空軍三重星球（場次B）',
        time: ['4/2（六）14:30-16:30，共2小時'],
        participant: '0-100歲的太空人',
        headcount: null,
        pricing: '一人參加 350元 / 兩人同行 400元 / 三人同行 700元 / 四人同行 800元',
        position: null,
        intro: [
          '你好！空軍三重星球',
          '你會變裝成一個探索未知星球的太空人',
          '與當地的生物混在一起！',
          '快來和我們一起探索這個神奇的星球， 會有很多奇怪而有趣的生物。',
          '別怕，只要你有氧氣罐就沒問題了！',
          '太空人須知：創意與想像力無敵！'
        ],
        experience: null,
        url: 'https://mixtogether.backme.tw/checkout/2297/18298?locale=zh-TW',
        buttonText: '活動結束'
      },
      {
        image: '孩在混.jpg',
        name: '你好！空軍三重星球（場次C）',
        time: ['4/3（日）10:30-12:30，共2小時'],
        participant: '0-100歲的太空人',
        headcount: null,
        pricing: '一人參加 350元 / 兩人同行 400元 / 三人同行 700元 / 四人同行 800元',
        position: null,
        intro: [
          '你好！空軍三重星球',
          '你會變裝成一個探索未知星球的太空人',
          '與當地的生物混在一起！',
          '快來和我們一起探索這個神奇的星球， 會有很多奇怪而有趣的生物。',
          '別怕，只要你有氧氣罐就沒問題了！',
          '太空人須知：創意與想像力無敵！'
        ],
        experience: null,
        url: 'https://mixtogether.backme.tw/checkout/2297/18299?locale=zh-TW',
        buttonText: '活動結束'
      },
      {
        image: '孩在混.jpg',
        name: '你好！空軍三重星球（場次D）',
        time: ['4/3（日）14:30-16:30，共2小時'],
        participant: '0-100歲的太空人',
        headcount: null,
        pricing: '一人參加 350元 / 兩人同行 400元 / 三人同行 700元 / 四人同行 800元',
        position: null,
        intro: [
          '你好！空軍三重星球',
          '你會變裝成一個探索未知星球的太空人',
          '與當地的生物混在一起！',
          '快來和我們一起探索這個神奇的星球， 會有很多奇怪而有趣的生物。',
          '別怕，只要你有氧氣罐就沒問題了！',
          '太空人須知：創意與想像力無敵！'
        ],
        experience: null,
        url: 'https://mixtogether.backme.tw/checkout/2297/18300?locale=zh-TW',
        buttonText: '活動結束'
      }
    ]
  },
  [HouseDataType.WOMAN]: {
    title: '混跡天涯Hostel',
    subtitle: '屋主｜尹柔、Yun、Eva、阿奈、紀丞',
    color: '#E75194',
    list: [
      {
        image: '露營車公路環歐旅行 by YUN.jpg',
        name: '露營車公路環歐旅行 by YUN',
        time: ['4/2（六）10:00-11:30，共1.5小時'],
        participant: '不限，共20人',
        headcount: null,
        pricing: '現場隨喜',
        position: null,
        intro: [
          '#露營車公路旅行 #15個國家50個城市 #遊牧人生',
          '每次說到露營車旅行，大家腦海中一定很多想像空間，但到底實際上住在車上長達半年的時間到底是一個怎麼樣的遊牧體驗呢？我是韵，攝影師，曾旅居法國三年並遊走歐洲15 國超過 50 個城市，這次希望和大家分享我環歐半年光怪陸離的奇妙經歷，以及分享未曾公開的遊牧攝影。'
        ],
        experience: null,
        url: 'https://mixtogether.backme.tw/checkout/2297/18297?locale=zh-TW',
        buttonText: '活動結束'
      },
      {
        image: '遊牧攝影調色工作坊 by Yun.jpg',
        name: '遊牧攝影調色工作坊 by Yun',
        time: ['4/2（六）12:30-14:00，共1.5小時'],
        participant: '不限，共15人',
        headcount: null,
        pricing: '300元',
        position: null,
        intro: [
          '對我來說，我的確把調色看作是一個獨立的、再現的創作過程，它就像是重新走入某個時間的剖面，在那裡，我可以重現那個時刻，以及在那個時刻裡我的感受以及我的精神宇宙。這次的工作坊，我即將分享我是如何在修圖之前覺察和感受，以及如何使用手機修圖，並分享實用的手機修圖軟體，並分享後製調色的秘訣。',
          '#如何在旅行中拍出你愛的色調 #抓出你自己的顏色氛圍感美照 #旅行最重要的就是影像記憶'
        ],
        experience: null,
        url: 'https://mixtogether.backme.tw/checkout/2297/18291?locale=zh-TW',
        buttonText: '活動結束'
      },
      {
        image: '自由的身體·接觸即興工作坊｜AMA izone _ 尹柔.jpeg',
        name: '自由的身體·接觸即興工作坊｜AMA izone / 尹柔',
        time: ['4/2（六）14:30-15:30，共1小時'],
        participant: '不限，共8人',
        headcount: null,
        pricing: '390元（包含一人一份生巧塔與生巧克力）',
        position: null,
        intro: [
          '認識一座城市，從跳舞開始。',
          '哥本哈根的夏日，充滿了在草地上曬太陽的人們，在城市河畔游泳的人們，騎腳踏車穿越街道的人們，享受日不落的夏天與自在的身體。丹麥人覺得在大自然裡裸是一件自然的事，沒有人能干涉一個人裸的自由。自由是平等的基石，在丹麥每個人的職業都是平等的，在這個工作坊我們將會以拿去生活的標籤一層一層褪去導引。',
          '',
          '#自由的身體 #即興的接觸 #撕掉標籤的去認識身邊的旅人 #感受身體與空間的流動'
        ],
        experience: null,
        url: 'https://mixtogether.backme.tw/checkout/2297/18292?locale=zh-TW',
        buttonText: '活動結束'
      },
      {
        image: '飛去不可的朝聖，到自然而然的旅行｜AMA izone _ 尹柔.jpg',
        name: '飛去不可的朝聖，到自然而然的旅行｜AMA izone / 尹柔',
        time: ['4/2（六）15:45-16:45，共1小時'],
        participant: '不限，共20人',
        headcount: null,
        pricing: '現場隨喜',
        position: null,
        intro: [
          '「你曾有過一片曠野一直呼喚你的內在？」',
          '',
          '聖境追尋：',
          '「我知道我有一天會到尼泊爾，但從沒計劃過就是此刻從恆河一路往北從藍毗尼進去。我知道我有天會到埃及，但從沒想到是在傳染病期間。」',
          '這個分享會中，尹柔會分享從圖像與纖維創作中，理解到旅途中與生活中遇見的事件，都指引著心之所向，身體體驗到的朝聖，更清楚解構內心的提問。'
        ],
        experience: null,
        url: 'https://mixtogether.backme.tw/checkout/2297/18293?locale=zh-TW',
        buttonText: '活動結束'
      },
      {
        image: '大地的曼陀羅工作坊 EVA與阿奈.jpg',
        name: '大地的曼陀羅工作坊 EVA與阿奈',
        time: ['4/3（日）10:00-11:00，共1小時'],
        participant: '不限，共10人',
        headcount: null,
        pricing: '250元',
        position: null,
        intro: [
          '讓我們拾起畫筆、拾起色彩，衍生你的創意與靈感。',
          '讓我們在大石上繪畫創作，與自然的創作結合。',
          '再以植物、花卉與手繪石頭們排出曼陀羅陣。',
          '',
          '這是一個與自然連結的藝術工作坊，',
          '期待與你在這個時空裡相遇。',
          '#拾起石頭、花葉 #拾起大自然的禮物 #感受畫筆感受自己的能量'
        ],
        experience: null,
        url: 'https://mixtogether.backme.tw/checkout/2297/18289?locale=zh-TW',
        buttonText: '活動結束'
      },
      {
        image: '神奇的印度之旅｜AMA izone _尹柔 _ 阿奈.JPG',
        name: '神奇的印度之旅｜AMA izone /尹柔 & 阿奈',
        time: ['4/3（日）11:00-12:00，共1小時'],
        participant: '不限，共20人',
        headcount: null,
        pricing: '現場隨喜',
        position: null,
        intro: [
          '大家都說印度充滿了魔法，每個去過的人都叫印度,India mama，在印度你會遇到來自世界各地的人，這裡像是旅者的入門課，你會有人們的緣分和與印度的連結，來聽聽我們在印度的體驗。',
          '',
          '「印度是一個永遠無法預測的地方 you never know」- 柔',
          '「是一個會讓旅者一去再去的國家」-奈',
          '',
          '#每位旅者的入門課 #每位去過的旅者都會著迷#來認識充滿魔法的印度'
        ],
        experience: null,
        url: 'https://mixtogether.backme.tw/checkout/2297/18294?locale=zh-TW',
        buttonText: '活動結束'
      },
      {
        image: '北亞大陸的旅遊-音樂與茶的分享｜紀辰.jpg',
        name: '北亞大陸的旅遊-音樂與茶的分享｜紀辰',
        time: ['4/3（日）13:00-14:00，共1小時'],
        participant: '不限，共20人',
        headcount: null,
        pricing: '111元',
        position: null,
        intro: [
          '尋找路上的歌、自己心裏的聲音與食物分享。',
          '圍坐喝一碗鹹奶茶，',
          '請自備個人杯子容器 ：）',
          '',
          '第一次聽見呼麥喉音音樂，豎起耳朵、勾住靈魂，而去到西伯利亞圖瓦、新疆阿勒泰山脈、內蒙古，遇見泰加林的牧笛與馬尾胡琴還有草原音樂長歌。這次想唱這些地方的歌與講這些歌與歌之間的故事。',
          '',
          '#透過旅行認識自己 #認識自己因而找到自己的聲音 #另一種旅行的聽覺'
        ],
        experience: null,
        url: 'https://mixtogether.backme.tw/checkout/2297/18295?locale=zh-TW',
        buttonText: '活動結束'
      },
      {
        image: '給自己一趟沒有計畫沒有盡頭的退標籤之旅.jpeg',
        name: '給自己一趟沒有計畫沒有盡頭的退標籤之旅',
        time: ['4/3（日）14:30-16:00，共1.5小時'],
        participant: '不限，共20人',
        headcount: null,
        pricing: '現場隨喜',
        position: null,
        intro: [
          '你有沒有想過生命走到現在，我是誰？什麼是我最想做的事？如果就來地球這麼一趟我想不帶遺憾的離開！ 2019年被宇宙推著屁股買了張單程機票、背起胡亂打包的行囊與朋友贈與的二手背包，沒有計劃的出發了！ ',
          '想分享這一年多在東南亞流浪了三圈發生的奇幻體驗，如何隨順生命之流用最少的金錢創造最大的快樂。以及回來後決定跟隨生命線索，從發現自我到為大地媽媽服務的創業故事。',
          '',
          '#還不小心在寮國開了咖啡店 #預計一個禮拜變成了一年的旅行 #旅行中找到自己最大的生命線索'
        ],
        experience: null,
        url: 'https://mixtogether.backme.tw/checkout/2297/18296?locale=zh-TW',
        buttonText: '活動結束'
      }
    ]
  },
  [HouseDataType.AFRICA]: {
    title: '混入非非選物沙龍',
    subtitle: '屋主｜wowAfrica 阿非卡',
    color: '#00a75d',
    list: [
      {
        image: '非行日記.jpg',
        name: '非行日記，當我的人生混入非洲',
        time: ['4/2（六）13:00，約20分鐘', '4/3（日）15:00，約20分鐘'],
        participant: '不限',
        headcount: null,
        pricing: '免費',
        position: null,
        intro: [
          '#生活經驗 #心靈成長 #職涯發展 #文化尊重',
          '非洲的經驗對人的影響有多大？wowAfrica創辦人韋辰和佩佩將分享他們在非洲的所見所聞，以及非洲對他們的生命有什麼樣重大的改變。'
        ],
        experience: null,
        url: null,
        buttonText: '活動結束'
      },
      {
        image: '非洲編髮.jpg',
        name: '非洲編髮沙龍',
        time: ['即將揭曉'],
        participant: '有頭髮的都行！一時段1人為限',
        headcount: null,
        pricing: '即將揭曉',
        position: null,
        intro: [
          '編髮是非洲人的時尚日常，來自非洲的兩位編髮師即將現身三重，幫你量身打造超混髮型，今天來點不一樣的造型，讓自己混入一點非洲的fashion 吧！'
        ],
        experience: null,
        url: 'https://forms.gle/1TMJUzurZHtZwfCHA',
        buttonText: '活動結束'
      }
    ]
  }
};

export const travelEvents: TravelEventObjList = {
  [TravelDataType.ZHONGHE]: {
    title: '雲南人帶路，混進中和緬甸街',
    subtitle: '帶路人｜李慧玲—華僑、緬語教師',
    color: '#00a75d',
    list: [
      {
        image: '緬甸街.jpeg',
        name: '嚐嚐緬甸奶茶，認識緬甸的點心文化',
        time: ['4/17（日）15:00-17:00'],
        participant: '奶茶控 / 螞蟻人 / 歡迎家庭親子',
        headcount: '15人',
        pricing:
          '250元/人（含點心奶茶、導覽機）<br/> ※本活動為鼓勵民眾更認識不同文化，費用僅含餐點、材料及保險費，也鼓勵民眾後續多多參與文化活動。',
        position: '中和華新街（報名後通知地點）',
        intro: [
          '你喜歡嘗試異國點心嗎？許久沒辦法到處旅行的你，有去過在中和的一條神秘街道嗎？',
          '',
          '在中和華新街上，有著琳瑯滿目的緬甸文招牌，每間店賣著老闆拿手的緬甸菜、雲南菜、印度菜！',
          '但唯一的共通點，不管什麼料理，都可以搭配一杯緬甸奶茶！',
          '',
          '為什麼各式各樣的異國美食，都出現在中和緬甸街呢？而「奶茶」，又是怎麼成為大家的交集點，這天下午，我們一起泡進一間奶茶館，聊聊這些故事吧！（以及人多勢眾，一口氣點滿玻璃櫥櫃裡各個點心品項）'
        ],
        experience: [
          '探尋：緬甸街與奶茶的淵源',
          '品嚐：玻璃櫃中的南洋點心家族',
          '盲測：與同桌夥伴們，一起盲測緬甸街各家奶茶'
        ],
        url: 'https://mixtogether.backme.tw/checkout/2297/18310?locale=zh-TW',
        buttonText: '立即報名'
      },
      {
        image: '緬甸街.jpeg',
        name: '開一桌雲南辦桌，聊聊緬僑的離鄉故事',
        time: ['4/17（日）18:00-20:00'],
        participant: '喜愛嘗試不同料理 / 同是異鄉人',
        headcount: '15人',
        pricing:
          '450元/人（含雲南辦桌晚餐/葷食、導覽機）<br/> ※本活動為鼓勵民眾更認識不同文化，費用僅含餐點、材料及保險費，也鼓勵民眾後續多多參與文化活動。',
        position: '中和華新街（報名後通知地點）',
        intro: [
          '「台灣人喜歡吃的雲南菜，跟雲南人自己吃的調味，會有不一樣嗎？」',
          '',
          '關於這個問題，準備好你的肚子，今晚，雲南人慧玲直接點滿一桌她最懷念的家鄉味，配著雲南風味，聊著慧玲當初離鄉背井來台灣求學最後落地生根的故事。',
          '',
          '聊聊酒足飯飽後，逛逛「南洋雜貨店」幫助消化，夜深後走入「緬甸佛堂」，一同在虔誠信仰中，感受南傳佛教如何照顧著緬甸街上的朋友。'
        ],
        experience: [
          '聊聊：雲南-緬甸-台灣的遷移故事',
          '了解：南傳佛教與緬甸街生活密不可分的連結',
          '嚐嚐：熟客才懂吃的雲南菜'
        ],
        url: 'https://mixtogether.backme.tw/checkout/2297/18521?locale=zh-TW',
        buttonText: '立即報名'
      }
    ]
  },
  [TravelDataType.YINGGE]: {
    title: '族人帶路，混進三鶯阿美部落',
    subtitle: '帶路人｜珮瑜—南靖部落族人、佳如—三鶯部落族人',
    color: '#e75194',
    list: [
      {
        image: '三鶯部落.jpeg',
        name: '【線上體驗】走啦！ina叫我們去採菜～阿美野菜園了解一下',
        time: ['5/28（六）13:00-14:30'],
        participant: '熱愛自然與生態智慧 / 著迷原民文化 ',
        headcount: '30人',
        pricing:
          '0元/人 <br/> ※提醒您，為鼓勵參與者們，更認識不同文化，能互相交流。線上活動中，會安排環節讓參與者「開麥克風、開鏡頭」一起聊聊自己生活經驗，聊聊文化認同，記得使用方便交流的設備來參加喔～（因為會使用到釘選畫面的功能，請盡可能使用電腦來參與線上活動）',
        position: '線上google meet平台（報名後提供連結）',
        intro: [
          '「小心！你走進我們阿美族的冰箱，不要踩到裡面的菜嘿～」',
          '',
          'ina 是阿美族語，媽媽的意思。這趟線上旅程，族人將帶著我們，探索大漢溪畔，一個近代慢慢生成的阿美部落，當年從各地北上的族人們，參與大台北的建設，也在他們熟悉的河畔生態旁，建起了部落，傳承文化。來自不同地方的族人，怎麼牽起彼此生活，成為新的家人，在陌生的土地上，怎麼找尋／開墾出熟悉的野菜滋味？',
          '',
          '「ina説，這個野菜你家旁邊也會有吶！」'
        ],
        experience: [
          '到底：都市裡，怎麼跑出一個北漂原民聚集的混合部落？',
          '探險：ina的野菜園＋整個部落，學到飽！',
          '居然：你家旁邊公園也找得到野菜！怎麼採怎麼吃？'
        ],
        url: 'https://mixtogether.backme.tw/checkout/2297/19321?locale=zh-TW',
        buttonText: '立即報名'
      },
      {
        image: '三鶯部落.jpeg',
        name: '【線上體驗】喂！有沒有在家～到長不一樣的部落家屋串門子',
        time: ['5/28（六）15:30-17:00'],
        participant: '對居住議題感興趣 / 想認識不一樣的部落生活',
        headcount: '30人',
        pricing:
          '0元/人 <br/> ※提醒您，為鼓勵參與者們，更認識不同文化，能互相交流。線上活動中，會安排環節讓參與者「開麥克風、開鏡頭」一起聊聊自己生活經驗，聊聊文化認同，記得使用方便交流的設備來參加喔～（因為會使用到釘選畫面的功能，請盡可能使用電腦來參與線上活動）',
        position: '線上google meet平台（報名後提供連結）',
        intro: [
          '三峽北大，不遠處一個平凡涵洞，穿過後映入眼簾，卻是個「超神奇」社區，一定可以驚訝到你 —— 「真的嗎！這裡也是部落嗎？」',
          '',
          '快來這個長得「不一樣」，發展歷程也很「不一樣」的三鶯部落串門子吧！一會兒，泡泡那間雜貨店；一會兒，溜進Kacaw阿公在後院搭起的木作工作室。穿梭一間間家屋，認識部落中「老／青／幼」三代人，家裡頭物件與故事。搞不好能從這些生活分享中，蹦出更多這群「不一樣」的有趣房子，怎麼從土地上，用力冒出頭的故事。'
        ],
        experience: [
          '原來：族人爭取自力建屋的的社會運動脈絡',
          '去玩：阿美混血泰雅的Umo小弟家（喔就是我們主視覺的男主角！）',
          '敲門：「老／青／幼」三代族人的家屋生活風情'
        ],
        url: 'https://mixtogether.backme.tw/checkout/2297/19322?locale=zh-TW',
        buttonText: '立即報名'
      }
    ]
  },
  [TravelDataType.SANCHONG]: {
    title: '越南人帶路，混進三重美甲店',
    subtitle: '帶路人｜陳秋柳—越南舞者、演員 ',
    color: '#9567e8',
    list: [
      {
        image: '三重.jpeg',
        name: '陌生城市生存記：跟著越南姊姊三重探險',
        time: ['4/24（日）12:00-13:30'],
        participant: '好奇不同角度看台灣 / 想了解不同的人生冒險故事',
        headcount: '15人',
        pricing:
          '300元/人（含DIY午餐/葷食、導覽機）<br/> ※本活動為鼓勵民眾更認識不同文化，費用僅含餐點、材料及保險費，也鼓勵民眾後續多多參與文化活動。',
        position: '三重碧華公園正門口',
        intro: [
          '「剛抵達台灣的越南姊妹，怎麼在台灣建構起自己的生活圈？」',
          '',
          '你將跟著來台近20年的陳秋柳老師，一起走過她當年從越南來到三重落腳的點點滴滴，學習在公園擺「美甲攤」的街頭生存智慧，走進我們再熟悉不過的「台灣傳統市場」中尋寶，但挑戰是要在異鄉，用台灣食材搭配出思思念念的越南家鄉味。最後一起來到從美甲攤到現在已是一間店面的美甲店！嘗試做越南輕食，一起聽移居的人生故事。'
        ],
        experience: [
          '一探：公園裡神秘的美甲生態系',
          '挑戰：從看似台式的傳統市場中，組合出越式美食',
          '聊聊：越南移民適應台灣生活的點滴心得'
        ],
        url: 'https://mixtogether.backme.tw/checkout/2297/18524?locale=zh-TW',
        buttonText: '立即報名'
      },
      {
        image: '三重.jpeg',
        name: '越式美甲工作室開箱！成為彼此的美甲師',
        time: ['4/24（日）14:30-16:00'],
        participant: '想一探美甲工作室 / 想聽在異地的尋夢故事',
        headcount: '五～七組 (15人)',
        pricing:
          '400元/2人一組｜550元/3人一組（含點心及一組一套美甲工具借用）<br/> ※本活動為鼓勵民眾更認識不同文化，費用僅含餐點、材料及保險費，也鼓勵民眾後續多多參與文化活動。',
        position: '三重徐匯中學站1號出口',
        intro: [
          '你有嘗試過給別人美甲嗎？如果有，那幫別人美甲呢？可能就是很少有的經驗吧！',
          '',
          '「當你細心幫對方照顧指甲時，那樣的心意，會成為一股暖暖的流，透過指尖傳給對方。」這是越南新住民陳秋柳做美甲工作室多年的感觸。',
          '',
          '秋柳老師一路上斜槓了許多志業，演戲、舞蹈、擔任通譯、在學校教越語，也受邀到各地談越南文化與美食。而他找尋自己夢想生活的起點，是美甲。這個下午，她會和我們聊聊這些慢慢嘗試的過程。帶著大家練習簡單的越式美甲5步驟，讓大朋友小朋友，能透過美甲，拉近關係照顧彼此。'
        ],
        experience: [
          '聽聽：帶路人從美甲、通譯、到音樂劇演員的異鄉逐夢故事',
          '體驗：幫彼此做基礎指甲護理',
          '嚐嚐：老師準備的超用心越南點心'
        ],
        url: 'https://mixtogether.backme.tw/shops/2339?locale=zh-TW',
        buttonText: '立即報名'
      }
    ]
  }
};
