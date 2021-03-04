import axios from "axios";
import { get } from "lodash";
import { call, put } from "redux-saga/effects";
import { config } from "../utils/config";
import { routePaths } from "../routes";
export const requestPending = type => `${type}_PENDING`;
export const requestSuccess = type => `${type}_SUCCESS`;
export const requestFail = type => `${type}_FAILURE`;

export const request = ({
  type,
  method,
  url,
  data,
  headers,
  success,
  fail,
  payloadOnSuccess,
  payloadOnFail
}) =>
  function* apiRequest(action = { payload: {} }) {
    const {
      params,
      onUploadProgress,
      success: successCallback,
      fail: failCallback
    } = action.payload || {};

    try {
      if (type) {
        yield put({
          type: requestPending(type),
          originalType: type,
          payload: action.payload
        });
      }
      const authToken = localStorage.getItem("AuthToken");
      axios.defaults.baseURL = config.BASE_URL;

      axios.defaults.headers.common = {
        "Cache-Control": "no-store",
        Pragma: "no-cache",
        "Content-Type": "application/json"
      };
      if (authToken) {
        axios.defaults.headers.common.Authorization = authToken || "";
      }
      const res = yield call(axios.request, {
        url,
        method: method.toLowerCase(),
        headers: headers || {},
        data: data || {},
        params,
        onUploadProgress
      });

      if (type) {
        yield put({
          type: requestSuccess(type),
          payload: payloadOnSuccess
            ? payloadOnSuccess(res.data, action)
            : res.data,
          originalType: type
        });
      }

      if (successCallback) {
        successCallback(res.data);
      }

      if (success) {
        success(res.data, action);
      }

      if (res.headers.authorization) {
        localStorage.setItem("AuthToken", res.headers.authorization);
      }

      return res.data;
    } catch (err) {
      const errRes = get(err, "response", err);

      if (errRes.status === 401) {
        window.location.pathname = routePaths.signUp;
      }

      if (failCallback) {
        failCallback(errRes);
      }

      if (fail) {
        fail(errRes);
      }

      if (type) {
        yield put({
          type: requestFail(type),
          payload: payloadOnFail ? payloadOnFail(errRes, action) : errRes,
          originalType: type
        });
      } else {
        throw err;
      }
    }
  };

export const getRequest = params => request({ ...params, method: "get" });
export const postRequest = params => request({ ...params, method: "post" });
export const putRequest = params => request({ ...params, method: "put" });
export const deleteRequest = params => request({ ...params, method: "delete" });
