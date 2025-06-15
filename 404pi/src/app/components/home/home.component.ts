import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceComponent } from '../service/service.component'; // ajuste le chemin selon ton projet

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ServiceComponent], // ← ici
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  showAbout = false;

  displayAbout() {
    this.showAbout = true;
    setTimeout(() => {
      const section = document.getElementById('about-us');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0);
  }
  scrollToServices() {
  const el = document.getElementById('services');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}
scrollToTools() {
  const element = document.getElementById('tools');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

}
