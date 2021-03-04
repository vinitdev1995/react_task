import { call, takeLatest } from "redux-saga/effects";
import { request } from "../../../utils/fetch";
import { OrderDetailsConstants } from "./orderDetailsConstants";

function* getOrderDetails(action) {
  // eslint-disable-next-line no-debugger
  const orderInfoPayload = {
    type: OrderDetailsConstants.FETCH_ORDER_DETAILS,
    method: "GET",
    url: `admin/api/2021-01/orders.json`,
    success: action.payload ? action.payload.onSuccess : null,
    fail: action.payload ? action.payload.onFail : null
  };
  if (action.payload && action.payload.data) {
    orderInfoPayload.method = "POST";
    orderInfoPayload.data = action.payload.data;
  }
  yield call(request(orderInfoPayload), action);
}

export default function* rootSaga() {
  yield takeLatest(OrderDetailsConstants.FETCH_ORDER_DETAILS, getOrderDetails);
}
