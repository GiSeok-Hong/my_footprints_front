import React from 'react';
import ReactDom from 'react-dom';

// 폰트 적용
import "./styles/fonts/font.css";
// createStore와 루트 리듀서 불러오기
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers';

import App from './app';

// 리덕스 개발자 도구 적용
const devTools =
  // eslint-disable-next-line no-underscore-dangle
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__();

// 스토어 생성
const store = createStore(rootReducer, devTools);


ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

