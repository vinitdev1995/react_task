import { handleActions } from "redux-actions";
import { initialOrderDetailsState } from "./initialOrderDetailsState";
import { OrderDetailsConstants } from "./orderDetailsConstants";
import {
  requestFail,
  requestPending,
  requestSuccess
} from "../../../utils/fetch";

export const orderDetailsReducer = handleActions(
  {
    [requestSuccess(OrderDetailsConstants.FETCH_ORDER_DETAILS)]: (
      state,
      action
    ) => {
      return {
        ...state,
        details: action.payload.orders || null,
        fetchOrderDetailsLoading: false,
        fetchOrderDetailsFailure: false,
        fetchOrderDetailsLoaded: true
      };
    },
    [requestPending(OrderDetailsConstants.FETCH_ORDER_DETAILS)]: state => ({
      ...state,
      fetchOrderDetailsLoading: true,
      fetchOrderDetailsLoaded: false,
      fetchOrderDetailsFailure: false
    }),
    [requestFail(OrderDetailsConstants.FETCH_ORDER_DETAILS)]: state => ({
      ...state,
      fetchOrderDetailsLoading: false,
      fetchOrderDetailsLoaded: true,
      fetchOrderDetailsFailure: true
    })
  },
  initialOrderDetailsState()
);
