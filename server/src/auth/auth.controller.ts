import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('register')
  async register(@Request() req) {
    const { email, password } = req.body;
    return this.authService.register(email, password);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('logout')
  logout() {
    return this.authService.logout();
  }
}
