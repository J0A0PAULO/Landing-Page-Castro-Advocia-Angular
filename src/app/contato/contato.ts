
import { Component } from '@angular/core';


@Component({
  selector: 'app-contato',
  imports: [],
  templateUrl: './contato.html',
  styleUrl: './contato.scss'
})
export class Contato {

    background_img : string = "url(contato.png)";

    colocarImagem(newIMageUrl: String) {
      this.background_img =`url(${newIMageUrl})`;
    }

}
