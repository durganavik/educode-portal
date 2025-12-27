import { Component } from '@angular/core';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList {
  courseDetails = [
    { name: "Angular-21", price: 1000 },
    { name: "React-21", price: 2000 },
    { name: "Vue-21", price: 3000 },
    { name: "Svelte-21", price: 4000 },
    { name: "Ember-21", price: 5000 },
    { name: "Polymer-21", price: 6000 }
  ];

    onEnroll(courseName: string) {
    alert(`Congratulations! You have successfully enrolled in ${courseName}.`);
  }
}