import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomException } from 'src/common/exceptions';
import { ErrorCode } from 'src/common/exceptions/enums';
import { Region } from 'src/regions/entities';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos';
import { CreateGithubUserDto } from './dtos/create-github-user.dto';
import { User } from './entities';
import { ProviderEnum } from './enums';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>
  ) {}

  async findByUserId(userId: string) {
    const user = await this.usersRepository.findOne({
      where: { id: userId },
      select: ['id', 'username', 'email', 'regions'],
      relations: ['regions'],
    });

    return user;
  }

  async findByEmail(email: string) {
    const user = await this.usersRepository.findOneBy({
      email,
    });
    return user;
  }

  async findByUserProvider(provider: ProviderEnum, providerUserId: string) {
    const user = await this.usersRepository.findOne({
      where: { provider, providerUserId },
    });

    return user;
  }

  async findUserDetailByEmail(email: string) {
    const user = await this.usersRepository.findOne({
      select: ['id', 'email', 'username', 'password'],
      where: {
        email,
        provider: ProviderEnum.EMAIL,
      },
    });
    return user;
  }

  async createUser({ email, username, password }: CreateUserDto) {
    const user = await this.findByEmail(email);
    if (user) {
      throw new CustomException(HttpStatus.BAD_REQUEST, ErrorCode.U001);
    }
    const newUser = await this.usersRepository.save(
      this.usersRepository.create({ email, username, password, provider: ProviderEnum.EMAIL })
    );
    return newUser;
  }

  async createSocialUser({ email, username, provider, providerUserId }: CreateGithubUserDto) {
    const newUser = await this.usersRepository.save(
      this.usersRepository.create({ email, username, provider, providerUserId })
    );
    return newUser;
  }

  async updateUserRegions(user: User, newRegions: Region[]) {
    await this.usersRepository.save({
      ...user,
      regions: newRegions,
    });
  }
}
