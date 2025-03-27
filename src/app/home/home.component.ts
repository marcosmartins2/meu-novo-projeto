import { Component } from '@angular/core';


export interface Pessoa{
  nome:string
  idade:number
  cidade:string
  profissao:string
}

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent {
    usuario: Pessoa = {
        nome: 'Lucas',
        idade:22,
        cidade: 'São Paulo',
        profissao: 'Desenvolvedor',
    }
}

