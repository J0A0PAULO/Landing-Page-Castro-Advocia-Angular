import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrosel',
  imports: [NgClass],
  templateUrl: './carrosel.html',
  styleUrls: ['./carrosel.scss']

})
export class Carrosel implements OnInit {   
    img : string = "";
    index : number = 0;
    carrosel : String [] = ['imagem1.png', 'imagem2.png', 'imagem3.png', 'imagem4.png'];

    ngOnInit (){
      setInterval(()=> {
        this.index = (this.index + 1) % this.carrosel.length;
      }, 3000)
    }

}
