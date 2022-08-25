export enum ErrorCode {
  U001 = 'U001', // 이미 존재하는 이메일
  A001 = 'A001', // 로그인 실패 이메일 존재 X
  A002 = 'A002', // 로그인 실패 비밀번호 일치 X
  UNKNOWN = 'UNKNOWN',
}

export interface ErrorResponse {
  errorCode?: ErrorCode;
  message?: string;
  errors?: string[];
}
