import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToolsComponent } from './components/tools/tools.component';
import { TeamComponent } from './components/team/team.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent, FooterComponent , ToolsComponent , TeamComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cybersecurity-website';

  @ViewChild('homeRef') homeRef!: HomeComponent;

  showAboutUs() {
    this.homeRef.displayAbout();
  }

  showServices() {
    this.homeRef.scrollToServices();
  }

  showTools() {
    this.homeRef.scrollToTools();
  }
    showTeamSection = false;

  showTeam() {
    this.showTeamSection = true;
    setTimeout(() => {
      const el = document.getElementById('team');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }
}
