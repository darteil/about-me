import React, { useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import APIService from '../../shared/APIService';
import styles from './styles.css';

interface IProp {
  onClose: () => void;
}

const Input = (props: IProp): JSX.Element => {
  const [text, setText] = useState<string>('');
  const [messageSend, setMessageSend] = useState<boolean>(false);
  const [sendError, setSendError] = useState<boolean>(false);

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
      ['link'],
    ],
  };

  const formats = ['header', 'bold', 'italic', 'underline', 'strike', 'list', 'bullet', 'indent', 'link'];

  const sendMessage = () => {
    APIService.sendMessage(text)
      .then(() => {
        setMessageSend(true);
      })
      .catch(error => {
        setMessageSend(true);
        setSendError(true);
      });
  };

  const handleChange = (value: string) => {
    setText(value);
  };

  const handleSuccess = () => {
    if (sendError) {
      setMessageSend(false);
      setSendError(false);
    } else {
      props.onClose();
    }
  };

  return (
    <div className={styles.feedback}>
      {messageSend && (
        <div className={styles['send-success']}>
          {!sendError && <p>Ваше сообщение отправлено</p>}
          {sendError && (
            <>
              <p>При отправке сообщения возникла ошибка</p>
              <p>Попробуйте еще раз</p>
            </>
          )}
          <button onClick={handleSuccess}>Хорошо</button>
        </div>
      )}
      {!messageSend && (
        <>
          <ReactQuill value={text} onChange={handleChange} modules={modules} formats={formats} />
          <div className={styles.buttons}>
            <button onClick={sendMessage}>Отправить</button>
            <button onClick={props.onClose}>Закрыть</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Input;
