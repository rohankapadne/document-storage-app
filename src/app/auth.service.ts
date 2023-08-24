import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  constructor(private router: Router) {}
  login(username: string, password: string): boolean {
    // Authentication logic here can be implemented here e.g, using a token or API call.
    // I have used a static user
    if (username === 'test_username' && password === 'test_password') {
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }

  logout(): void {
    // Implement logout logic e.g, clearing tokens or session data.
    this.router.navigate(['login']);
    this.isAuthenticated = false;
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}
