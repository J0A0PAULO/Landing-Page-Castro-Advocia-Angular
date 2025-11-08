import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-sobre-nos',
  imports: [NgClass],
  templateUrl: './sobre-nos.html',
  styleUrl: './sobre-nos.scss'
})
export class SobreNos implements OnInit  {

  containerVisivel : boolean = false;

  ngOnInit(){
    setTimeout(()=> {
      this.containerVisivel  = true;
      
    }, 500);
  }

}
