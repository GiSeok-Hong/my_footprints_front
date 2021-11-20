import { SIGN_IN, SIGN_UP } from "./actionTypes"


// 액션 생성함수 정의
export const signIn = () => {
  return {
    type: SIGN_IN,  
  }
}

export function signUp() {
  return {
    type:SIGN_UP,
  }
}