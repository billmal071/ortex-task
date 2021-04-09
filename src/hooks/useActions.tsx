import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreator from "../actions/loginAction";

export function useActions() {
  const dispatch = useDispatch;

  return bindActionCreators(actionCreator, dispatch)
}