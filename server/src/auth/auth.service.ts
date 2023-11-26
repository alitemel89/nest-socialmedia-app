import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  logout(req) {
    // Check if the user is authenticated before logging out
    if (req.isAuthenticated) {
      // Call the logout method provided by Passport
      req.logout();
      return { message: 'Logout successful' };
    } else {
      return { message: 'User is not authenticated' };
    }
  }
  googleLogin(req) {
    if (!req.user) {
      return 'No user from google';
    }
    return {
      message: 'User Info from Google',
      user: req.user,
    };
  }

  
}
