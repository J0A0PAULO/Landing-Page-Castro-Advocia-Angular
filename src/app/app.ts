import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Carrosel } from './carrosel/carrosel';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  imports: [Header, CommonModule, Carrosel],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('LandingPage');
}
