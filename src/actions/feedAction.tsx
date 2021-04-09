import { Dispatch } from "react";
import { FeedActionType, Msg } from "../interface/dataTypes";
import { feedActionType } from "../interface/types";

export function feed() {
  return function (dispatch: Dispatch<FeedActionType>) {
    const webSocket = new WebSocket('wss://stream.tradingeconomics.com/?client=guest:guest');

    webSocket.addEventListener('open', (e) => {
      const msg: Msg = {
        topic: "subscribe",
        to: "EURUSD:CUR"
      }
      webSocket.send(JSON.stringify(msg));
    })
    dispatch({
      type: feedActionType.FEED,
      payload: null
    })

    webSocket.addEventListener('message', (e) => {
      console.log(JSON.parse(e.data));
      dispatch({
        type: feedActionType.FEED_SUCCESS,
        payload: JSON.parse(e.data)
      })
    })

    webSocket.addEventListener('error', (e) => {
      console.log(e.type);
      dispatch({
        type: feedActionType.FEED_ERROR,
        payload: e.type
      })
    })
    
    webSocket.addEventListener('close', (e) => {
      if (e.wasClean) {
        console.log(`code: ${e.code} and reason ${e.reason}`)
      } else if (webSocket.bufferedAmount === 0) {
        webSocket.close()
      } else {
        console.log(`code: ${e.code} connection died`)
      }
    })
  }
}