
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Email } from '../services/email';
import { emailPessoa } from '../services/types/types';


@Component({
  selector: 'app-contato',
  imports: [FormsModule],
  templateUrl: './contato.html',
  styleUrl: './contato.scss'
})
export class Contato {
  nome: string = "";
  email: string = "";
  texto :string = "";
  
  ArrayEmail : emailPessoa[] = []; 
  
  constructor(private service:Email) {}  

  ngOnInit(){
    this.service.listar().subscribe((email) => {
      this.ArrayEmail  = email;
    })
  }

  enviarEmail(){
    const novoEmail: emailPessoa = {
      nome: this.nome,
      email : this.email,
      texto : this.texto 
  }

  this.service.incluir(novoEmail).subscribe((nome)=> {
      this.ArrayEmail.push(nome)
      alert("Email enviado com sucesso, Obrigado!!!")
    })
  }
}
