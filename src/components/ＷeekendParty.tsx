import Image from 'next/image';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Parallax } from 'react-scroll-parallax';

import styles from '@/styles/ＷeekendParty.module.css';

const ＷeekendParty = () => {
  return (
    <section id="weekend-party" className={styles.weekend_party}>
      <div className={styles.banner}>
        <Image
          src="/images/weekend-party-bg.png"
          width="1512"
          height="993"
          alt="weekend-party-street-text"
          sizes="100vw"
          style={{
            width: '100%',
            height: '100%'
          }}
        />
      </div>
      <Container className="p-4 position-relative">
        <div className={styles.parallax_icon_togo}>
          <Parallax translateY={[-30, 30]}>
            <Image
              src="/images/parallax-icon-togo.svg"
              width="186"
              height="503"
              alt="weekend-party section decoration"
              style={{
                maxWidth: '100%',
                height: 'auto'
              }}
            />
          </Parallax>
        </div>
        <Row className="p-4 px-0 px-md-4">
          <Col xs={12} className="d-flex justify-content-start">
            <div className={styles.street}>
              <Image
                src="/images/weekend-party-street.png"
                width="899"
                height="1178"
                alt="weekend-party-street"
                style={{
                  maxWidth: '100%',
                  height: 'auto'
                }}
              />
              <div className={styles.street_text}>
                <Image
                  src="/images/weekend-party-street-text.svg"
                  width="370"
                  height="230"
                  alt="weekend-party-street-text"
                  style={{
                    maxWidth: '100%',
                    objectFit: 'contain',
                    objectPosition: 'top'
                  }}
                />
              </div>
            </div>
          </Col>
          <Col xs={12} className="d-flex justify-content-end">
            <div className={styles.city}>
              <Image
                src="/images/weekend-party-city.png"
                width="899"
                height="1178"
                alt="weekend-party-city"
                style={{
                  maxWidth: '100%',
                  height: 'auto'
                }}
              />
              <div className={styles.city_text}>
                <Image
                  src="/images/weekend-party-city-text.svg"
                  width="495"
                  height="230"
                  alt="weekend-party-city-text"
                  style={{
                    maxWidth: '90%',
                    objectFit: 'contain',
                    objectPosition: 'bottom'
                  }}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ＷeekendParty;
