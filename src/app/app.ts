import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "../navbar/navbar/navbar";
import { CourseList } from './courseList/course-list/course-list';
import { Hero } from './hero/hero/hero';
import { Footer } from "./footer/footer";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, CourseList, Hero, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('educode-portal');
}
