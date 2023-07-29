import Image from 'next/image';
import React from 'react';
import { forwardRef, useCallback, useImperativeHandle, useState } from 'react';
import { ModalProps } from 'react-bootstrap';

import BasicDialog from '@/components/BasicDialog';
import type { Perform } from '@/data/performList';
import styles from '@/styles/InfoDialog.module.css';

export type InfoDialogHandle = {
  open: () => void;
};

type InfoDialogProps = {
  attrs?: ModalProps;
  color?: string;
  info?: React.ReactNode;
  perform: Perform | null;
};

const InfoDialog: React.ForwardRefRenderFunction<InfoDialogHandle, InfoDialogProps> = (props, forwardedRef) => {
  const { perform } = props;
  const [show, setShow] = useState<boolean>(false);

  useImperativeHandle(forwardedRef, () => ({
    open() {
      setShow(true);
    }
  }));

  const onClose = useCallback(() => setShow(false), []);

  if (!perform) return null;

  return (
    <BasicDialog show={show} title={perform.title} color="var(--purple)" onClose={onClose}>
      <div>
        <div className={styles.info_img}>
          <Image
            src={`/images/${perform.image}`}
            width="600"
            height="400"
            alt={perform.title}
            style={{
              width: '100%',
              height: 'auto'
            }}
          />
        </div>
        <div className="p-4">
          {perform.intro.map((text) => {
            return (
              <p key={text} className={styles.info_text}>
                {text}
              </p>
            );
          })}
          <div className="pt-4">
            {perform.facebook && (
              <a className={styles.info_link} href={perform.facebook} target="_blank" rel="noreferrer">
                <Image
                  src="/images/icon-facebook.svg"
                  width="36"
                  height="36"
                  alt="facebook"
                  style={{
                    maxWidth: '100%',
                    height: 'auto'
                  }}
                />
              </a>
            )}

            <span className="mx-2"></span>

            {perform.instagram && (
              <a className={styles.info_link} href={perform.instagram} target="_blank" rel="noreferrer">
                <Image
                  src="/images/icon-instagram.svg"
                  width="36"
                  height="36"
                  alt="instagram"
                  style={{
                    maxWidth: '100%',
                    height: 'auto'
                  }}
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </BasicDialog>
  );
};

export default forwardRef(InfoDialog);
