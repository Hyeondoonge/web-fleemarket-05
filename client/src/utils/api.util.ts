/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig } from 'axios';
import instance from 'api/instance';
import { ErrorCode, ErrorResponse } from 'types/error';
import { API_ERROR_MESSAGE } from 'constants/message.constant';

export function handleError(error: any) {
  let errorCode;
  if (axios.isAxiosError(error)) {
    const errorData = error.response?.data as ErrorResponse;
    errorCode = errorData.errorCode ?? ErrorCode.UNKNOWN;
  } else {
    errorCode = ErrorCode.UNKNOWN;
  }
  return API_ERROR_MESSAGE[errorCode];
}

export async function query<TData = any>(url: string) {
  try {
    const { data } = await instance.get<TData>(url);
    return data;
  } catch (error) {
    throw new Error(handleError(error));
  }
}

export async function mutation<TBody = any, TData = any>(config: AxiosRequestConfig<TBody>) {
  try {
    const { data } = await instance(config);
    return data as TData;
  } catch (error) {
    throw new Error(handleError(error));
  }
}