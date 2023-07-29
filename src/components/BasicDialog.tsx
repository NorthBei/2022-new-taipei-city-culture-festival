import React, { ReactNode } from 'react';
import Modal, { ModalProps } from 'react-bootstrap/Modal';

import styles from '@/styles/BasicDialog.module.css';

type BasicDialogProps = {
  show: boolean;
  title: string;
  attrs?: ModalProps;
  color?: string;
  info?: ReactNode;
  onClose?: () => void;
  children: ReactNode;
};

const BasicDialog = (props: BasicDialogProps) => {
  const { show, title, attrs, info, color, children, onClose } = props;

  return (
    <Modal
      {...attrs}
      show={show}
      contentClassName={styles.modal}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      scrollable
    >
      <h4 className={styles.modal_title} style={{ background: color }}>
        {title}
      </h4>
      {info && <p className={styles.modal_info}>{info}</p>}
      <Modal.Body className="p-0">{children}</Modal.Body>
      <button onClick={() => onClose && onClose()} className={styles.modal_close_btn}>
        ╳ 關閉視窗
      </button>
    </Modal>
  );
};

export default BasicDialog;
