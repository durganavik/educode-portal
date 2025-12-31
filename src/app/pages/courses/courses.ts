import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [],
  templateUrl: './courses.html',
  styleUrl: './courses.css'
})
export class Courses {
  // 1. Aapka main data array
  courseDetails = [
    { name: "The Complete Angular Bootcamp", mentor: "Dr. Angela Yu", price: 549, oldPrice: 3109, rating: 4.7, reviews: "405,514", image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=500", badge: "Bestseller" },
    { name: "React - The Complete Guide 2025", mentor: "Maximillian", price: 499, oldPrice: 2500, rating: 4.8, reviews: "120,000", image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=500", badge: "Highest Rated" },
    { name: "Python for Data Science & AI", mentor: "Jose Portilla", price: 599, oldPrice: 3500, rating: 4.6, reviews: "85,000", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=500", badge: "" },
    { name: "Full Stack Web Dev (MERN)", mentor: "Colt Steele", price: 699, oldPrice: 4000, rating: 4.9, reviews: "92,300", image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=500", badge: "Hot & New" },
    { name: "UI/UX Design for Developers", mentor: "Gary Simon", price: 399, oldPrice: 1500, rating: 4.5, reviews: "15,200", image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=500", badge: "" },
    { name: "Node.js Backend Masterclass", mentor: "Stephen Grider", price: 549, oldPrice: 2800, rating: 4.7, reviews: "56,000", image: "https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?q=80&w=500", badge: "" }
  ];

  // 2. Search Text ke liye Signal (Missing property fix)
  searchText = signal('');

  // 3. Filtered List ke liye Computed property (Missing property fix)
  filteredCourses = computed(() => {
    const term = this.searchText().toLowerCase();
    return this.courseDetails.filter(c => 
      c.name.toLowerCase().includes(term) || 
      c.mentor.toLowerCase().includes(term)
    );
  });

  // 4. Update Search function (Missing method fix)
  updateSearch(event: any) {
    this.searchText.set(event.target.value);
  }
}