import { createAction } from "redux-actions";
import { OrderDetailsConstants } from "./orderDetailsConstants";

export const fetchOrderDetails = createAction(
  OrderDetailsConstants.FETCH_ORDER_DETAILS
);
