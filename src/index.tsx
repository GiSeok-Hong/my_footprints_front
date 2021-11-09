import React from 'react';
import ReactDom from 'react-dom';
import App from './app';

// 폰트 적용
import "./styles/fonts/font.css";

// ReactDom.render(<App />, document.getElementById('root'));
ReactDom.render(React.createElement(App), document.getElementById('root'));
