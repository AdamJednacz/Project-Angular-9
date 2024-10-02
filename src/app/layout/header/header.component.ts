import { Component } from '@angular/core';
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgIf,
    NgClass
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {


  isMenuOpen = false; // Tracks whether the menu is open or closed

  // This method toggles the menu open/close state
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
