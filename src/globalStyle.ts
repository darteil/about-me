import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    font-family: monospace;
    font-size: 14px;
    background-color: ${props => props.theme.primaryBg};
    color: ${props => props.theme.primaryColor};
    padding: 5px;
  }

  .quill {
    margin-top: 50px;
    height: 85%;
  }

  .quill .ql-editor {
    overflow-y: scroll;
    scrollbar-width: none;
  }

  .quill .ql-editor::-webkit-scrollbar {
    display: none;
  }

  .quill .ql-container {
    padding-bottom: 50px;
  }

  .quill .ql-toolbar.ql-snow,
  .quill .ql-container.ql-snow {
    border: ${props => `1px solid ${props.theme.feedbackBorder}`}
  }

  .quill .ql-snow .ql-tooltip {
    box-shadow: none;
    border: ${props => `1px solid ${props.theme.feedbackBorder}`}
    color: ${props => props.theme.feedbackColor};
    background-color: ${props => props.theme.feedbackBackground};
  }

  .quill .ql-snow .ql-tooltip input[type='text'] {
    color: ${props => props.theme.feedbackColor};
    background-color: ${props => props.theme.feedbackBackground};
    border: ${props => `1px solid ${props.theme.feedbackBorder}`}
  }

  .quill .ql-snow .ql-tooltip input[type='text']:focus,
  .quill .ql-snow .ql-picker-options .ql-picker-item:focus,
  .quill .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label:focus,
  .quill .ql-snow .ql-picker.ql-header:focus {
    outline: none;
  }

  .quill .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {
    border-color: ${props => props.theme.feedbackBorder};
  }

  .quill .ql-snow .ql-picker-options {
    background-color: ${props => props.theme.feedbackBackground};
  }

  /* Icon colors */
  .quill .ql-snow .ql-fill,
  .ql-snow .ql-stroke.ql-fill {
    fill: ${props => props.theme.feedbackIconColor};
  }

  .quill .ql-snow .ql-stroke {
    stroke: ${props => props.theme.feedbackIconColor};
  }

  .quill .ql-snow .ql-picker {
    color: ${props => props.theme.feedbackIconColor};
  }

  .quill .ql-snow.ql-toolbar button:hover,
  .quill .ql-snow .ql-toolbar button:hover,
  .quill .ql-snow.ql-toolbar button:focus,
  .quill .ql-snow .ql-toolbar button:focus,
  .quill .ql-snow.ql-toolbar button.ql-active,
  .quill .ql-snow .ql-toolbar button.ql-active,
  .quill .ql-snow.ql-toolbar .ql-picker-label:hover,
  .quill .ql-snow .ql-toolbar .ql-picker-label:hover,
  .quill .ql-snow.ql-toolbar .ql-picker-label.ql-active,
  .quill .ql-snow .ql-toolbar .ql-picker-label.ql-active,
  .quill .ql-snow.ql-toolbar .ql-picker-item:hover,
  .quill .ql-snow .ql-toolbar .ql-picker-item:hover,
  .quill .ql-snow.ql-toolbar .ql-picker-item.ql-selected,
  .quill .ql-snow .ql-toolbar .ql-picker-item.ql-selected {
    color: ${props => props.theme.feedbackIconHover};
  }

  .quill .ql-snow.ql-toolbar button:hover .ql-fill,
  .quill .ql-snow .ql-toolbar button:hover .ql-fill,
  .quill .ql-snow.ql-toolbar button:focus .ql-fill,
  .quill .ql-snow .ql-toolbar button:focus .ql-fill,
  .quill .ql-snow.ql-toolbar button.ql-active .ql-fill,
  .quill .ql-snow .ql-toolbar button.ql-active .ql-fill,
  .quill .ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,
  .quill .ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,
  .quill .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
  .quill .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,
  .quill .ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,
  .quill .ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,
  .quill .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,
  .quill .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,
  .quill .ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,
  .quill .ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,
  .quill .ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,
  .quill .ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,
  .quill .ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,
  .quill .ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,
  .quill .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
  .quill .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
  .quill .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
  .quill .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
  .quill .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
  .quill .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
  .quill .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,
  .quill .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {
    fill: ${props => props.theme.feedbackIconHover};
  }

  .quill .ql-snow.ql-toolbar button:hover .ql-stroke,
  .quill .ql-snow .ql-toolbar button:hover .ql-stroke,
  .quill .ql-snow.ql-toolbar button:focus .ql-stroke,
  .quill .ql-snow .ql-toolbar button:focus .ql-stroke,
  .quill .ql-snow.ql-toolbar button.ql-active .ql-stroke,
  .quill .ql-snow .ql-toolbar button.ql-active .ql-stroke,
  .quill .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,
  .quill .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,
  .quill .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
  .quill .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,
  .quill .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,
  .quill .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,
  .quill .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
  .quill .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
  .quill .ql-snow.ql-toolbar button:hover .ql-stroke-miter,
  .quill .ql-snow .ql-toolbar button:hover .ql-stroke-miter,
  .quill .ql-snow.ql-toolbar button:focus .ql-stroke-miter,
  .quill .ql-snow .ql-toolbar button:focus .ql-stroke-miter,
  .quill .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,
  .quill .ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,
  .quill .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
  .quill .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
  .quill .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
  .quill .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
  .quill .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
  .quill .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
  .quill .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,
  .quill .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {
    stroke: ${props => props.theme.feedbackIconHover};
  }

  .quill .ql-snow a {
    color: ${props => props.theme.feedbackIconHover};
  }
`;
