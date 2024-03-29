import {
  COMPANY_NAME_MAX_LENGTH,
  COMPANY_NAME_MIN_LENGTH,
  DEPARTMENT_MAX_LENGTH,
  DEPARTMENT_MIN_LENGTH,
  FIELD_OF_WORK_NAME_MAX_LENGTH,
  FIELD_OF_WORK_NAME_MIN_LENGTH,
  INTEREST_FIELD_NAME_MAX_LENGTH,
  INTEREST_FIELD_NAME_MIN_LENGTH,
  INTRODUCTION_MAX_LENGTH,
  INTRODUCTION_MIN_LENGTH,
  ORGANIZATION_NAME_MAX_LENGTH,
  ORGANIZATION_NAME_MIN_LENGTH,
  PORTFOLIO_FILE_NAME_MAX_LENGTH,
  PORTFOLIO_FILE_NAME_MIN_LENGTH,
  PROFILE_IMAGE_NAME_MAX_LENGTH,
  PROFILE_IMAGE_NAME_MIN_LENGTH,
  PROJECT_DESCRIPTION_MAX_LENGTH,
  PROJECT_DESCRIPTION_MIN_LENGTH,
  PROJECT_NAME_MAX_LENGTH,
  PROJECT_NAME_MIN_LENGTH,
  TECHNICAL_SKILL_NAME_MAX_LENGTH,
  TECHNICAL_SKILL_NAME_MIN_LENGTH,
  USER_ADDRESS_MAX_LENGTH,
  USER_ADDRESS_MIN_LENGTH,
  USER_NICKNAME_MAX_LENGTH,
  USER_NICKNAME_MIN_LENGTH,
  USER_PASSWORD_MAX_LENGTH,
  USER_PASSWORD_MIN_LENGTH,
  WORK_EXPERIENCE_DESCRIPTION_MAX_LENGTH,
  WORK_EXPERIENCE_DESCRIPTION_MIN_LENGTH,
  WORK_POSITION_MAX_LENGTH,
  WORK_POSITION_MIN_LENGTH,
} from '../constants/validator.constants';

