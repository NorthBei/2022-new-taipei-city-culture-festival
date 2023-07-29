'use client';

import Image from 'next/image';
import { useCallback } from 'react';
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Parallax } from 'react-scroll-parallax';

import styles from '@/styles/About.module.css';

const imageList = [
  'about-person-1.jpg',
  'about-person-2.jpg',
  'about-person-3.jpg',
  'about-person-4.jpg',
  'about-person-5.jpg'
];

const About = () => {
  const [selectImg, setSelectImg] = useState<string>(imageList[0]);
  const [optionImages, setOptionImages] = useState<string[]>(imageList.slice(1));

  const onImageSelect = useCallback(
    (newSelectImg: (typeof imageList)[number], idx: number) => {
      const oldImg = selectImg;
      setSelectImg(newSelectImg);
      const images = [...optionImages];
      images[idx] = oldImg;
      setOptionImages(images);
    },
    [selectImg, optionImages]
  );

  return (
    <section id="about" className={styles.about}>
      <div className={styles.banner}>
        <Image
          src="/images/about-title-img.jpg"
          width="1512"
          height="447"
          alt="section title"
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
            objectPosition: 'center'
          }}
        />
      </div>
      <div className={styles.banner_mark}>
        <Parallax translateY={[-20, 30]}>
          <Image
            src="/images/about-title-mark.svg"
            className="w-100"
            width="360"
            height="310"
            alt="about section decoration"
            style={{
              maxWidth: '100%',
              height: 'auto'
            }}
          />
        </Parallax>
      </div>
      <Container className="pb-3 pt-5 py-md-5 px-3 px-md-0">
        <div className={styles.parallax_icon_smile}>
          <div className="me-0 me-md-5">
            <Parallax translateY={[-20, 30]}>
              <Image
                src="/images/parallax-icon-smile.svg"
                width="200"
                height="200"
                alt="about section decoration"
                style={{
                  maxWidth: '100%',
                  height: 'auto'
                }}
              />
            </Parallax>
          </div>
        </div>
        <Row className="py-5 g-5">
          <Col lg={6} className="d-flex flex-column align-items-center justify-content-center">
            <Image
              src={`/images/${selectImg}`}
              className={styles.person}
              width="480"
              height="480"
              alt="person intro"
              style={{
                maxWidth: '100%',
                height: 'auto'
              }}
            />

            <div className="d-flex mt-4 mx-0 mx-md-5">
              {optionImages.map((img, idx) => {
                return (
                  <div key={img} onClick={() => onImageSelect(img, idx)} className={styles.person}>
                    <Image
                      src={`/images/${img}`}
                      width="480"
                      height="480"
                      alt="person intro"
                      style={{
                        maxWidth: '100%',
                        height: 'auto'
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </Col>
          <Col lg={6} className="d-flex flex-column justify-content-center">
            <h1 className={styles.title}>ABOUT</h1>
            <h2 className={styles.subtitle}>2022新北市多元文化節</h2>
            <p className={styles.text}>
              「欸～你混哪！」不管是源自於不同文化家庭的混血，或你現在正混在一個不同文化的地方，或是你的生活由不同文化混合而成，都歡迎來「當我們混在一起」！
            </p>
            <p className={styles.text}>
              新北市一直以來都是有著許多移居者的多元城市，不同面貌的文化生活在不同角落自然發芽。「新北市多元文化節」的舉辦，期待每年一次，讓我們走上街道「混在一起」，分享彼此的生活和故事，也了解更多不同文化背景的新朋友，混搭混合出新的可能性。
            </p>
            <p className={styles.text}>我們準備好超精彩「街頭音樂市集」和「小旅行」了！你準備好來混了嗎！</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
