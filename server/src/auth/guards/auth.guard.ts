import { Injectable, CanActivate, ExecutionContext, Inject } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { ACCESS_TOKEN_COOKIE_KEY } from '../constants';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(@Inject(AuthService) private readonly authService: AuthService) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const accessToken = request.cookies[ACCESS_TOKEN_COOKIE_KEY];

    const { userId } = await this.authService.verifyAccessToken(accessToken);
    request.user = { id: userId };
    return true;
  }
}
