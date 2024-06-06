import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { NewUserDTO } from 'src/user/dto/new-user.dto';
import { UserDetails } from 'src/user/user.interface';
import { ExistingUserDTO } from 'src/user/dto/existing-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() user: NewUserDTO): Promise<UserDetails | null> {
    return await this.authService.register(user);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(
    @Body() user: ExistingUserDTO,
  ): Promise<{ token: string } | null> {
    return await this.authService.login(user);
  }

  @Post('verify-jwt')
  @HttpCode(HttpStatus.OK)
  async verifyJwt(@Body() payload: { jwt: string }): Promise<{ exp: number }> {
    return await this.authService.verifyJwt(payload.jwt);
  }
}
