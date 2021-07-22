import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent implements OnInit {

  @Input()//serve para a variável mensagem receber a entrada a partir do html
  mensagem = '';

  constructor() { }

  ngOnInit(): void {
  }

}
