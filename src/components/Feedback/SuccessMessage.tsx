import React from 'react';
import styles from './styles.css';

interface IProp {
  hasError?: boolean;
  handlerClickSuccess: () => void;
}

const SuccessMessage = (props: IProp): JSX.Element => (
  <div className={styles['send-success']}>
    {!props.hasError && <p>Ваше сообщение отправлено</p>}
    {props.hasError && (
      <>
        <p>При отправке сообщения возникла ошибка</p>
        <p>Попробуйте еще раз</p>
      </>
    )}
    <button onClick={props.handlerClickSuccess}>Хорошо</button>
  </div>
);

export default SuccessMessage;
