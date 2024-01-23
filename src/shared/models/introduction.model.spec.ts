import {
  INTRODUCTION_MAX_LENGTH,
  INTRODUCTION_MIN_LENGTH,
} from '../constants/validator.constants';
import { EXCEPTION_MESSAGES } from '../exception/exception-messages.constants';
import { Introduction } from './introduction.model';

describe('Introduction', () => {
  const RIGHT_INTRODUCTION = 'a'.repeat(INTRODUCTION_MIN_LENGTH);
  const TOO_SHORT_INTRODUCTION = 'a'.repeat(INTRODUCTION_MIN_LENGTH - 1);
  const TOO_LONG_INTRODUCTION = 'a'.repeat(INTRODUCTION_MAX_LENGTH + 1);

  it('생성자에 정확한 소개를 전달하면 value 프로퍼티에 할당된다', () => {
    // given
    const introduction = RIGHT_INTRODUCTION;

    // when
    const introductionObject = new Introduction(introduction);

    // then
    expect(introductionObject.value).toBe(introduction);
  });

  it('생성자에 최소 길이보다 작은 소개를 전달하면 에러가 발생한다', () => {
    // given
    const introduction = TOO_SHORT_INTRODUCTION;

    // when
    const introductionObject = () => new Introduction(introduction);

    // then
    expect(introductionObject).toThrow(
      EXCEPTION_MESSAGES.INTRODUCTION_TOO_SHORT,
    );
  });

  it('생성자에 최대 길이보다 큰 소개를 전달하면 에러가 발생한다', () => {
    // given
    const introduction = TOO_LONG_INTRODUCTION;

    // when
    const introductionObject = () => new Introduction(introduction);

    // then
    expect(introductionObject).toThrow(
      EXCEPTION_MESSAGES.INTRODUCTION_TOO_LONG,
    );
  });
});
