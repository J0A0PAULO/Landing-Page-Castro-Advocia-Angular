import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [NgClass],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit{

  headerVisivel : boolean = false;

  ngOnInit(): void {
      setTimeout(()=> {
        this.headerVisivel = true;
      },300);
  }
}
