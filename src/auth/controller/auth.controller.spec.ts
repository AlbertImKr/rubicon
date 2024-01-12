import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from '../service/auth.service';
import { AuthController } from '../controller/auth.controller';
import { SignInDto, SignUpDto } from '../dto/auth.request.dto';
import { Tokens } from '../dto/auth.response.dto';
import { SignInDataDto, SignUpDataDto } from '../dto/signup.data.dto';
import { Email } from '../../shared/models/email.model';
import { Password } from '../../shared/models/password.model';
import { Nickname } from '../../shared/models/nickname.model';
import { Address } from '../../shared/models/address.model';
import { PhoneNumber } from '../../shared/models/phone-number.model';

describe('AuthController', () => {
  let authController: AuthController;
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: AuthService,
          useValue: {
            signIn: jest.fn(),
            signup: jest.fn(),
          },
        },
      ],
    }).compile();

    authController = module.get<AuthController>(AuthController);
    authService = module.get<AuthService>(AuthService);
  });

  describe('로그인', () => {
    it('성공', async () => {
      // given
      const signInDto = createTestSignInDto();
      const tokens = createTestTokens();
      jest.spyOn(authService, 'signIn').mockResolvedValue(tokens);

      // when
      const result = await authController.signIn(signInDto);

      // then
      expect(authService.signIn).toHaveBeenCalledWith(
        createTestSignInDataDto(),
      );
      expect(result).toEqual(tokens);
    });
  });

  describe('회원가입', () => {
    it('성공', async () => {
      // given
      const signUpDto = createTestSignUpDto();
      const tokens = createTestTokens();
      jest.spyOn(authService, 'signup').mockResolvedValue(tokens);

      // when
      const result = await authController.signup(signUpDto);

      // then
      expect(authService.signup).toHaveBeenCalledWith(
        createTestSignUpDataDto(),
      );
      expect(result).toEqual(tokens);
    });
  });

  function createTestTokens(): Tokens {
    return {
      accessToken: 'test access token',
      refreshToken: 'test refresh token',
    };
  }

  function createTestSignInDto(): SignInDto {
    return {
      email: 'test@email.coml',
      password: 'Password1!',
    };
  }

  function createTestSignInDataDto(): SignInDataDto {
    return {
      email: new Email('test@email.coml'),
      password: new Password('Password1!'),
    };
  }

  function createTestSignUpDto(): SignUpDto {
    return {
      nickname: 'test',
      email: 'test@email.com',
      address: 'test address',
      phoneNumber: '010-1234-5678',
      password: 'Password1!',
    };
  }

  function createTestSignUpDataDto(): SignUpDataDto {
    return {
      nickname: new Nickname('test'),
      email: new Email('test@email.com'),
      address: new Address('test address'),
      phoneNumber: new PhoneNumber('010-1234-5678'),
      password: new Password('Password1!'),
    };
  }
});