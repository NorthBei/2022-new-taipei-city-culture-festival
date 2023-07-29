import Image from 'next/image';
import React from 'react';
import { useCallback } from 'react';
import Modal from 'react-bootstrap/Modal';

import styles from '@/styles/NavDialog.module.css';

type NavDialogProps = {
  show: boolean;
  onClose: () => void;
};

const NavDialog = (props: NavDialogProps) => {
  const { show, onClose } = props;

  const onAnchorClick = useCallback(
    (id: string) => {
      document.querySelector(id)?.scrollIntoView({
        behavior: 'smooth'
      });
      onClose();
    },
    [onClose]
  );

  return (
    <>
      <Modal
        show={show}
        contentClassName={styles.modal}
        animation={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        fullscreen
      >
        <div className="h-100 d-flex flex-column align-items-center justify-content-center">
          <div onClick={onClose} className={styles.nav_close_btn}>
            <Image
              src="/images/icon-close.svg"
              width="50"
              height="50"
              alt="logo"
              style={{
                maxWidth: '100%',
                height: 'auto'
              }}
            />
          </div>
          <div>
            <div className="d-flex flex-column align-items-center mb-2">
              <a onClick={() => onAnchorClick('#about')} className={styles.nav_item}>
                關於我們
              </a>
              <a onClick={() => onAnchorClick('#event-info')} className={styles.nav_item}>
                世界音樂派對
              </a>
              <a onClick={() => onAnchorClick('#travel')} className={styles.nav_item}>
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
            <div className="d-flex flex-column align-items-center flex-fill justify-content-evenly">
              <span className="d-flex flex-column align-items-center mt-4">
                <span className={styles.nav_org_item}>主辦單位</span>
                <Image
                  src="/images/org-1.svg"
                  width="121"
                  height="30"
                  alt="logo"
                  style={{
                    maxWidth: '100%',
                    height: 'auto'
                  }}
                />
              </span>
              <span className="d-flex flex-column align-items-center mt-4">
                <span className={styles.nav_org_item}>承辦單位</span>
                <Image
                  src="/images/org-2.svg"
                  width="126"
                  height="25"
                  alt="logo"
                  style={{
                    maxWidth: '100%',
                    height: 'auto'
                  }}
                />
              </span>
              <span className="d-flex flex-column align-items-center mt-4">
                <span className={styles.nav_org_item}>協辦單位</span>
                <Image
                  src="/images/org-3.svg"
                  width="96"
                  height="35"
                  alt="logo"
                  style={{
                    maxWidth: '100%',
                    height: 'auto'
                  }}
                />
              </span>
              <span className="d-flex flex-column align-items-center mt-4">
                <Image
                  src="/images/org-4.svg"
                  width="53"
                  height="37"
                  alt="logo"
                  style={{
                    maxWidth: '100%',
                    height: 'auto'
                  }}
                />
              </span>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default NavDialog;
