import { ErrorCode } from '../enums';

export const ERROR_MESSAGE: Record<ErrorCode, string> = {
  [ErrorCode.U001]: '이미 존재하는 이메일입니다.',
  [ErrorCode.V001]: '잘못된 요청입니다.',
  [ErrorCode.A001]: '잘못된 로그인 정보입니다.',
  [ErrorCode.A002]: '잘못된 로그인 정보입니다.',
  [ErrorCode.A003]: '유효하지않은 JWT 토큰입니다.',
  [ErrorCode.A004]: '만료된 JWT 토큰입니다.',
  [ErrorCode.A005]: '유효하지않은 Github Code입니다.',
  [ErrorCode.A006]: '유효하지않은 Github Access token입니다.',
};
