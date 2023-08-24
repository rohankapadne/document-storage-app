import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private _authService: AuthService) {}

  onSubmit(): void {
    if (this._authService.login(this.username, this.password)) {
      alert('Login successful');
    } else {
      alert('Login failed. Please check your credentials.');
    }
  }

  get isAuthenticated(): boolean {
    return this._authService.isAuthenticatedUser();
  }
}
