export const USER_NICKNAME_MAX_LENGTH = 20;
export const USER_NICKNAME_MIN_LENGTH = 4;
export const USER_EMAIL_MAX_LENGTH = 50;
export const USER_EMAIL_MIN_LENGTH = 10;
export const USER_ADDRESS_MAX_LENGTH = 100;
export const USER_ADDRESS_MIN_LENGTH = 5;
export const USER_PHONE_NUMBER_MAX_LENGTH = 20;
export const USER_PHONE_NUMBER_MIN_LENGTH = 10;
export const USER_PASSWORD_MAX_LENGTH = 20;
export const USER_PASSWORD_MIN_LENGTH = 8;
export const USER_EMAIL_PATTERN =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
export const USER_EMAIL_REGEX = new RegExp(USER_EMAIL_PATTERN);
export const USER_PHONE_NUMBER_PATTERN = /^(\d{2,3})-(\d{4})-(\d{4})$/;
export const USER_PASSWORD_PATTERN =
  /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/;
export const INTRODUCTION_MAX_LENGTH = 200;
export const INTRODUCTION_MIN_LENGTH = 1;
export const BRIEF_INTRODUCTION_MAX_LENGTH = 600;
export const RESUME_NAME_MAX_LENGTH = 10;
export const RESUME_OCCUPATION_MAX_LENGTH = 20;
export const LINK_PATTERN = /https?:\/\/[\w\-\.]+(\/[\w\-\.]*)*\/?/;
export const LINK_REGEX = new RegExp(LINK_PATTERN);
export const PROJECT_NAME_MAX_LENGTH = 20;
export const PROJECT_NAME_MIN_LENGTH = 1;
export const ORGANIZATION_NAME_MIN_LENGTH = 1;
export const ORGANIZATION_NAME_MAX_LENGTH = 20;
export const PROJECT_DESCRIPTION_MAX_LENGTH = 200;
export const PROJECT_DESCRIPTION_MIN_LENGTH = 1;
export const COMPANY_NAME_MAX_LENGTH = 20;
export const COMPANY_NAME_MIN_LENGTH = 1;
export const DEPARTMENT_MAX_LENGTH = 20;
export const DEPARTMENT_MIN_LENGTH = 1;
export const WORK_EXPERIENCE_DESCRIPTION_MAX_LENGTH = 200;
export const WORK_EXPERIENCE_DESCRIPTION_MIN_LENGTH = 1;
export const WORK_POSITION_MAX_LENGTH = 20;
export const WORK_POSITION_MIN_LENGTH = 1;
export const PROFILE_IMAGE_MAX_SIZE = 1024 * 500;
export const PROFILE_IMAGE_TYPE = /image\/(png|jpg|jpeg)/;
export const PROFILE_IMAGE_NAME_MAX_LENGTH = 20;
export const PROFILE_IMAGE_NAME_MIN_LENGTH = 1;
export const INTEREST_FIELD_NAME_MAX_LENGTH = 50;
export const INTEREST_FIELD_NAME_MIN_LENGTH = 1;
export const FIELD_OF_WORK_NAME_MAX_LENGTH = 50;
export const FIELD_OF_WORK_NAME_MIN_LENGTH = 1;
export const TECHNICAL_SKILL_NAME_MAX_LENGTH = 50;
export const TECHNICAL_SKILL_NAME_MIN_LENGTH = 1;
export const PORTFOLIO_FILE_NAME_MAX_LENGTH = 50;
export const PORTFOLIO_FILE_NAME_MIN_LENGTH = 1;
export const PORTFOLIO_FILE_MAX_SIZE = 1024 * 500;
export const PORTFOLIO_FILE_TYPE = /application\/pdf/;

export const IS_NICKNAME = {
  MAX_LENGTH: USER_NICKNAME_MAX_LENGTH,
  MAX_LENGTH_MESSAGE: '닉네임은 ${NICKNAME_MAX_LENGTH}자 이내로 입력해주세요.',
  MIN_LENGTH: USER_NICKNAME_MIN_LENGTH,
  MIN_LENGTH_MESSAGE:
    '닉네임은 ${NICKNAME_MIN_LENGTH}자 이상으로 입력해주세요.',
};

export const IS_USER_EMAIL = {
  EMAIL_MESSAGE: '이메일 형식이 올바르지 않습니다.',
  MAX_LENGTH: USER_EMAIL_MAX_LENGTH,
  MAX_LENGTH_MESSAGE:
    '이메일 주소는 ${USER_EMAIL_MAX_LENGTH}자 이내로 입력해주세요.',
  MIN_LENGTH: USER_EMAIL_MIN_LENGTH,
  MIN_LENGTH_MESSAGE:
    '이메일 주소는 ${USER_EMAIL_MIN_LENGTH}자 이상으로 입력해주세요.',
};

export const IS_USER_ADDRESS = {
  MAX_LENGTH: USER_ADDRESS_MAX_LENGTH,
  MAX_LENGTH_MESSAGE:
    '주소는 ${USER_ADDRESS_MAX_LENGTH}자 이내로 입력해주세요.',
  MIN_LENGTH: USER_ADDRESS_MIN_LENGTH,
  MIN_LENGTH_MESSAGE:
    '주소는 ${USER_ADDRESS_MIN_LENGTH}자 이상으로 입력해주세요.',
};

export const IS_USER_PHONE_NUMBER = {
  MAX_LENGTH: USER_PHONE_NUMBER_MAX_LENGTH,
  MAX_LENGTH_MESSAGE:
    '전화번호는 ${USER_PHONE_NUMBER_MAX_LENGTH}자 이내로 입력해주세요.',
  MIN_LENGTH: USER_PHONE_NUMBER_MIN_LENGTH,
  MIN_LENGTH_MESSAGE:
    '전화번호는 ${USER_PHONE_NUMBER_MIN_LENGTH}자 이상으로 입력해주세요.',
  MATCHES: USER_PHONE_NUMBER_PATTERN,
  MATCHES_MESSAGE: '전화번호 형식이 올바르지 않습니다.',
};

export const IS_PASSWORD = {
  MAX_LENGTH: USER_PASSWORD_MAX_LENGTH,
  MAX_LENGTH_MESSAGE:
    '비밀번호는 ${USER_PASSWORD_MAX_LENGTH}자 이내로 입력해주세요.',
  MIN_LENGTH: USER_PASSWORD_MIN_LENGTH,
  MIN_LENGTH_MESSAGE:
    '비밀번호는 ${USER_PASSWORD_MIN_LENGTH}자 이상으로 입력해주세요.',
  MATCHES: USER_PASSWORD_PATTERN,
  MATCHES_MESSAGE:
    '비밀번호는 영문, 숫자, 특수문자를 포함하여 8~20자로 입력해주세요.',
};

export const IS_INTRODUCTION = {
  MAX_LENGTH: INTRODUCTION_MAX_LENGTH,
  MAX_LENGTH_MESSAGE:
    '자기소개는 ${INTRODUCTION_MAX_LENGTH}자 이내로 입력해주세요.',
  MIN_LENGTH: INTRODUCTION_MIN_LENGTH,
  MIN_LENGTH_MESSAGE:
    '자기소개는 ${INTRODUCTION_MIN_LENGTH}자 이상으로 입력해주세요.',
};
