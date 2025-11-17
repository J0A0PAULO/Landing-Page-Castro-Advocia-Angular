import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { emailPessoa } from './types/types';


@Injectable({
  providedIn: 'root'
})
export class Email {
  

  private  readonly API = 'http://localhost:3000/email';

  constructor(private http:HttpClient) {}

    listar(): Observable<emailPessoa[]> {
      return this.http.get<emailPessoa[]>(this.API);
    }
      
    incluir(emailPessoa : emailPessoa) : Observable<emailPessoa> {
      return this.http.post<emailPessoa>(this.API,  emailPessoa);
    }

    
    atualizar(emailPessoa: emailPessoa): Observable<emailPessoa> {
      return this.http.put<emailPessoa>(`${this.API}/${emailPessoa.id}`, emailPessoa);
    }


    remover(id: string | number): Observable<any> {
  return this.http.delete(`${this.API}/${id}`);
}
  }
