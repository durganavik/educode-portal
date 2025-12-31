import { Component } from '@angular/core';

@Component({
  selector: 'app-mentors',
  standalone: true,
  imports: [],
  templateUrl: './mentors.html',
  styleUrl: './mentors.css'
})
export class Mentors {
  mentorsList = [
    {
      role: "Front End Development Expert",
      salary: "$105,000",
      bio: "Master modern user interfaces using HTML, CSS, JavaScript and framework like Angular.",
      classes: ["HTML & CSS Mastery", "Git & GitHub", "Responsive Design", "JavaScript Pro"],
      image: "https://cdn-icons-png.flaticon.com/512/606/606225.png",
      color: "#6c5ce7" // Purple
    },
    {
      role: "Back End Architecture Lead",
      salary: "$125,000",
      bio: "Deep dive into server-side logic, database management, and building scalable system architectures.",
      classes: ["Node.js & Express", "MongoDB Mastery", "REST API Design", "System Security"],
      image: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
      color: "#00b894" // Green
    },
    {
      role: "UI/UX Design Specialist",
      salary: "$95,000",
      bio: "Learn to design beautiful, user-centric interfaces and create seamless user experiences.",
      classes: ["Figma Foundations", "User Psychology", "Prototyping", "Design Systems"],
      image: "https://cdn-icons-png.flaticon.com/512/1260/1260212.png",
      color: "#fdcb6e" // Yellow
    },
    {
      role: "Mobile App Development",
      salary: "$110,000",
      bio: "Build high-performance native and cross-platform mobile applications for iOS and Android.",
      classes: ["Flutter Basics", "React Native", "Swift & Kotlin", "App Store Deployment"],
      image: "https://cdn-icons-png.flaticon.com/512/2586/2586488.png",
      color: "#0984e3" // Blue
    },
    {
      role: "Data Science & AI Expert",
      salary: "$140,000",
      bio: "Uncover insights from data and build intelligent machines using Python and Machine Learning.",
      classes: ["Python for Data", "Machine Learning", "Neural Networks", "Data Visualization"],
      image: "https://cdn-icons-png.flaticon.com/512/2103/2103442.png",
      color: "#d63031" // Red
    },
    {
      role: "Cyber Security Specialist",
      salary: "$135,000",
      bio: "Protect digital assets and learn the defensive strategies against modern cyber threats.",
      classes: ["Ethical Hacking", "Network Security", "Cryptography", "Penetration Testing"],
      image: "https://cdn-icons-png.flaticon.com/512/2092/2092663.png",
      color: "#2d3436" // Dark Grey
    }
  ];
}