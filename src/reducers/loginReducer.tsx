import { LoginActionType, InitialState } from "../interface/dataTypes";
import { loginActionType } from "../interface/types";

const initialState: InitialState = {
  loading: false,
  error: null,
  data: {}
}

export default function loginReducer(state = initialState, action: LoginActionType)  {
  switch (action.type) {
    case loginActionType.LOGIN:
      return {
        ...state,
        loading: true,
        error: null,
        data: action.payload
      }
    case loginActionType.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload
      }
    case loginActionType.LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: {}
      }
    default:
      return state;
  }
}