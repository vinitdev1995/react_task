import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import { connectRouter } from "connected-react-router";
import orderDetailsSaga from "./orderDetails/orderDetailsSaga";
import { orderDetailsReducer } from "./orderDetails/orderDetailsReducer";

export const reducers = history =>
  combineReducers({
    router: connectRouter(history),
    orderDetails: orderDetailsReducer
  });

export const rootSaga = function*() {
  yield all([orderDetailsSaga()]);
};
