import React, { useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import APIService from '../../shared/APIService';
import styles from './styles.css';

interface IProp {
  onClose: () => void;
}

const Input = (props: IProp): JSX.Element => {
  const [text, setText] = useState('');

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
    APIService.sendMessage(text).catch(error => {
      console.warn(error);
    });
  };

  const handleChange = (value: string) => {
    setText(value);
  };

  return (
    <div className={styles.feedback}>
      <h3>Здесь вы можете оставить сообщение для меня...</h3>
      <ReactQuill value={text} onChange={handleChange} modules={modules} formats={formats} />
      <div className={styles.buttons}>
        <button onClick={sendMessage}>Отправить</button>
        <button onClick={props.onClose}>Закрыть</button>
      </div>
    </div>
  );
};

export default Input;
