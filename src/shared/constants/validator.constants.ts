export const NICKNAME_MAX_LENGTH = 20;
export const NICKNAME_MIN_LENGTH = 4;
export const USER_EMAIL_MAX_LENGTH = 50;
export const USER_EMAIL_MIN_LENGTH = 10;
export const USER_ADDRESS_MAX_LENGTH = 100;
export const USER_ADDRESS_MIN_LENGTH = 10;
export const USER_PHONE_NUMBER_MAX_LENGTH = 20;
export const USER_PHONE_NUMBER_MIN_LENGTH = 10;
export const USER_PASSWORD_MAX_LENGTH = 20;
export const USER_PASSWORD_MIN_LENGTH = 8;

export const IS_NICKNAME = {
  MAX_LENGTH: NICKNAME_MAX_LENGTH,
  MAX_LENGTH_MESSAGE: '닉네임은 ${NICKNAME_MAX_LENGTH}자 이내로 입력해주세요.',
  MIN_LENGTH: NICKNAME_MIN_LENGTH,
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
  MATCHES: /^(\d{2,3})-(\d{4})-(\d{4})$/,
  MATCHES_MESSAGE: '전화번호 형식이 올바르지 않습니다.',
};

export const IS_PASSWORD = {
  MAX_LENGTH: USER_PASSWORD_MAX_LENGTH,
  MAX_LENGTH_MESSAGE:
    '비밀번호는 ${USER_PASSWORD_MAX_LENGTH}자 이내로 입력해주세요.',
  MIN_LENGTH: USER_PASSWORD_MIN_LENGTH,
  MIN_LENGTH_MESSAGE:
    '비밀번호는 ${USER_PASSWORD_MIN_LENGTH}자 이상으로 입력해주세요.',
  MATCHES: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/,
  MATCHES_MESSAGE:
    '비밀번호는 영문, 숫자, 특수문자를 포함하여 8~20자로 입력해주세요.',
};