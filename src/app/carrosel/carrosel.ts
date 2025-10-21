import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrosel',
  imports: [NgClass],
  templateUrl: './carrosel.html',
  styleUrls: ['./carrosel.scss']

})
export class Carrosel implements  OnInit {

  visivel :boolean = false;
  contador : number = 0;
  direcao : number= 0;
  carrosel:  string[] = ['imagem01.png', 'imagem02.png', 'imagem03.png'];

  ngOnInit(): void {
      setTimeout(() => {
        this.visivel = true;
      }, 1000)
  }

  trocaProxima(){
    setTimeout(()=> {
    this.contador++;
     if(this.contador > 2){
        this.contador = 0;
     }
    }, 200);
  }

  trocaAnterior(){
    setTimeout(()=> {
    this.contador--;
        if(this.contador < 0){
          this.contador = 2;
        }
    }, 200);
  }

  


}
