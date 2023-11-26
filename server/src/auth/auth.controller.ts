import { AuthService } from './auth.service';
import { Controller, Get, UseGuards, Req, Post } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport'


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Get()
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) { }

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req) {
    return this.authService.googleLogin(req)
  }

  @Post('logout')
  logout(@Req() req) {
    // Use Passport's logout method to log the user out
    this.authService.logout(req);
    return { message: 'Logout successful' };
  }
}
