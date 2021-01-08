import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public transform: String;
  public transitionDuration: String;

  onClick(event: MouseEvent): void {
    this.transform = `translate(${event.clientX - 35}px, ${event.clientY - 65}px)`;
  }

  onSpeedChange(duration: String): void {
    this.transitionDuration = `${duration}s`;
  }

  constructor() { }
}
