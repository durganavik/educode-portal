import { Component, signal, inject } from '@angular/core';
import { FormsModule } from '@angular/forms'; // 1. Forms import karein
import { Router } from '@angular/router'; // 2. Navigation ke liye

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule], // 3. Yahan add karein
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  private router = inject(Router); // Router inject karein

  // User inputs ke liye signals (Modern Angular way)
  email = signal('');
  password = signal('');
  errorMessage = signal('');

  onLogin() {
    // 4. Dummy Logic (Real app mein API call hoti hai)
    if (this.email() === 'admin@educode.com' && this.password() === '123456') {
      alert('Login Successful!');
      this.router.navigate(['/home']); // Sahi hone par Home page par bhej do
    } else {
      this.errorMessage.set('Invalid Email or Password! Try: admin@educode.com / 123456');
    }
  }
}