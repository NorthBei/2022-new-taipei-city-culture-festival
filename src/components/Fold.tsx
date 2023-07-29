'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { useCallback } from 'react';
import Marquee from 'react-fast-marquee';
import { Parallax } from 'react-scroll-parallax';
import Slider from 'react-slick';

import NavDialog from '@/components/NavDialog';
import { foldMobileSlides, foldPcSlides } from '@/data/slides';
import styles from '@/styles/Fold.module.css';

const Fold = () => {
  const [showNav, setShowNav] = useState<boolean>(false);

  const settings = useMemo(() => {
    return {
      arrows: false,
      className: styles.slides,
      infinite: true,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 5000,
      speed: 2500,
      fade: true
    };
  }, []);

  const onNavDialogClose = useCallback(() => setShowNav(false), []);

  const onScrollToTop = useCallback(() => {
    document.querySelector('#fold')?.scrollIntoView({
      behavior: 'smooth'
    });
  }, []);

  return (
    <section id="fold" className={styles.fold}>
      <nav className="d-none d-md-block">
        <div className={styles.nav_desktop}>
          <a href="#fold" className={styles.nav_desktop_logo}>
            <Image src="/images/logo-menu.jpg" width="60" height="60" alt="logo" />
          </a>
          <div className="d-flex align-items-center flex-fill justify-content-evenly">
            <a href="#about" className={styles.nav_item}>
              關於我們
            </a>
            <a href="#event-info" className={styles.nav_item}>
              世界音樂派對
            </a>
            <a href="#travel" className={styles.nav_item}>
              新北小旅行
            </a>
            <a
              href="https://www.culture.ntpc.gov.tw/xceventsnews/cont?xsmsid=0G295700334178642420&qcat=0G336743893825971626&sid=0M076662667186003601"
              target="_blank"
              rel="noreferrer"
              className={styles.nav_item}
            >
              更多系列活動
            </a>
          </div>
        </div>
      </nav>
      <nav className="d-block d-md-none">
        <div onClick={() => setShowNav(true)} className={styles.nav_mobile}>
          <Image src="/images/icon-hamburgerbar.svg" width="50" height="50" alt="menu logo" />
        </div>
        <div onClick={onScrollToTop} className={styles.to_top_mobile}>
          <Image src="/images/to_top.svg" width="50" height="50" alt="to top button" />
        </div>
      </nav>
      <NavDialog show={showNav} onClose={onNavDialogClose} />
      {/* PC */}
      <div className="d-none d-md-block">
        <Slider {...settings}>
          {foldPcSlides.map((item, index) => {
            return (
              <div className="h-100" key={index}>
                <Image
                  src={item.image}
                  width="1512"
                  height="982"
                  alt="fold slide"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    ...item.style
                  }}
                />
              </div>
            );
          })}
        </Slider>
        <div className={styles.parallax_icon_star}>
          <Parallax translateY={[-20, 30]}>
            <Image src="/images/parallax-icon-star.svg" width="156" height="160" alt="travel section decoration" />
          </Parallax>
        </div>
      </div>
      {/* Mobile */}
      <div className="d-block d-md-none">
        <Slider {...settings}>
          {foldMobileSlides.map((item, index) => {
            return (
              <div className="h-100" key={index}>
                <Image
                  src={item.image}
                  width="1200"
                  height="1799"
                  alt="fold slide1"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top'
                  }}
                />
              </div>
            );
          })}
        </Slider>
      </div>
      <div className={styles.content}>
        <div className="d-flex justify-content-center justify-content-md-between mt-0 mt-md-5 px-3 px-md-5">
          <span className="d-none d-md-none invisible">
            <Image
              src="/images/date.png"
              width="102"
              height="188"
              alt="date info"
              style={{
                maxWidth: '100%',
                height: 'auto',
                objectFit: 'cover',
                objectPosition: 'center top'
              }}
            />
          </span>
          <span>
            <Image
              src="/images/logo-main.png"
              className="px-4"
              width="549"
              height="190"
              alt="logo"
              style={{
                maxWidth: '100%',
                height: 'auto',
                transform: 'scaleY(1.15) translateY(7px)'
              }}
            />
          </span>
          <span className="d-none d-md-block">
            <Image
              src="/images/date.png"
              width="102"
              height="188"
              alt="date info"
              style={{
                maxWidth: '100%',
                height: 'auto',
                objectFit: 'cover',
                objectPosition: 'center top'
              }}
            />
          </span>
        </div>
        <div className="d-block d-md-none">
          <div className={styles.content_float_date}>
            <Image src="/images/date.png" width="60" height="110" alt="date info" />
          </div>
        </div>
      </div>
      <Marquee className={styles.marquee} speed={40} gradient={false}>
        <div className={styles.marquee_orgs}>
          <div className="d-flex">
            <span className="d-flex me-5">
              <span className={styles.marquee_org_text}>主辦單位</span>
              <Image
                src="/images/org-1.svg"
                width="110"
                height="33"
                alt="org logo"
                style={{
                  maxWidth: '100%',
                  height: 'auto'
                }}
              />
            </span>
            <span className="d-flex me-5">
              <span className={styles.marquee_org_text}>承辦單位</span>
              <Image
                src="/images/org-2.svg"
                width="135"
                height="33"
                alt="org logo"
                style={{
                  maxWidth: '100%',
                  height: 'auto'
                }}
              />
            </span>
            <span className="d-flex me-5">
              <span className={styles.marquee_org_text}>協辦單位</span>
              <Image
                src="/images/org-3.svg"
                width="90"
                height="35"
                alt="org logo"
                style={{
                  maxWidth: '100%',
                  height: 'auto'
                }}
              />
            </span>
            <span className="d-flex me-5">
              <Image
                src="/images/org-4.svg"
                width="40"
                height="28"
                alt="org logo"
                style={{
                  maxWidth: '100%',
                  height: 'auto'
                }}
              />
            </span>
            <span className="d-inline-block mx-3"></span>
          </div>
        </div>
        <div>
          各位鄉親父老兄弟姊妹阿公阿嬤叔叔阿姨！歡迎一起來參加2022新北多元文化節「當我們混在一起」，4/2-3 我就混這條街
          世界音樂派對，4/17.23.24 你混哪小旅行（三鶯場延到5/28） 探索新北多元生活。欸！要來喔，一起混辣～～～
        </div>
      </Marquee>
    </section>
  );
};

export default Fold;
