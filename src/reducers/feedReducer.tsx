import { FeedActionType, FeedState } from "../interface/dataTypes";
import { feedActionType } from "../interface/types";

const initialState: FeedState = {
  loading: false,
  error: null,
  data: {}
}

export default function feedReducer(state = initialState, action: FeedActionType) {
  switch(action.type) {
    case feedActionType.FEED: 
      return {
        loading: true,
        error: null,
        data: null
      }
      case feedActionType.FEED_SUCCESS: 
      return {
        loading: false,
        error: null,
        data: action.payload
      }
      case feedActionType.FEED_ERROR: 
      return {
        loading: false,
        error: action.payload,
        data: null
      }
    default:
      return state;
  }
  
}