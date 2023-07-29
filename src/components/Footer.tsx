import Image from 'next/image';
import Container from 'react-bootstrap/Container';

import styles from '@/styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className="d-flex flex-column align-items-center justify-content-center flex-wrap">
        <div className="d-flex justify-content-center flex-wrap">
          <div className={styles.footer_item}>
            <span className="d-inline-block mb-1 fw-bold">主辦單位</span>
            <span>｜新北市政府</span>
          </div>
          <div className={styles.footer_item}>
            <span className="d-inline-block mb-1 fw-bold">承辦單位</span>
            <span>｜新北市政府文化局</span>
          </div>
          <div className={styles.footer_item}>
            <span className="d-inline-block mb-1 fw-bold">協辦單位</span>
            <span>｜新北市文化基金會</span>
          </div>
        </div>
        <div className="d-flex justify-content-center flex-wrap">
          <div className={styles.footer_item}>
            <span className="d-inline-block mb-1 fw-bold">聯絡我們</span>
            <span>｜mixtogetherfestival@gmail.com</span>
          </div>
          <div>
            <a href="https://m.me/rollinginlife">
              <Image src="/images/icon-messenger.svg" width="48" height="48" alt="messenger" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
