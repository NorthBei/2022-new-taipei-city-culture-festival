import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import type { Metadata } from 'next';

import Provider from './provider';

const title = '當我們混在一起 Mix Together - 2022 新北市多元文化節';
const description =
  '如何表達一座城市的多元文化？—— 我們都不一樣，但我們能混在一起！混血的、混搭的、混合的、鬼混的，不管你是 ㄏㄨㄣˋ 還是 ㄏㄨㄣˇ，來現場一起 hang out 就知道 ヽ(⌐■_■)ノ♪♬';
const webSiteUrl = 'https://2022-new-taipei-city-culture-festival.netlify.app'; // 'https://mixtogether.fun';

export const metadata: Metadata = {
  metadataBase: new URL(webSiteUrl),
  title,
  description,
  viewport: 'width=device-width, initial-scale=1, user-scalable=1',
  keywords: [
    '多元文化',
    '新北市多元文化節',
    '音樂市集',
    '文化市集',
    '混在一起',
    'Mix together',
    '空軍三重一村',
    '異國活動'
  ],
  openGraph: {
    title,
    description,
    url: webSiteUrl,
    images: [
      {
        url: '/images/fb-image.png',
        width: 1200,
        height: 673
      }
    ],
    locale: 'zh_TW',
    type: 'website'
  },
  icons: {
    icon: '/favicon/favicon-32x32.png',
    shortcut: '/favicon/favicon.ico',
    apple: '/favicon/apple-touch-icon.png',
    other: {
      rel: 'mask-ico',
      url: '/favicon/safari-pinned-tab.svg',
      color: '#EEB033'
    }
  },
  themeColor: '#EEB033',
  manifest: '/favicon/site.webmanifest'
};

type RootLayoutType = {
  children: React.ReactNode;
};

export default function RootLayout(props: RootLayoutType) {
  const { children } = props;

  return (
    <html lang="zh">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
