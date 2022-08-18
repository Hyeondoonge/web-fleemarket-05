import { ErrorCode } from '../enums';

export const ERROR_MESSAGE: Record<ErrorCode, string> = {
  [ErrorCode.U001]: '이미 존재하는 이메일입니다.',
  [ErrorCode.V001]: '잘못된 요청입니다.',
};
