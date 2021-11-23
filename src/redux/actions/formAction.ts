import { SIGN_IN, SIGN_UP } from "./actionTypes"

export interface Action {
  type: string
  
}

// 액션 생성함수 정의
export const signInAction = () => {
  return {
    type: SIGN_IN,
    
  }
}

export function signUpAction() {
  return {
    type: SIGN_UP,
    
  }
}