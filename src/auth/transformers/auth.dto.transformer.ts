import { Address } from '../../shared/models/address.model';
import { Email } from '../../shared/models/email.model';
import { Nickname } from '../../shared/models/nickname.model';
import { Password } from '../../shared/models/password.model';
import { PhoneNumber } from '../../shared/models/phone-number.model';
import { SignInDto, SignUpDto } from '../dto/auth.request.dto';
import { SignInData, SignUpData } from '../dto/auth.data.dto';

export class SignUpDataTransformer {
  static toData(signupDto: SignUpDto): SignUpData {
    const { email, nickname, password, address, phoneNumber } = signupDto;
    return {
      email: new Email(email),
      nickname: new Nickname(nickname),
      password: new Password(password),
      address: new Address(address),
      phoneNumber: new PhoneNumber(phoneNumber),
    };
  }
}

export class SignInDataTransformer {
  static toData(data: SignInDto): SignInData {
    const { email, password } = data;
    return {
      email: new Email(email),
      password: new Password(password),
    };
  }
}
