'use client';

import Image from 'next/image';
import { ReactNode, useCallback, useMemo, useRef, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Slider from 'react-slick';

import type { ApplyDialogRef } from '@/components/ApplyDialog';
import ApplyDialog from '@/components/ApplyDialog';
import type { InfoDialogHandle } from '@/components/InfoDialog';
import InfoDialog from '@/components/InfoDialog';
import MapDialog from '@/components/MapDialog';
import type { EventObj } from '@/data/events';
import { HouseDataType, houseEvents } from '@/data/events';
import houseList from '@/data/houseList';
import marketplaceList from '@/data/marketplaceList';
import type { Perform } from '@/data/performList';
import * as allPerforms from '@/data/performList';
import styles from '@/styles/EventInfo.module.css';

enum APRIL {
  THE_2ND = 'april2nd',
  THE_3RD = 'april3rd'
}

enum EVENT_KEY {
  MAP = '0',
  NONE = ''
}

// Due to slick has some problem, we need this component ref: https://github.com/akiran/react-slick/issues/1195
type SlickButtonFixProps = {
  currentSlide: string;
  slideCount: number;
  children: ReactNode;
};

const SlickButtonFix = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  currentSlide,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  slideCount,
  children,
  ...props
}: SlickButtonFixProps) => <span {...props}>{children}</span>;

