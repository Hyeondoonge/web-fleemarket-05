export enum ErrorCode {
  U001 = 'U001', // 이미 존재하는 이메일
  V001 = 'V001', // Validation failed
  A001 = 'A001', // 로그인 실패 이메일 존재 X
  A002 = 'A002', // 로그인 실패 비밀번호 일치 X
  A003 = 'A003', // JWT 토큰 에러,
  A004 = 'A004', // JWT 토큰 만료
}
