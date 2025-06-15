import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() servicesClicked = new EventEmitter<void>();

  onServicesClick() {
    this.servicesClicked.emit();
  }

  // Assure-toi d'avoir aussi onAboutClick() si tu l'utilises
  @Output() aboutClicked = new EventEmitter<void>();

  onAboutClick() {
    this.aboutClicked.emit();
  }
    @Output() toolsClicked = new EventEmitter<void>();

    @Output() teamClicked = new EventEmitter<void>();

onTeamClick() {
  this.teamClicked.emit();
}


}
