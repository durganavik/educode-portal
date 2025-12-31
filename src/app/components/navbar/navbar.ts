import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router'; // 👈 1. Yeh import karein

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive], // 👈 2. Yeh array mein add karein
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar { }