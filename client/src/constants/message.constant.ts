import { ErrorCode } from 'types/error';

export const VALIDATION_MESSAGE = {
  REQUIRED_FIELD: '필수 입력 정보입니다.',
  WRONG_EMAIL: '이메일 주소를 정확히 입력해주세요.',
};

export const API_ERROR_MESSAGE: Record<ErrorCode, string> = {
  [ErrorCode.U001]: '이미 존재하는 이메일입니다.',
  [ErrorCode.A001]: '잘못된 로그인 정보입니다.',
  [ErrorCode.A002]: '잘못된 로그인 정보입니다.',
  [ErrorCode.UNKNOWN]: '알 수 없는 오류가 발생하였습니다.',
};
