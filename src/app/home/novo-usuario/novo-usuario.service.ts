import { NovoUsuario } from './novo-usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor(private http: HttpClient) { }

  //método post: 1º arg definição de onde o método irá acessar para fazer a operação
  //2º arg definição do que será enviado
  cadastraNovoUsuario(novoUsuario:NovoUsuario){
    return this.http.post('http://localhost:3000/user/signup', novoUsuario);
  }
}
