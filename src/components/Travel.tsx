'use client';

import Image from 'next/image';
import { useCallback, useRef, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Parallax } from 'react-scroll-parallax';

import type { ApplyDialogRef } from '@/components/ApplyDialog';
import ApplyDialog from '@/components/ApplyDialog';
import type { EventObj } from '@/data/events';
import { TravelDataType, travelEvents } from '@/data/events';
import travelList from '@/data/travelList';
import styles from '@/styles/Travel.module.css';

const Travel = () => {
  const travelDialog = useRef<ApplyDialogRef>(null);
  const [travelEvent, setTravelEvent] = useState<EventObj>(travelEvents[TravelDataType.ZHONGHE]);

  const onOpenTravelDialog = useCallback(
    (type: TravelDataType) => {
      setTravelEvent(travelEvents[type]);
      travelDialog.current?.open();
    },
    [travelDialog]
  );

  return (
    <>
      <ApplyDialog
        ref={travelDialog}
        attrs={{ size: 'lg' }}
        title={travelEvent.title}
        subtitle={travelEvent.subtitle}
        events={travelEvent.list}
        color={travelEvent.color}
        isShowImage={false}
      />
      <section id="travel" className={styles.travel}>
        <div className={styles.banner}>
          <Image
            src="/images/travel-title-img.jpg"
            width="1512"
            height="447"
            alt="travel banner image"
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto'
            }}
          />
          <div className={styles.banner_mark}>
            <Image
              src="/images/travel-title-text.svg"
              width="504"
              height="238"
              alt="travel banner text"
              style={{ width: '100%', objectFit: 'contain', objectPosition: 'top' }}
            />
          </div>
        </div>
        <div className="position-relative">
          <div className={styles.watermark}>
            <Image
              src="/images/travel-bg.png"
              width="887"
              height="282"
              alt="travel section background image"
              style={{
                maxWidth: '100%',
                height: 'auto'
              }}
            />
          </div>
          <Container className="py-5 px-3 px-md-5">
            <div className={styles.parallax_icon_mix}>
              <Parallax translateY={[-20, 30]}>
                <Image
                  src="/images/parallax-icon-mix.svg"
                  width="360"
                  height="310"
                  alt="travel section decoration"
                  style={{
                    maxWidth: '100%',
                    height: 'auto'
                  }}
                />
              </Parallax>
            </div>
            <Row className="pt-5 my-5 px-3">
              {travelList.map((travel) => {
                return (
                  <Col xs={12} sm={6} lg={4} className="py-3" key={travel.title}>
                    <article className={styles.travel_event} style={{ color: travel.color }}>
                      <h3 className={styles.travel_event_title}>
                        <span className="d-inline-block py-3 py-md-4">{travel.title}</span>
                      </h3>
                      <div className={styles.travel_event_img_wrapper}>
                        <Image
                          src={travel.image}
                          width="600"
                          height="400"
                          alt={travel.title}
                          className={styles.travel_event_img}
                        />
                      </div>
                      <p className={styles.travel_event_date}>{travel.date}</p>
                      <p className={styles.travel_event_text}>{travel.description}</p>
                      <button
                        className={styles.travel_event_btn}
                        style={{ background: travel.color }}
                        onClick={() => onOpenTravelDialog(travel.type)}
                      >
                        {travel.buttonText}
                      </button>
                    </article>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Travel;
