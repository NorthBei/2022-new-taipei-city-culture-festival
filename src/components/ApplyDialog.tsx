import Image from 'next/image';
import React from 'react';
import { forwardRef, useImperativeHandle, useState } from 'react';
import { useCallback } from 'react';
import { ModalProps } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import BasicDialog from '@/components/BasicDialog';
import type { EventItem } from '@/data/events';
import styles from '@/styles/ApplyDialog.module.css';

export type ApplyDialogRef = {
  open: () => void;
};

type ApplyDialogProps = {
  title: string;
  subtitle: string;
  events: EventItem[];
  color?: string;
  attrs?: ModalProps;
  isShowImage?: boolean;
};

const ApplyDialog: React.ForwardRefRenderFunction<ApplyDialogRef, ApplyDialogProps> = (props, forwardedRef) => {
  const { attrs, title, subtitle, events, color, isShowImage } = props;
  const [show, setShow] = useState<boolean>(false);

  useImperativeHandle(forwardedRef, () => ({
    open() {
      setShow(true);
    }
  }));

  const onClose = useCallback(() => {
    setShow(false);
  }, []);

  if (events.length === 0) return null;

  return (
    <BasicDialog show={show} title={title} info={subtitle} attrs={attrs} color={color} onClose={onClose}>
      {events.map((event, idx) => {
        return (
          <Row className={styles.event_item} key={idx}>
            {isShowImage && (
              <Col xs={12} lg={5} className="d-flex flex-column justify-content-between">
                <div className={styles.event_img}>
                  <Image
                    src={`/images/${event.image}`}
                    width="295"
                    height="193"
                    alt="event image"
                    style={{
                      width: '100%',
                      height: 'auto'
                    }}
                  />
                </div>
                <div className="d-none d-md-block mt-3">
                  <a href={event.url || ''} target="_blank" rel="noreferrer" className={styles.event_btn}>
                    {event.buttonText}
                  </a>
                </div>
              </Col>
            )}
            <Col>
              <div className="my-4 my-lg-0">
                <h3 className={styles.event_title}>{event.name}</h3>
                {event.time.map((t) => {
                  return <div key={t}>{t}</div>;
                })}
                <div className="mt-2">
                  <span className="fw-bold">參加對象</span>
                  <span>｜{event.participant}</span>
                </div>
                {event.headcount && (
                  <div className="mt-2">
                    <span className="fw-bold">參加人數</span>
                    <span>｜{event.headcount}</span>
                  </div>
                )}
                <div className="mt-2">
                  <span className="fw-bold">體驗費用</span>
                  <span>
                    ｜<span dangerouslySetInnerHTML={{ __html: event.pricing }}></span>
                  </span>
                </div>
                {event.position && (
                  <div className="mt-2">
                    <span className="fw-bold">集合地點</span>
                    <span>｜{event.position}</span>
                  </div>
                )}

                <div className="mt-2">
                  <span className="fw-bold">活動介紹</span>
                  <span>
                    ｜
                    {event.intro.map((text) => {
                      return (
                        <div className={styles.intro_text} key={text}>
                          {text}
                        </div>
                      );
                    })}
                  </span>
                </div>
                {event.experience && (
                  <div className="mt-2">
                    <span className="fw-bold">體驗內容</span>
                    <span>
                      ｜
                      {event.experience.map((text, index) => {
                        return (
                          <div key={text}>
                            {index + 1}. {text}
                          </div>
                        );
                      })}
                    </span>
                  </div>
                )}
              </div>
              <div className={isShowImage ? 'd-block d-md-none' : 'mt-4'}>
                {event.url && (
                  <a href={event.url} target="_blank" rel="noreferrer" className={styles.event_btn}>
                    {event.buttonText}
                  </a>
                )}
              </div>
            </Col>
          </Row>
        );
      })}
    </BasicDialog>
  );
};

export default forwardRef(ApplyDialog);