const EventInfo = () => {
  const [isShowMap, setShowMap] = useState<boolean>(false);
  const houseDialog = useRef<ApplyDialogRef>(null);
  const [houseEvent, setHouseEvent] = useState<EventObj>(houseEvents[HouseDataType.AFRICA]);
  const infoDialog = useRef<InfoDialogHandle>(null);
  const [eventKey, setEventKey] = useState<string>('');
  const [performDate, setPerformDate] = useState<string>(APRIL.THE_2ND);
  const [performs, setPerforms] = useState<Perform[]>(allPerforms.april2nd);
  const [selectPerform, setSelectPerform] = useState<Perform | null>(null);

  const onExpandMap = useCallback(() => {
    const newEventKey = eventKey === EVENT_KEY.NONE ? EVENT_KEY.MAP : EVENT_KEY.NONE;
    setEventKey(newEventKey);
  }, [eventKey]);

  const settings = useMemo(() => {
    return {
      className: '',
      dots: false,
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: false,
      arrows: true,
      adaptiveHeight: true,
      nextArrow: (
        <SlickButtonFix currentSlide="none" slideCount={0}>
          <Image src="/images/icon-arrow-right.svg" width={30} height={30} alt="next arrow" />
        </SlickButtonFix>
      ),
      prevArrow: (
        <SlickButtonFix currentSlide="none" slideCount={0}>
          <Image src="/images/icon-arrow-left.svg" width={30} height={30} alt="pre arrow" />
        </SlickButtonFix>
      ),
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true
          }
        }
      ]
    };
  }, []);

  const onOpenHouseDialog = useCallback(
    (type: HouseDataType) => {
      setHouseEvent(houseEvents[type]);
      houseDialog.current?.open();
    },
    [houseDialog]
  );

  const onOpenInfoDialog = useCallback(
    (perform: Perform) => {
      setSelectPerform(perform);
      infoDialog.current?.open();
    },
    [infoDialog]
  );

  const onChangePerformDate = useCallback((date: APRIL) => {
    switch (date) {
      case APRIL.THE_2ND: {
        setPerforms(allPerforms.april2nd);
        setPerformDate(APRIL.THE_2ND);
        break;
      }
      case APRIL.THE_3RD: {
        setPerforms(allPerforms.april3rd);
        setPerformDate(APRIL.THE_3RD);
        break;
      }
    }
  }, []);

  return (
    <section id="event-info" className={styles.event_info}>
      <div className={styles.banner}>
        <Image
          src="/images/event-info-title-img.jpg"
          width="1512"
          height="447"
          alt="event banner"
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto'
          }}
        />
        <div className={styles.banner_mark}>
          <Image
            src="/images/event-info-title-text.svg"
            className=""
            width="380"
            height="234"
            alt="event banner text"
            style={{
              maxWidth: '100%',
              height: 'auto'
            }}
          />
        </div>
      </div>
      <MapDialog show={isShowMap} onClose={() => setShowMap(false)} />
      <div className="d-none d-md-block">
        <button onClick={() => setShowMap(true)} className={styles.desktop_map_btn}>
          看看活動地圖
        </button>
      </div>
      <div className="d-block d-md-none">
        <button className={styles.mobile_map_btn} onClick={onExpandMap}>
          展開活動地圖▼
        </button>
        <Accordion activeKey={eventKey}>
          <Accordion.Collapse eventKey={EVENT_KEY.MAP}>
            <Image
              src="/images/workspace-map.jpg"
              width="698"
              height="1510"
              alt="workspace map"
              style={{
                maxWidth: '100%',
                height: 'auto'
              }}
            />
          </Accordion.Collapse>
        </Accordion>
      </div>
      <Container className="my-0 my-md-5 py-0 py-md-5 px-3 px-md-5">
        <div className="pt-4 d-none d-md-block">
          <h1 className={styles.title_desktop}>時間｜2022/4/2-3 10:00-16:00</h1>
          <h1 className={styles.title_desktop}>地點｜空軍三重一村(新北市三重區正義南路86巷)</h1>
        </div>

        <div className="pt-4 d-block d-md-none">
          <h1 className={styles.title_mobile}>時間｜2022/4/2-3 10:00-16:00</h1>
          <h1 className={styles.title_mobile}>地點｜空軍三重一村(新北市三重區正義南路86巷)</h1>
        </div>

        {/* 混舞台 */}
        <InfoDialog ref={infoDialog} perform={selectPerform}></InfoDialog>
        <div className="info-section py-5">
          <div className="d-flex flex-column flex-lg-row align-items-center align-items-lg-start my-4 my-4">
            <div className={styles.info_section_img}>
              <Image
                src="/images/event-info-stage-subtitle.svg"
                width="207"
                height="207"
                alt="section subtitle"
                style={{
                  maxWidth: '100%',
                  height: 'auto'
                }}
              />
            </div>
            <div className="d-flex flex-column flex-1 ms-0 ms-md-4 mt-3 mt-lg-0">
              <p className={styles.info_section_text}>
                以電子花車（混大的舞台）、街道上的小台子（混小的舞台）為場域，集結跨不同文化的表演者，帶來音樂、舞蹈、雜耍等不同形式的表演，現場也鼓勵不同參加者「混在一起」玩出不同的精彩內容！
              </p>
              <span className="d-inline-block mt-3 d-md-none"></span>
              <div className="d-flex justify-content-center justify-content-lg-start my-3">
                <button
                  onClick={() => onChangePerformDate(APRIL.THE_2ND)}
                  className={`${performDate === APRIL.THE_2ND ? styles.stage_date_btn_active : styles.stage_date_btn}`}
                >
                  4/2 (六)
                </button>
                <span className="d-inline-flex mx-2"></span>
                <button
                  onClick={() => onChangePerformDate(APRIL.THE_3RD)}
                  className={`${performDate === APRIL.THE_3RD ? styles.stage_date_btn_active : styles.stage_date_btn}`}
                >
                  4/3 (日)
                </button>
              </div>
              <div className="d-flex justify-content-center justify-content-lg-start">
                <span className="d-none d-md-block">
                  <h3 className={styles.stage_title_desktop}>各種超混表演，一起play！</h3>
                </span>
                <span className="d-block d-md-none">
                  <h3 className={styles.stage_title_mobile}>各種超混表演，一起play！</h3>
                </span>
              </div>
            </div>
          </div>
          <div className="mb-5">
            <Slider {...settings}>
              {performs.map((perform) => {
                return (
                  <article className="d-flex justify-content-center" key={perform.name}>
                    <div className={styles.stage_event}>
                      <h3 className={styles.stage_event_text}>{perform.name}</h3>
                      <div className={styles.stage_event_img_wrapper}>
                        <Image
                          src={`/images/${perform.image}`}
                          width="384"
                          height="256"
                          alt="perform image"
                          className={styles.stage_event_img}
                        />
                      </div>
                      <p className={styles.stage_event_tags}>
                        {perform.hashtags[0]}
                        <br />
                        {perform.hashtags[1]}
                      </p>
                      <button onClick={() => onOpenInfoDialog(perform)} className={styles.stage_event_btn}>
                        暸解更多
                      </button>
                    </div>
                  </article>
                );
              })}
            </Slider>
          </div>
        </div>

        {/* 混市集 */}
        <div className="info-section pt-3 pb-5">
          <div className="d-flex flex-column flex-lg-row align-items-center align-items-lg-start my-4">
            <div className={styles.info_section_img}>
              <Image
                src="/images/event-info-market-subtitle.svg"
                width="207"
                height="207"
                alt="section subtitle"
                style={{
                  maxWidth: '100%',
                  height: 'auto'
                }}
              />
            </div>
            <div className="d-flex flex-column flex-1 ms-0 ms-lg-4 mt-3 mt-lg-0">
              <p className={styles.info_section_text}>
                以眷村老房子為背景，每個攤位都像是生活中的鄰居，一起出來玩耍！攤位由特定文化、跨文化、或與探索文化相關的主題組成，一起展現『混』的精神。
              </p>
              <div className="d-flex justify-content-center justify-content-lg-start mt-3">
                <span className="d-none d-md-block">
                  <h3 className={styles.market_slogan_desktop}>各式各樣文化攤位coming soon！</h3>
                </span>
                <span className="d-block d-md-none my-2">
                  <h3 className={styles.market_slogan_mobile}>各式各樣文化攤位coming soon！</h3>
                </span>
              </div>
            </div>
          </div>

          <Row>
            {marketplaceList.map((marketplace, index) => {
              const isEven = index % 2 == 1;
              return (
                <Col xs={6} lg={3} className={`px-1 px-md-2 ${isEven ? ' mt-2' : ''}`} key={index}>
                  {isEven && <span className="d-none d-lg-inline-block mt-5"></span>}
                  <article className={styles.market_event}>
                    <div>
                      <Image
                        src={marketplace.image}
                        width="250"
                        height="352"
                        alt="market event image"
                        style={{
                          width: '100%',
                          height: 'auto'
                        }}
                      />
                    </div>
                    <h4 className={styles.market_event_title}>
                      <div className="mt-2 ms-2">{marketplace.title}</div>
                    </h4>
                    <p className={styles.market_event_text}>
                      <span className="d-inline-block p-2">{marketplace.description}</span>
                    </p>
                  </article>
                </Col>
              );
            })}
          </Row>
        </div>

        {/* 混街屋 */}
        <ApplyDialog
          ref={houseDialog}
          attrs={{ size: 'lg' }}
          title={houseEvent.title}
          subtitle={houseEvent.subtitle}
          events={houseEvent.list}
          color={houseEvent.color}
        ></ApplyDialog>
        <div className="mt-0 mt-md-5"></div>
        <div className="info-section py-5" id="mixinthehouse">
          <div className="d-flex flex-column flex-lg-row align-items-center align-items-lg-start my-4">
            <div className={styles.info_section_img}>
              <Image
                src="/images/event-info-house-subtitle.svg"
                width="207"
                height="207"
                alt="section subtitle"
                style={{
                  maxWidth: '100%',
                  height: 'auto'
                }}
              />
            </div>
            <div className="d-flex flex-column flex-1 ms-0 ms-lg-4 mt-3 mt-lg-0">
              <p className={styles.info_section_text}>
                街道上有三間神奇的店家等待你的光臨！屋子裡藏著不同文化有趣的人們，他們即將跟你分享打開腦洞的觀點！挑一間走進去逛逛吧，也許你跟屋主會一拍即合。
              </p>
              <div className="d-flex justify-content-center justify-content-lg-start mt-3">
                <span className="d-none d-md-block">
                  <h3 className={styles.market_slogan_desktop}>歡迎光臨不同文化的異想小屋！</h3>
                </span>
                <span className="d-block d-md-none my-2">
                  <h3 className={styles.market_slogan_mobile}>歡迎光臨不同文化的異想小屋！</h3>
                </span>
              </div>
            </div>
          </div>
          <Row>
            {houseList.map((house, index) => {
              return (
                <Col xs={12} sm={6} md={4} className="pb-5 pb-md-0" key={index}>
                  <article className="d-flex flex-column mb-5">
                    <Image
                      src={house.image}
                      width="319"
                      height="247"
                      alt="house event image"
                      sizes="100vw"
                      style={{
                        width: '100%',
                        height: 'auto'
                      }}
                    />
                    <p className={styles.house_text}>{house.description}</p>
                    <div className="d-flex justify-content-center mt-3">
                      <button onClick={() => onOpenHouseDialog(house.type)} className={styles.house_btn}>
                        {house.buttonText}
                      </button>
                    </div>
                  </article>
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>

      {/* 交通資訊 */}
      <div className={styles.traffic_section}>
        <Container>
          <div className="d-flex flex-column align-items-center position-relative pt-4 px-5">
            <h3 className={styles.traffic_section_title}>交通資訊</h3>
            <div className="my-3"></div>
            <h4 className={styles.traffic_section_subtitle}>
              <div className="d-flex flex-column flex-md-row align-items-center">
                <div className="lh-base text-center">地點｜ 空軍三重一村</div>
                <div className="lh-base text-center">(新北市三重區正義南路86巷）</div>
              </div>
            </h4>
            <div className="my-1"></div>
            <Row className="my-5">
              <Col xs={12} lg={7} className="order-1 order-lg-0 mt-5 mt-lg-0">
                <h5 className={styles.traffic_info_title}>━捷運━</h5>
                <p>搭乘「中和新蘆線-迴龍線」至「臺北橋」步行文化南路→福德南路→正義南路86巷</p>

                <h5 className={styles.traffic_info_title}>━公車━</h5>
                <p>搭乘211、221、261、306、704至「正義南路底」</p>

                <h5 className={styles.traffic_info_title}>━開車━</h5>
                <p>國道路線</p>
                <ol>
                  <li>國道1號→環河南北快速道路→中興橋/104縣道→中興橋出口下交流道→環河南路→正義南路86巷</li>
                  <li>
                    國道3號→臺64縣→18-江子翠下交流道→新北環河快速道路→新北環河快速道路出口下交流道→三重/成功路→環河南路→正義南路86巷
                  </li>
                </ol>

                <h5 className={styles.traffic_info_title}>━停車資訊━</h5>
                <ol>
                  <li>新北市光興國小地下停車場：光興街</li>
                  <li>越鑫三重場停車場：光興街</li>
                  <li>新北市三重區忠孝橋下高灘地臨時停車場：環河南路與大同南路交叉</li>
                </ol>
              </Col>
              <Col className="order-0 order-lg-1">
                <div className={styles.traffic_info_map}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.299080995005!2d121.49736921555227!3d25.057850283961145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9197c2e0591%3A0x7809f44edeb5b5b8!2z56m66LuN5LiJ6YeN5LiA5p2R!5e0!3m2!1szh-TW!2stw!4v1647041371590!5m2!1szh-TW!2stw"
                    width="100%"
                    height="100%"
                    style={{ border: 'none' }}
                    loading="lazy"
                  ></iframe>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default EventInfo;
