import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from './../../autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = '';
  senha = '';

  constructor(
    private authService: AutenticacaoService, private router: Router
  ) { }

  ngOnInit(): void { }

  login(){
    //após obter o retorno da requisição realizada no método autenticar, o subscribe executa uma ação,
    //o 1º arg é uma função que será chamada quando a requisição der sucesso,
    //caso contrário 2º arg é executado pois houve uma falha na requisição
    this.authService.autenticar(this.usuario,this.senha).subscribe(() => {
      //se a autenticação estiver correta redireciona o usuário
      this.router.navigate(['animais']);
    }, (error) =>{
      alert("Usuário ou senha inválida");
      console.log(error);
    });
  }

}
