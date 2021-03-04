import { call, takeLatest } from "redux-saga/effects";
import { request } from "../../../utils/fetch";
import { OrderDetailsConstants } from "./orderDetailsConstants";

function* getOrderDetails(action) {
  yield call(
    request({
      type: OrderDetailsConstants.FETCH_ORDER_DETAILS,
      method: "GET",
      url: `admin/api/2021-01/orders.json`
    }),
    action
  );
}

export default function* rootSaga() {
  yield takeLatest(OrderDetailsConstants.FETCH_ORDER_DETAILS, getOrderDetails);
}
