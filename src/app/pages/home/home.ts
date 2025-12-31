import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink], // 👈 Ye zaroori hai buttons ke liye
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home { }