import { feedActionType, loginActionType } from './types';

export type InitialState = {
  loading: boolean;
  error: string | null;
  data: { } | UserData
}

export type FeedState = {
  loading: boolean;
  error: string | null;
  data: {} | Feed | null;
}

export type LoginActionType = Login | LoginSuccess | LoginError;

export type FeedActionType = Feeds | FeedSuccess | FeedError;

export type UserData = {
  username: string;
  password: string;
}

export type Login = {
  type: loginActionType.LOGIN;
  payload?: {};
}

export type LoginSuccess = {
  type: loginActionType.LOGIN_SUCCESS;
  payload?: UserData;
}

export type LoginError = {
  type: loginActionType.LOGIN_ERROR;
  payload?: string;
}

export type Feeds = {
  type: feedActionType.FEED;
  payload?: {} | null;
}

export type FeedSuccess = {
  type: feedActionType.FEED_SUCCESS;
  payload?: WebsocketData;
}

export type FeedError = {
  type: feedActionType.FEED_ERROR;
  payload?: string | null;
}

export type Msg = {
  topic: string;
  to: string;
}

export type LoginData = {
  username: string;
  password: string;
}

export type ResetPwd = {
  username: string;
  password: string;
}

export type WebsocketData = {
  ask: number;
  bid: number;
  dhigh: number;
  dlow: number;
  dt: Date;
  i: string;
  nch: number;
  o: number;
  pch: number;
  prev: number;
  price: number;
  s: string;
  state: string;
  topic: string;
  type: string;
}

export type Feed = {
  dt: Date;
  price: number;
}

export type Props = {
  [x: string]: any;
  component: any;
}

export type Reducer = {
  rootReducer : {
    loginReducer : InitialState,
    feedReducer: FeedState
  }
}