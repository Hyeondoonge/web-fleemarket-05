import { Response } from 'express';
import { Controller, Post, Body, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dtos';
import { ACCESS_TOKEN_COOKIE_KEY } from './constants';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/sign-in')
  async signIn(@Body() signInDto: SignInDto, @Res({ passthrough: true }) res: Response) {
    const { accessToken, accessTokenCookieOption } = await this.authService.validateUser(signInDto);
    res.cookie(ACCESS_TOKEN_COOKIE_KEY, accessToken, accessTokenCookieOption);
  }

  @Post('/sign-out')
  async signOut(@Res({ passthrough: true }) res: Response) {
    res.clearCookie(ACCESS_TOKEN_COOKIE_KEY);
  }
}
