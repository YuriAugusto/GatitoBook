import { UsuarioService } from './usuario/usuario.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({//essa anotação permite que essa classe seja injetada em outras classes
  providedIn: 'root'
})
export class AutenticacaoService {
  //Services são as classes responsáveis pelas regras de negócio, ex: comunicação com o back-end.

  constructor(private httpCliente: HttpClient, private usuarioService: UsuarioService) {}

  autenticar(usuario: string, senha: string): Observable<HttpResponse<any>>{//esse método retorna um Observable do tipo definido nos generics <> e ele irá retonar após a requisição ser concluída
    //post args: 1º arg é o local para onde enviaremos os dados, 2º é o body da nossa requisição
    return this.httpCliente.post('http://localhost:3000/user/login',
      {
        userName: usuario,
        password: senha,
      },
      { observe : 'response' }
    ).pipe(
      tap((res) => {
        const authToken = res.headers.get('x-access-token') ?? '';
        this.usuarioService.salvaToken(authToken);
      })
    );
  }
}
