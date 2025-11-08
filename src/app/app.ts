import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Carrosel } from './carrosel/carrosel';
import { CasosResolvidos } from './casos-resolvidos/casos-resolvidos';
import { Contato } from './contato/contato';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { SobreNos } from './sobre-nos/sobre-nos';

@Component({
  selector: 'app-root',
  imports: [Header, CommonModule, Carrosel, SobreNos, CasosResolvidos, Contato, Footer],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('LandingPage');
}
