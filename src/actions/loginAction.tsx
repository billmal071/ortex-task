import { Dispatch } from "@reduxjs/toolkit";
import { LoginActionType, UserData } from "../interface/dataTypes";
import { loginActionType } from "../interface/types";

export function login(loginData: UserData) {
  return async function (dispatch: Dispatch<LoginActionType>) {
    dispatch({
      type: loginActionType.LOGIN,
      payload: {}
    });

    try {
      dispatch({
        type: loginActionType.LOGIN_SUCCESS,
        payload: loginData
      })
    } catch (error) {
      dispatch({
        type: loginActionType.LOGIN_ERROR,
        payload: error
      });
    }
  }
}