import React, { useState } from 'react';
import styled from 'styled-components';
import ReactQuill from 'react-quill';
import SuccessMessage from './SuccessMessage';
import APIService from '../../shared/APIService';

interface IProp {
  onClose: () => void;
}

const StyledWrap = styled.div`
  width: 90%;
  height: 98vh;
  display: flex;
  padding: 5px 5px 0 5px;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  z-index: 2;
  background-color: ${props => props.theme.feedbackButtonBackground};
  button {
    width: 200px;
    height: 30px;
    font-size: 14px;
    color: ${props => props.theme.feedbackButtonColor};
    outline: none;
    background-color: ${props => props.theme.feedbackButtonBackground};
    border: ${props => `1px solid ${props.theme.feedbackButtonBorder}`};
  }
  button:hover {
    cursor: pointer;
    color: ${props => props.theme.feedbackButtonColorHover};
  }
`;

const StyledButtonsWrap = styled.div`
  z-index: 3;
  border-top: ${props => `1px solid ${props.theme.feedbackBorder}`};
  padding: 5px;
  & > button {
    margin-left: 5px;
  }
  & > button:hover {
    border: ${props => `1px solid ${props.theme.feedbackButtonBorderHover}`};
    background-color: ${props => props.theme.feedbackButtonBackgroundHover};
  }
`;

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
      .catch(() => {
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
    <StyledWrap>
      {messageSend && <SuccessMessage hasError={sendError} handlerClickSuccess={handleSuccess} />}
      {!messageSend && (
        <>
          <ReactQuill value={text} onChange={handleChange} modules={modules} formats={formats} />
          <StyledButtonsWrap>
            <button onClick={sendMessage}>Отправить</button>
            <button onClick={props.onClose}>Закрыть</button>
          </StyledButtonsWrap>
        </>
      )}
    </StyledWrap>
  );
};

export default Input;
