import Image from 'next/image';
import React from 'react';
import Modal from 'react-bootstrap/Modal';

import styles from '@/styles/MapDialog.module.css';

type MapDialogProps = {
  show: boolean;
  onClose: () => void;
};

const MapDialog = (props: MapDialogProps) => {
  const { show, onClose } = props;

  return (
    <>
      <Modal
        show={show}
        contentClassName={styles.modal}
        animation={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div onClick={() => onClose && onClose()} className={styles.close_btn}>
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
        <Image
          src="/images/workspace-map.jpg"
          width="1127"
          height="2437"
          alt="logo"
          style={{
            maxWidth: '100%',
            height: 'auto'
          }}
        />
      </Modal>
    </>
  );
};

export default MapDialog;