export const EXCEPTION_MESSAGES = {
  // UserAccount
  PASSWORD_IS_MISMATCH: '비밀번호가 일치하지 않습니다.',
  NEED_IS_LOGIN: '로그인이 필요합니다.',
  USER_IS_NOT_FOUND: '존재하지 않는 사용자입니다.',
  EMAIL_IS_ALREADY_EXISTS: '이미 존재하는 이메일입니다.',
  PASSWORD_IS_NOT_MATCH: '비밀번호가 일치하지 않습니다.',

  // ProfileImage
  PROFILE_IMAGE_IS_TOO_LARGE: '프로필 이미지는 500KB 이하로 업로드 가능합니다.',
  PROFILE_IMAGE_IS_NOT_IMAGE: '이미지 파일만 업로드 가능합니다.',
  PROFILE_IMAGE_IS_NOT_FOUND: '존재하지 않는 프로필 이미지입니다.',

  // File
  FILE_UPLOAD_FAILED: '파일을 업로드에 실패했습니다.',

  // ProfileImageName
  PROFILE_IMAGE_NAME_IS_TOO_LONG: `프로필 이미지 이름은 ${PROFILE_IMAGE_NAME_MAX_LENGTH}글자 이하이어야 합니다.`,
  PROFILE_IMAGE_NAME_IS_TOO_SHORT: `프로필 이미지 이름은 ${PROFILE_IMAGE_NAME_MIN_LENGTH}글자 이상이어야 합니다.`,

  // Email
  EMAIL_IS_NOT_MATCHES: '이메일 형식이 올바르지 않습니다.',

  // Nickname
  NICKNAME_IS_TOO_LONG: `닉네임은 ${USER_NICKNAME_MAX_LENGTH}글자 이하이어야 합니다.`,
  NICKNAME_IS_TOO_SHORT: `닉네임은 ${USER_NICKNAME_MIN_LENGTH}글자 이상이어야 합니다.`,

  // Address
  ADDRESS_IS_TOO_LONG: `주소는 ${USER_ADDRESS_MAX_LENGTH}글자 이하이어야 합니다.`,
  ADDRESS_IS_TOO_SHORT: `주소는 ${USER_ADDRESS_MIN_LENGTH}글자 이상이어야 합니다.`,

  // Password
  USER_PASSWORD_IS_TOO_LONG: `비밀번호는 ${USER_PASSWORD_MAX_LENGTH}글자 이하이어야 합니다.`,
  USER_PASSWORD_IS_TOO_SHORT: `비밀번호는 ${USER_PASSWORD_MIN_LENGTH}글자 이상이어야 합니다.`,
  USER_PASSWORD_IS_NOT_MATCHES:
    '비밀번호는 영문 대문자, 영문 소문자, 숫자, 특수문자를 모두 포함해야 합니다.',

  // PhoneNumber
  PHONE_NUMBER_IS_NOT_MATCHES: '전화번호 형식이 올바르지 않습니다.',

  // Introduction
  INTRODUCTION_IS_TOO_LONG: `자기소개는 ${INTRODUCTION_MAX_LENGTH}글자 이하이어야 합니다.`,
  INTRODUCTION_IS_TOO_SHORT: `자기소개는 ${INTRODUCTION_MIN_LENGTH}글자 이상이어야 합니다.`,
  BRIEF_INTRODUCTION_IS_TOO_LONG: `한줄 소개는 ${INTRODUCTION_MAX_LENGTH}글자 이하이어야 합니다.`,

  // ResumeName
  RESUME_NAME_IS_TOO_LONG: `이력서 이름은 ${USER_NICKNAME_MAX_LENGTH}글자 이하이어야 합니다.`,

  // ResumeOccupation
  RESUME_OCCUPATION_IS_TOO_LONG: `이력서 직업은 ${USER_NICKNAME_MAX_LENGTH}글자 이하이어야 합니다.`,

  // Link
  LINK_IS_NOT_MATCHES: '링크 형식이 올바르지 않습니다.',

  // ProjectName
  PROJECT_NAME_IS_TOO_LONG: `프로젝트 이름은 ${PROJECT_NAME_MAX_LENGTH}글자 이하이어야 합니다.`,
  PROJECT_NAME_IS_TOO_SHORT: `프로젝트 이름은 ${PROJECT_NAME_MIN_LENGTH}글자 이상이어야 합니다.`,

  // OrganizationName
  ORGANIZATION_NAME_IS_TOO_LONG: `조직 이름은 ${ORGANIZATION_NAME_MAX_LENGTH}글자 이하이어야 합니다.`,
  ORGANIZATION_NAME_IS_TOO_SHORT: `조직 이름은 ${ORGANIZATION_NAME_MIN_LENGTH}글자 이상이어야 합니다.`,

  // ProjectDescription
  PROJECT_DESCRIPTION_IS_TOO_LONG: `프로젝트 설명은 ${PROJECT_DESCRIPTION_MAX_LENGTH}글자 이하이어야 합니다.`,
  PROJECT_DESCRIPTION_IS_TOO_SHORT: `프로젝트 설명은 ${PROJECT_DESCRIPTION_MIN_LENGTH}글자 이상이어야 합니다.`,

  // CompanyName
  COMPANY_NAME_IS_TOO_LONG: `회사 이름은 ${COMPANY_NAME_MAX_LENGTH}글자 이하이어야 합니다.`,
  COMPANY_NAME_IS_TOO_SHORT: `회사 이름은 ${COMPANY_NAME_MIN_LENGTH}글자 이상이어야 합니다.`,

  // Department
  DEPARTMENT_IS_TOO_LONG: `부서 이름은 ${DEPARTMENT_MAX_LENGTH}글자 이하이어야 합니다.`,
  DEPARTMENT_IS_TOO_SHORT: `부서 이름은 ${DEPARTMENT_MIN_LENGTH}글자 이상이어야 합니다.`,

  // WorkExperienceDescription
  WORK_EXPERIENCE_DESCRIPTION_IS_TOO_LONG: `근무 설명은 ${WORK_EXPERIENCE_DESCRIPTION_MAX_LENGTH}글자 이하이어야 합니다.`,
  WORK_EXPERIENCE_DESCRIPTION_IS_TOO_SHORT: `근무 설명은 ${WORK_EXPERIENCE_DESCRIPTION_MIN_LENGTH}글자 이상이어야 합니다.`,

  // WorkPosition
  WORK_POSITION_IS_TOO_LONG: `직무는 ${WORK_POSITION_MAX_LENGTH}글자 이하이어야 합니다.`,
  WORK_POSITION_IS_TOO_SHORT: `직무는 ${WORK_POSITION_MIN_LENGTH}글자 이상이어야 합니다.`,

  // InterestField
  INTEREST_FIELD_NAME_IS_TOO_LONG: `관심 분야 이름은 ${INTEREST_FIELD_NAME_MAX_LENGTH}글자 이하이어야 합니다.`,
  INTEREST_FIELD_NAME_IS_TOO_SHORT: `관심 분야 이름은 ${INTEREST_FIELD_NAME_MIN_LENGTH}글자 이상이어야 합니다.`,

  // FieldOfWork
  FIELD_OF_WORK_NAME_IS_TOO_LONG: `직무 이름은 ${FIELD_OF_WORK_NAME_MAX_LENGTH}글자 이하이어야 합니다.`,
  FIELD_OF_WORK_NAME_IS_TOO_SHORT: `직무 이름은 ${FIELD_OF_WORK_NAME_MIN_LENGTH}글자 이상이어야 합니다.`,

  // TechnicalSkill
  TECHNICAL_SKILL_NAME_IS_TOO_LONG: `기술 이름은 ${TECHNICAL_SKILL_NAME_MAX_LENGTH}글자 이하이어야 합니다.`,
  TECHNICAL_SKILL_NAME_IS_TOO_SHORT: `기술 이름은 ${TECHNICAL_SKILL_NAME_MIN_LENGTH}글자 이상이어야 합니다.`,

  // ProfileFileName
  PROFILE_FILE_NAME_IS_TOO_LONG: `프로필 파일 이름은 ${PORTFOLIO_FILE_NAME_MAX_LENGTH}글자 이하이어야 합니다.`,
  PROFILE_FILE_NAME_IS_TOO_SHORT: `프로필 파일 이름은 ${PORTFOLIO_FILE_NAME_MIN_LENGTH}글자 이상이어야 합니다.`,

  // PortfolioFile
  PORTFOLIO_FILE_IS_TOO_LARGE:
    '포트폴리오 파일은 500KB 이하로 업로드 가능합니다.',
  PORTFOLIO_FILE_IS_NOT_PDF: 'PDF 파일만 업로드 가능합니다.',
};
