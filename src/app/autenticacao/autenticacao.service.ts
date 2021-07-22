import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  //Services são as classes responsáveis pelas regras de negócio, ex: comunicação com o back-end.

  constructor(private httpCliente: HttpClient) {}

  autenticar(usuario: string, senha: string): Observable<any>{//esse método retorna um Observable do tipo definido nos generics <> e ele irá retonar após a requisição ser concluída
    //post args: 1º arg é o local para onde enviaremos os dados, 2º é o body da nossa requisição
    return this.httpCliente.post('http://localhost:3000/user/login', {
      userName: usuario,
      password: senha,
    });
  }

}
