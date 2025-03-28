import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


export interface Pessoa{
  nome:string
  idade:number
  cidade:string
  profissao:string
}

@Component({
  selector: 'app-home',
  imports: [CommonModule],
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

    isPressed: boolean = false;

    onPress(){
        this.isPressed = !this.isPressed;
    }
}

