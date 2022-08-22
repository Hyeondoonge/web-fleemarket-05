import { ErrorCode } from '../enums';

export const ERROR_MESSAGE: Record<ErrorCode, string> = {
  [ErrorCode.U001]: '이미 존재하는 이메일입니다.',
  [ErrorCode.U002]: '동네 개수는 최소 1개이상 최대2개여야합니다.',
  [ErrorCode.U003]: '존재하지 않는 사용자입니다.',
  [ErrorCode.V001]: '잘못된 요청입니다.',
  [ErrorCode.A001]: '잘못된 로그인 정보입니다.',
  [ErrorCode.A002]: '잘못된 로그인 정보입니다.',
  [ErrorCode.A003]: '유효하지않은 JWT 토큰입니다.',
  [ErrorCode.A004]: '만료된 JWT 토큰입니다.',
  [ErrorCode.A005]: '유효하지않은 Github Code입니다.',
  [ErrorCode.A006]: '유효하지않은 Github Access token입니다.',
  [ErrorCode.A007]: '권한이 없습니다.',
  [ErrorCode.UP001]: '잘못된 파일 확장자입니다.',
  [ErrorCode.UP002]: '파일 크기를 초과하였습니다.',
  [ErrorCode.UP003]: '파일 개수를 초과하였습니다.',
  [ErrorCode.UP004]: '업로드에 실패하였습니다.',
  [ErrorCode.R001]: '존재하지 않는 동네입니다.',
  [ErrorCode.C001]: '해당하는 카테고리를 찾을 수 없습니다.',
  [ErrorCode.AR001]: '해당하는 게시글을 찾을 수 없습니다.',
  [ErrorCode.AR002]: '사용자 동네가 아닙니다.',
  [ErrorCode.F001]: '권한이 없습니다.',
};