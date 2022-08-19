import { CookieOptions } from 'express';
import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { CustomException } from 'src/exceptions';
import { ErrorCode } from 'src/exceptions/enums';
import { User } from 'src/users/entities';
import { Repository } from 'typeorm';
import { SignInDto } from './dtos';
import { TokenPayload } from './interfaces';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService
  ) {}

  async validateUser({ email, password }: SignInDto) {
    const user = await this.usersRepository.findOne({
      select: ['id', 'email', 'username', 'password'],
      where: {
        email,
      },
    });
    if (!user) {
      throw new CustomException(HttpStatus.UNAUTHORIZED, ErrorCode.A001);
    }
    const isPasswordMatched = await user.comparePassword(password);
    if (!isPasswordMatched) {
      throw new CustomException(HttpStatus.UNAUTHORIZED, ErrorCode.A002);
    }
    const accessToken = await this.createAccessToken(user.id);
    return accessToken;
  }

  async createAccessToken(userId: string) {
    const payload = {
      userId,
      sub: 'access_token',
    };
    const accessToken = await this.jwtService.signAsync(payload);
    const accessTokenExpiresIn = this.configService.get<number>('JWT_EXPIRES_IN');
    const accessTokenCookieOption: CookieOptions = {
      httpOnly: true,
      maxAge: accessTokenExpiresIn,
    };
    return { accessToken, accessTokenCookieOption };
  }

  async verifyAccessToken(accessToken: string) {
    try {
      const payload = await this.jwtService.verifyAsync<TokenPayload>(accessToken, {
        ignoreExpiration: false,
      });
      return payload;
    } catch (error) {
      // ✨ JWT 관련 발생 에러 로직 추가
      if (error.name === 'JsonWebTokenError') {
        throw new CustomException(HttpStatus.UNAUTHORIZED, ErrorCode.A003);
      }
      if (error.name === 'TokenExpiredError') {
        throw new CustomException(HttpStatus.UNAUTHORIZED, ErrorCode.A004);
      }
      throw new CustomException(HttpStatus.UNAUTHORIZED, ErrorCode.V001);
    }
  }
}
