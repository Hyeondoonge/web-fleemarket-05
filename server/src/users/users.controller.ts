import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ExceptionResponse } from 'src/exceptions/response';
import { CreateUserDto } from './dtos';
import { IsAvailableResponse } from './responses';
import { UsersService } from './users.service';

@ApiTags('사용자 관련 API')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ description: '회원가입 API' })
  @ApiBadRequestResponse({
    type: ExceptionResponse,
    description: '이미 사용중인 이메일을 요청한 경우',
  })
  @Post('/')
  async createUser(@Body() createUserDto: CreateUserDto) {
    await this.usersService.createUser(createUserDto);
  }

  @ApiOperation({ description: '이메일 사용 가능 여부 API' })
  @ApiOkResponse({ type: IsAvailableResponse })
  @Get('/available/email')
  async isEmailAvailable(@Query('email') email: string) {
    const user = await this.usersService.findByEmail(email);
    return {
      isAvailable: !user,
    };
  }
}
