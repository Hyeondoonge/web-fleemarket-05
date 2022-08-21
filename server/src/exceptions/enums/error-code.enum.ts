export enum ErrorCode {
  U001 = 'U001', // 이미 존재하는 이메일
  V001 = 'V001', // Validation failed
  A001 = 'A001', // 로그인 실패 이메일 존재 X
  A002 = 'A002', // 로그인 실패 비밀번호 일치 X
  A003 = 'A003', // JWT 토큰 에러,
  A004 = 'A004', // JWT 토큰 만료,
  A005 = 'A005', // Github Code 에러,
  A006 = 'A006', // Github Access Token 에러
  A004 = 'A004', // JWT 토큰 만료
  UP001 = 'UP001', // 잘못된 파일 확장자
  UP002 = 'UP002', // 파일 용량 초과
  UP003 = 'UP003', // 파일 개수 초과
  UP004 = 'UP004', // S3 이미지 업로드 실패
}
