import { combineReducers } from "redux";
import formTypeReducer from "./formType";

// 루트 리듀서

const rootReducer = combineReducers({
  formTypeReducer
});


// 루트 리듀서 내보내기
export default rootReducer;

// 루트 리듀서의 타입
export type RootState = ReturnType<typeof rootReducer>;